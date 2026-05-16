# Doula

Doula is a demo homepage for a trusted marketplace and concierge matching
platform that helps families find vetted birth doulas, postpartum doulas,
night nannies, newborn care specialists, and culturally fluent postpartum
caregivers.

## Current State

- Lifecycle: `bootstrap`
- Track: `delivery-track`
- Strength: `full` long-project shell, one active milestone
- Active milestone: `M0-demo-homepage`
- Current product surface: localized single-page demo homepage in English,
  Traditional Chinese, and Japanese
- User preview target: `https://vps-jp.tail4b5213.ts.net:5177/`
- Verification status: latest provider, care-category, and FAQ polish pass is
  implemented and verified by build/lint/static scan, HTTPS preview probes,
  service health, and non-screenshot Chromium CDP checks

## Active Milestone

`milestones/M0-demo-homepage/`

M0 delivers a polished, browsable homepage matching the selected GPTIMG
reference image:

`/home/ubuntu/codex/gptimg/artifacts/requests/gptimg-20260516T055001Z-b788af4c/00029173-result-20260516-145151-4fd04214.png`

## Product Direction

The first version should feel like a premium Western family-care marketplace:
warm, calm, trustworthy, and easy to scan. The homepage is not a generic
maternal wellness landing page. It must communicate that the family can start a
real matching flow, compare providers, understand care categories, and trust the
platform's vetting and scope boundaries.

## Design Baseline

- Palette: pale beige, pale clay-orange, and muted sage/olive green from the
  reference image.
- Visual tone: warm editorial, modern marketplace, concierge trust.
- Avoid: baby-shower pink, medical/hospital styling, generic startup gradients,
  childish baby icons, and decorative blobs.
- Imagery: generated standalone assets, not cropped from the reference
  screenshot.

## Active Repair Direction

The first implementation worked technically but read oversized, low-density, and
insufficiently close to the selected reference. The repair pass will:

- Rebalance the desktop hero so the header, headline, supporting copy, CTAs,
  image, and match panel follow the reference's calmer scale and vertical
  rhythm.
- Turn the match panel into the primary product entry point with stronger field
  grouping, refined icon treatment, clear selected values, and a concise trust
  note.
- Upgrade provider cards with richer marketplace signals: ratings, review
  counts, rates, availability, location, languages, credentials, and short
  family-facing review snippets.
- Make the palette a real brand system using pale beige canvas, light clay
  orange buttons/highlights, soft sage surfaces, and restrained olive action
  states.
- Reduce repetitive section rhythm below the fold by varying section density,
  card treatments, trust details, and CTA layouts while keeping the reference
  order.
- Preserve the content rule: all visible copy must come from approved content
  data, with no prompt, TODO, placeholder, or internal guidance text rendered.

Latest Open Design feedback fixes:

- Desktop header now has a soft readable treatment over the hero image so nav
  labels do not sit directly on busy face/image areas.
- Provider cards now use one repeated information system: area, languages,
  response, review snippet, credentials, rate, and next opening occupy the same
  slots across all four cards.
- Mobile layout was rebuilt with a separate mobile hero image, compact match
  form, unified compact provider cards, and the same beige/clay/olive brand
  language as desktop.
- Latest hero revision removes the full-width top fog, separates the compact
  floating glass header from the image layer, and keeps the caregivers' faces
  visible in the desktop hero.
- Latest background revision removes the rejected pale-orange section band and
  uses one warm pale-beige page canvas with white-beige floating section layers,
  soft borders, and restrained shadows. Clay orange is kept for CTAs and small
  accents only.
- Header language controls switch the full page between English, Traditional
  Chinese, and Japanese through the approved content source.
- Latest mobile polish revision turns the Trust and How matching works sections
  into compact 2-by-2 mobile grids with shorter approved copy, reducing vertical
  waste while keeping the same desktop section structure.
- Buttons and small interactive cards now have restrained micro-interactions:
  hover lift, color or shadow feedback, focus rings, active press feedback, and
  reduced-motion support.
- Latest navigation/footer revision makes desktop header links a pure in-page
  ordered table of contents: Find Support, How It Works, For Providers,
  Resources, and About Us. Each link targets the matching lower-page section
  with scroll offset for the floating header.
- Mobile footer was rebuilt into a compact brand block, two-column link area,
  compressed newsletter form, and smaller legal row instead of the previous
  oversized single-column stack.
