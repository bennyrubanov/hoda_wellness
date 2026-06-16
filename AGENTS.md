<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Publishing changes

The user is non-technical and won't use git terminology. If they say anything like "okay publish it," "push the changes," "make it live," "send it up," or similar, this means: commit the current changes and run `git push` to `main` on GitHub. Vercel is integrated with this repo, so a push to `main` auto-deploys. Don't ask them to run git commands themselves — just do it (after the usual commit-message/confirmation norms for pushing).

This repo has multiple collaborators (Benny and others, mostly non-technical) committing from other machines. They will forget to pull before starting work nearly every time, so don't wait for a git command to trigger it: run `git pull` at the very start of any work session, before making any local edits at all — not just before commit/push/branch/merge. If you're about to read or edit files to make changes, pull first. This keeps the local copy from being stale and avoids painful merge conflicts later.
