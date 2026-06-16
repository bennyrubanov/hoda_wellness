# Ghost Blog Integration (ISR-Friendly)

Guidance for adding a [Ghost](https://ghost.org) blog to this Next.js 16 app while keeping
Vercel compute (Fluid Active CPU) and image/bandwidth usage low.

This is a planning + scaffolding reference, not yet-implemented code. Treat the snippets
as the intended shape of the integration when we build it.

> **Next.js version note:** this repo runs Next.js 16, which uses **Cache Components**
> (`use cache`, `cacheLife`, `cacheTag`) instead of the older `export const revalidate`
> / `unstable_cache` patterns. The snippets below follow the 16 conventions. Always
> check `node_modules/next/dist/docs/` for the installed version before writing real code.

---

## Goal: keep it "mostly static"

A wellness marketing site + blog should serve almost entirely from the CDN. The thing
that burns money/limits on Vercel is **functions running per request** (SSR), which is
what drove the Fluid Active CPU pain on the AI-trader project.

The fix is to make Ghost content **cached and revalidated on a schedule or on publish**,
never fetched live on every visitor request.

### Rendering strategy ranking (cheapest → most expensive)

| Strategy | Vercel compute | Freshness | Use it? |
|---|---|---|---|
| Build-time fetch (SSG) | ~none | rebuild per change | Good, but needs a deploy per edit |
| **Cached + on-demand revalidate** | very low | seconds after publish | **Recommended** |
| SSR (fetch every request) | high | always live | Avoid |

We use the middle option: pages are cached (effectively static) and only regenerate when
Ghost tells us content changed (via webhook) or after a max staleness window.

---

## Architecture

```
Ghost (CMS + content)  ──Content API──▶  Next.js (this app on Vercel)
   │                                          │
   │  publish/update event                    │  serves cached/prerendered pages
   └──────── webhook ──────────────▶  /api/revalidate  (invalidates cache tags)
```

- **Ghost** hosts the content and admin UI (Ghost Pro, or self-hosted). It is *not* on
  Vercel and does not count against Vercel limits.
- **This app** reads posts through the Ghost **Content API** (read-only key) and renders
  them as cached Next.js pages.
- A **webhook** from Ghost hits a revalidation route on publish/update so readers see new
  content within seconds without a full redeploy.

---

## Environment variables

Add these in Vercel project settings (and `.env.local` for dev). Never commit them.

```bash
# Ghost Content API (read-only, safe-ish but still keep private)
GHOST_URL="https://your-ghost-site.com"
GHOST_CONTENT_API_KEY="<content-api-key>"

# Shared secret to authenticate Ghost's webhook calls to our revalidate route
GHOST_REVALIDATE_SECRET="<random-long-string>"
```

Generate the secret with `openssl rand -hex 32`.

---

## Scaffolding plan

Suggested file layout when we implement:

```
app/
  blog/
    page.tsx            # post index (cached)
    [slug]/
      page.tsx          # single post (cached, one tag per slug)
  api/
    revalidate/
      route.ts          # Ghost webhook target -> revalidateTag
lib/
  ghost.ts              # Content API client + cached fetchers
```

### 1. Ghost client + cached fetchers (`lib/ghost.ts`)

The official client is `@tryghost/content-api`. Wrap each fetch in a `use cache`
function and tag it so the webhook can invalidate precisely.

```ts
import GhostContentAPI from '@tryghost/content-api'
import { cacheLife, cacheTag } from 'next/cache'

const api = new GhostContentAPI({
  url: process.env.GHOST_URL!,
  key: process.env.GHOST_CONTENT_API_KEY!,
  version: 'v5.0',
})

export async function getPosts() {
  'use cache'
  cacheTag('posts')           // invalidated when any post changes
  cacheLife('days')           // safety net; webhook handles freshness
  return api.posts.browse({ limit: 'all', include: 'tags,authors' })
}

export async function getPost(slug: string) {
  'use cache'
  cacheTag('posts', `post:${slug}`)
  cacheLife('days')
  return api.posts.read({ slug }, { include: 'tags,authors' })
}
```

Key points:
- `use cache` makes these results cached, so repeated visits don't re-hit Ghost or run a
  function per request.
- `cacheTag` lets the webhook flush just the affected content.
- `cacheLife('days')` is a fallback ceiling — even if a webhook is missed, content
  refreshes eventually. Tune to taste (`'hours'`, `'days'`, `'weeks'`, `'max'`).
- Do **not** read `cookies()`/`headers()` inside a `use cache` function (not allowed).
  The blog is anonymous content, so this isn't a constraint here.

### 2. Pages (`app/blog/...`)

```tsx
// app/blog/page.tsx
import Link from 'next/link'
import { getPosts } from '@/lib/ghost'

export default async function BlogIndex() {
  const posts = await getPosts()
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>
          <Link href={`/blog/${p.slug}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  )
}
```

```tsx
// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getPost } from '@/lib/ghost'

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug).catch(() => null)
  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      {/* Ghost returns sanitized HTML; render carefully */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
```

> `params` is a Promise in Next.js 16 — always `await` it.

### 3. Revalidation webhook (`app/api/revalidate/route.ts`)

Ghost fires webhooks on post publish/update/delete. Point them at this route; it flushes
the relevant cache tags so the next request regenerates.

```ts
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const secret = new URL(req.url).searchParams.get('secret')
  if (secret !== process.env.GHOST_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  // Broad invalidation is simplest and cheap for a small blog.
  revalidateTag('posts', 'max')

  return NextResponse.json({ ok: true, revalidated: true })
}
```

- In Next.js 16, pass a cacheLife profile to `revalidateTag` (e.g. `'max'`); the
  single-argument form is deprecated.
- For a small blog, flushing the broad `posts` tag on every change is fine and keeps the
  webhook trivial. If the blog grows large, parse the payload and flush
  `post:${slug}` for surgical invalidation.
- Configure the webhook in Ghost Admin → Settings → Integrations → custom integration →
  add webhook → URL `https://<your-domain>/api/revalidate?secret=<GHOST_REVALIDATE_SECRET>`.
  Add events for Post published / updated / unpublished / deleted.

### 4. Images (`next.config.ts`)

Ghost serves post images from its own domain. Allow them through `next/image` so they get
optimized and CDN-cached:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true, // enables the use cache directive used above
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'your-ghost-site.com' },
      // Ghost Pro images are also served from *.ghost.io in some setups
    ],
  },
}

