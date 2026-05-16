# M0 Demo Homepage Plan

## Implementation Plan

1. Scaffold React/Vite TypeScript app and install UI dependencies.
2. Create `src/content/home.ts` with all approved copy and data.
3. Generate project-specific imagery with GPTIMG and stage assets in
   `src/assets/doula/`.
4. Replace Vite starter UI with Doula homepage components.
5. Implement the reference-matched theme in CSS:
   - warm beige canvas
   - clay-orange primary CTA
   - olive/sage match CTA and trust marks
   - serif display headings
   - marketplace cards and wide search panel
6. Add responsive desktop/mobile rules.
7. Verify:
   - build
   - static copy scan
   - local browser smoke
   - internal preview URL

## Risk Controls

- Copy drift: render only from content data and scan for known internal words.
- Visual drift: keep structure aligned to selected reference before adding any
  extra flourishes.
- Image quality: use warm, realistic GPTIMG assets and avoid generated text
  inside photos.
- Scope drift: keep all interactions static for M0.

## Verification

Minimum evidence level: E4 lightweight frontend preview.

Commands:

- `npm run build`
- text scan for placeholders/internal copy
- local HTTP probe
- Playwright/browser smoke screenshots or DOM checks

Deliverable:

- Tailnet/internal preview URL
- Verification summary

## Repair Plan

1. Re-open M0 as an active visual repair pass and document the acceptance drift.
2. Enrich `src/content/home.ts` with final English copy for provider signals,
   trust details, matching fields, and CTA sections.
3. Adjust `src/App.tsx` only where richer content needs clearer semantic
   structure; keep the single-page demo scope.
4. Rewrite the theme and layout in `src/App.css` / `src/index.css`:
   - compact reference-like header and logo scale
   - calmer hero type scale and visible CTA row
   - first-view match panel with stronger product feel
   - denser provider cards with refined image ratio and trust metadata
   - softer beige, clay, and sage section rhythm
   - mobile-first overflow and spacing checks
5. Rebuild `dist/`, keep the existing HTTPS Tailnet preview service serving the
   rebuilt output, then verify the actual user-facing URL.
6. Capture post-repair desktop and mobile screenshots from the HTTPS preview and
   update project state with the new evidence.