- Latest logo revision uses the selected first GPTIMG logo concept as a
  transparent PNG brand mark. Header, process-step badges, and footer now
  reference this raster asset instead of the previous hand-drawn CSS/SVG-style
  arch mark.
- Latest logo spacing pass slightly reduces the header and footer PNG mark size
  so the mark has more breathing room inside the floating header and footer
  brand block.
- Latest provider/card polish keeps desktop provider cards aligned but reduces
  the visible pill density, while mobile provider cards now show only portrait,
  name, role, rating, area, rate, and one request CTA.
- Latest mobile care-category polish changes the full vertical stack into a
  horizontal snap row that keeps all categories available without stretching the
  page.
- Latest FAQ polish replaces static buttons with localized accordion questions
  and answers that expand and collapse with a restrained transition.
- Latest Japanese provider-card fix constrains the desktop title row so review
  counts remain inside the card at narrower desktop widths.

## Content Rule

Only approved user-facing copy may appear in the UI. Internal implementation
notes, prompt text, TODO labels, placeholder copy, component descriptions, or
assistant planning language must never be rendered on the page. If copy is
missing, write final English copy in the content source first, then render it
from there.

## Current Non-Goals

- No real accounts, login, payments, provider onboarding workflow, backend, or
  database.
- No medical claims or clinical service promises.
- No backend localization service; demo localization is static front-end
  content for English, Traditional Chinese, and Japanese.

## Verification Contract

M0 is complete only when:

- `npm run build` passes.
- The page runs on a local/internal preview URL.
- Desktop and mobile browser smoke checks pass.
- The rendered page contains no implementation placeholder or internal guidance
  text.
- The homepage visually follows the selected reference structure and palette
  closely enough for client demo review after the M0 repair pass.

## Current Preview

- HTTPS Tailnet preview: `https://vps-jp.tail4b5213.ts.net:5177/`
- Preview service: `systemctl --user status doula-preview.service`
- Preview backend: Python static server on `127.0.0.1:5176`, serving `dist/`
- HTTPS proxy: `tailscale serve --https=5177 127.0.0.1:5176`
- Desktop screenshot: `artifacts/acceptance/home-desktop-https-fixed.png`
- Mobile full-page screenshot:
  `artifacts/acceptance/home-mobile-https-fixed-scale1.png`
- Latest desktop repair screenshot:
  `artifacts/acceptance/home-desktop-open-design-fix-v1.png`
- Latest desktop full-page repair screenshot:
  `artifacts/acceptance/home-desktop-full-open-design-fix-v1.png`
- Latest mobile full-page repair screenshot:
  `artifacts/acceptance/home-mobile-open-design-fix-v1.png`
- Latest floating-header desktop screenshot:
  `artifacts/acceptance/home-desktop-floating-header-v1.png`
- Latest floating-header mobile screenshot:
  `artifacts/acceptance/home-mobile-floating-header-v1.png`
- Background Scheme B verification used command checks only after the user asked
  not to capture more screenshots.
- Latest mobile compact-grid and interaction pass was verified with build,
  lint, static copy scan, HTTPS probes, service health, and a non-screenshot
  Chromium computed-style check at a 390px mobile viewport.
- Latest navigation/footer pass was verified with build, lint, static copy
  scan, HTTPS probes, service health, desktop Chromium header click checks, and
  mobile Chromium computed-style checks.
- Latest logo pass was verified with build, lint, static copy scan, HTTPS
  probes, service health, and Chromium computed-size checks for desktop and
  mobile header, step, and footer placements.
- Latest Open Design final review uses current desktop and mobile full-page
  screenshots:
  `artifacts/acceptance/home-desktop-open-design-final-v1.png` and
  `artifacts/acceptance/home-mobile-open-design-final-v1.png`.
- Latest provider/care/FAQ polish was verified with build, lint, static copy
  scan, HTTPS probes for English, Traditional Chinese, and Japanese, service
  health, and Chromium CDP checks for mobile provider density, mobile care
  horizontal scrolling, localized CTA containment, and FAQ accordion behavior.
  No new screenshots were captured for this pass.
- Latest Japanese provider overflow fix was verified with build, lint, static
  copy scan, HTTPS Japanese probe, service health, and a Chromium CDP overflow
  check at a 932px desktop viewport.
