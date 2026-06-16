# HODA Wellness Group — Marketing Website

Single-page marketing website for **HODA Wellness Group** ("Health Optimization for Durable Aging").

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

## Project Structure

```
app/
├── layout.tsx                  # Root layout — fonts (Cormorant Garamond + Inter), metadata
├── page.tsx                    # Main page — assembles all sections
├── globals.css                 # Tailwind v4 theme tokens + animation utilities
└── components/
    ├── Navbar.tsx              # Sticky nav: transparent → solid on scroll, mobile drawer
    ├── Footer.tsx              # Footer with wordmark, contact, quick links
    ├── PlaceholderImage.tsx    # Neutral placeholder block for real photos later
    ├── useScrollReveal.ts      # IntersectionObserver hook for fade-in-up animations
    └── sections/
        ├── Hero.tsx            # Full-screen hero with overlay and dual CTAs
        ├── TheProblem.tsx      # Problem statement — text + placeholder image
        ├── FourPillars.tsx     # 4 pillar cards (Nutrition, Metabolic, Physical, Nervous)
        ├── BetterLife.tsx      # Long-form "Better Quality of Life" narrative
        ├── Program.tsx         # Program overview + timeline (Assessment → Implement → Re-assess)
        ├── WhyHoda.tsx         # Why HODA + stats row
        ├── Rates.tsx           # Two pricing cards (Assessment + Full 6-Week Program)
        ├── Team.tsx            # Team grid with circular placeholder portraits
        ├── Testimonials.tsx    # Three testimonial quote cards (marked as placeholder)
        ├── FinalCTA.tsx        # Bottom CTA band with email + phone links
```

## Adding Real Images

All images use `<PlaceholderImage>` components. To swap in real photos:

1. Drop images into `public/images/` (e.g. `public/images/hero-bg.jpg`)
2. Replace the `<PlaceholderImage>` component with `<Image>` from `next/image`:

```tsx
import Image from "next/image";

// Before:
<PlaceholderImage label="IMAGE: hero background" className="w-full h-full" />

// After:
<Image src="/images/hero-bg.jpg" alt="..." fill className="object-cover" />
```

### Image slots

| Section | Label in code | Recommended size |
|---------|---------------|------------------|
| Hero background | `IMAGE: full-width nature / wellness background` | 1920×1080 |
| The Problem | `IMAGE: person thriving — active, outdoor wellness lifestyle` | 800×600 |
| Team — Olga | `IMAGE: Olga Rubanov — founder portrait` | 400×400 (square) |
| Team — Anna | `IMAGE: Anna Rabinovich — nurse practitioner portrait` | 400×400 |
| Team — Eugenia | `IMAGE: Eugenia Kobylatsky — dietitian portrait` | 400×400 |
| Team — Jack | `IMAGE: Jack Johnston — personal trainer portrait` | 400×400 |

## Testimonials Note

The three testimonials in `app/components/sections/Testimonials.tsx` are **sample placeholders** marked with a code comment. Replace them with verified client quotes before launch.

## Color Palette

| Role | Value |
|------|-------|
| Background (warm cream) | `#FAF7F2` |
| Background (off-white) | `#F2EEE7` |
| Soft taupe | `#E7DFD3` |
| Body text (charcoal) | `#2E2A26` |
| Secondary text | `#6B5E52` |
| Primary accent (green) | `#5B7461` |
| Soft green | `#8AA194` |
| Blue accent | `#6E8CA0` |
| Light blue | `#A9C0CE` |

## Deployment

Deploy to Vercel in one command:

```bash
npx vercel
```

Or connect this repo to [vercel.com](https://vercel.com) for automatic deployments on push.