export default nextConfig
```

> **Watch the image-optimization quota.** A media-heavy blog can approach Vercel's image
> transformation cap before it touches CPU limits. If that becomes an issue, cap rendered
> image sizes, or offload to an external image CDN / use Ghost's pre-sized image URLs.

---

## Vercel limits — what to actually watch

With the cached pattern above, the site stays light. Realistic pressure points, in order:

1. **Image optimization transformations** — most likely first limit for a blog with lots
   of photos. Mitigate as noted above.
2. **Bandwidth** (100 GB/mo on Hobby) — optimize image sizes; fine for modest traffic.
3. **Fluid Active CPU / function invocations** — stays minimal as long as we *don't* go
   SSR. The webhook + occasional regeneration is negligible.
4. **Commercial-use terms** — Hobby is non-commercial. If this becomes a business site,
   plan for Vercel Pro ($20/mo). This is a terms/scale call, not a technical wall.

The lesson from the AI-trader repo (Active CPU exhaustion) does **not** repeat here as
long as content is cached and revalidated, not server-rendered per request.

---

## Portability (moving hosting later)

This integration stays host-agnostic if we keep to standard Next.js features:

- **No Vercel-only primitives** — no Vercel KV/Blob/Postgres, Cron, or Edge Config. Ghost
  is the data source; caching uses core Next.js APIs.
- The Git → production auto-deploy link lives on the host's side, not in the repo, so
  re-pointing `main` → prod on a different Vercel account (e.g. mom's) or another host is
  a dashboard operation, not a code change.
- One caveat: `use cache` **requires a Node server** (no static export, no Edge runtime).
  This is fine on Vercel, Netlify, Cloudflare, or a Node VPS — just not a pure static
  export target. If a future host needs static export, swap the `use cache` fetchers for
  build-time SSG.

---

## Implementation checklist (when we build it)

- [ ] `npm install @tryghost/content-api`
- [ ] Add env vars locally and in Vercel
- [ ] Enable `cacheComponents: true` and image `remotePatterns` in `next.config.ts`
- [ ] Add `lib/ghost.ts` cached fetchers
- [ ] Add `app/blog` index + `[slug]` pages
- [ ] Add `app/api/revalidate/route.ts`
- [ ] Create Ghost custom integration + webhook pointing at the revalidate route
- [ ] Verify: publish in Ghost → page updates within seconds without a redeploy
