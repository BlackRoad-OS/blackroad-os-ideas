# BlackRoad OS · Ideas Backlog

Ideas-Gen-0 scaffold for a Markdown-driven idea + experiment backlog. Ideas
live in `/ideas/*.md` and flow into GitHub issues and a lightweight Astro
viewer.

## Layout

- `/ideas` — backlog entries with front matter (`title, tags, status, eta`).
- `/src/pages` — Astro pages for the list and detail views.
- `/src/components` — tag and status UI components.
- `/src/lib/ideas.ts` — front-matter reader and parser.
- `/scripts` — build beacon + sync validation helpers.
- `/.github/workflows` — CI and issue sync.

## Front Matter

```md
---
title: Spiral Information Geometry Core
tags: [math, sig]
status: draft
eta: 2026-Q1
---
Short abstract…
```

## Quickstart

```bash
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # static viewer to /dist
```

## Sync GitHub Issues

On push, `.github/workflows/sync.yml` upserts issues titled `Idea: <title>`
with label `idea`. To run manually:

```bash
gh workflow run sync.yml
```

## Notes

- `scripts/postbuild.mjs` refreshes `public/sig.beacon.json` with `{ts, agent:
  'Ideas-Gen-0'}`.
- Markdownlint + Prettier keep docs tidy.
- `<!-- TODO(ideas-next): ... -->` markers flag obvious extensions (voting
  widgets, roadmap exports, richer metadata).
