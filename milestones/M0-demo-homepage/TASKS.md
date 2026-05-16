# M0 Demo Homepage Tasks

- [x] Scaffold React/Vite TypeScript project.
- [x] Install `lucide-react`.
- [x] Generate standalone imagery.
- [x] Create approved content data source.
- [x] Implement homepage components.
- [x] Implement reference-matched CSS theme.
- [x] Run build.
- [x] Run static copy scan.
- [x] Run browser smoke/preview verification.
- [x] Provide internal preview URL.

## Repair Pass

- [x] Record user visual rejection and repair requirements.
- [x] Enrich approved homepage copy with marketplace and trust signals.
- [x] Refactor homepage structure for richer provider and trust presentation.
- [x] Rework visual system to match the selected reference more closely.
- [x] Verify desktop and mobile responsive layout.
- [x] Run build and lint.
- [x] Run static copy pollution scan.
- [x] Refresh HTTPS Tailnet preview from rebuilt `dist/`.
- [x] Capture post-repair desktop and mobile screenshots.
- [x] Update README with repair verification status and evidence.

## Open Design Feedback Fixes

- [x] Add a readable desktop header treatment over the hero image.
- [x] Redesign provider-card details into aligned, repeatable slots.
- [x] Equalize four provider cards so they present as one system.
- [x] Rebuild mobile hero, match panel, provider cards, and lower sections as a
      coherent mobile layout.
- [x] Re-run desktop and mobile screenshots after the Open Design feedback
      fixes.

## Hero Header Redesign

- [x] Remove the full-width top fog/gradient overlay.
- [x] Rebuild desktop header as a compact floating glass navigation bar.
- [x] Separate the hero image layer from the header so faces are not covered.
- [x] Re-focus desktop hero image on the two caregivers and baby.
- [x] Re-run build, lint, static copy scan, and desktop/mobile HTTPS screenshots.

## Localization And Final Visual Fixes

- [x] Remove the white strip around the floating header so hero imagery shows
      behind it.
- [x] Make the floating header remain visible while scrolling.
- [x] Change the trust band background from pale green to pale orange.
- [x] Crop the For Families card image so the right-edge white strip is hidden.
- [x] Add English, Traditional Chinese, and Japanese language controls to the
      header.
- [x] Replace full-page copy when Traditional Chinese or Japanese is selected.
- [x] Verify that longer Chinese and Japanese labels do not break desktop or
      mobile layout.

## Background Scheme B

- [x] Replace the rejected pale-orange trust band with a beige floating-card
      treatment.
- [x] Keep the page canvas as a consistent warm beige surface.
- [x] Use soft white-beige section cards, borders, and shadows for hierarchy.
- [x] Keep orange as an accent for CTAs and small highlights only.
- [x] Re-run build, lint, static copy scan, HTTPS probes, and service health
      check without taking new screenshots per user request.

## Mobile Compact Grid And Interaction Polish

- [x] Compress Trust section copy and titles through the approved content source.
- [x] Compress How matching works copy and titles through the approved content
      source.
- [x] Change mobile Trust items to a 2-by-2 compact grid.
- [x] Change mobile How matching works steps to a 2-by-2 compact grid.
- [x] Add restrained hover, focus, active, shadow, color, and lift interactions
      to buttons and small cards.
- [x] Add reduced-motion handling for users who prefer minimal animation.
- [x] Verify 390px mobile computed styles with Chromium without taking a new
      screenshot.
- [x] Re-run build, lint, static copy scan, HTTPS probes, and service health
      check.

## Header Anchor Order And Mobile Footer Repair

- [x] Reorder header nav to match lower-page section order.
- [x] Map header nav targets to `#find-support`, `#how-it-works`,
      `#for-providers`, `#resources`, and `#about-us`.
- [x] Remove dropdown-style header icon hints so nav reads as pure in-page
      anchors.
- [x] Add scroll margin for floating-header anchor jumps.
- [x] Redesign mobile footer from oversized single-column stack into compact
      brand, two-column links, newsletter, and legal layout.
- [x] Verify desktop header anchor order and click behavior with Chromium.
- [x] Verify mobile footer computed layout with Chromium at 390px.
- [x] Re-run build, lint, static copy scan, HTTPS probes, and service health
      check.

## Raster Logo Replacement

- [x] Use the first selected GPTIMG logo concept as the logo source.
- [x] Extract a transparent PNG brand mark instead of hand-drawing a new SVG.
- [x] Replace the header logo mark with the PNG asset.
- [x] Replace the process step badge mark with the PNG asset.
- [x] Replace the footer logo mark with the PNG asset through the shared Logo
      component.
- [x] Keep the Doula wordmark as live text so spelling and localization-safe
      layout remain stable.
- [x] Re-run build, lint, static copy scan, HTTPS probes, service health, and
      Chromium computed-size checks.

## Final Logo Spacing And Open Design Review

- [x] Slightly reduce header and footer PNG logo mark sizes so they no longer
      feel top-aligned or crowded inside their containers.
- [x] Re-run build, lint, static copy scan, HTTPS probes, and service health.
- [x] Capture current desktop and mobile full-page review screenshots.
- [x] Complete final Open Design style review across desktop and mobile.

## Provider, Care, And FAQ Polish

- [x] Rebuild mobile provider cards as lighter summaries with portrait, name,
      role, rating, area, rate, and a request CTA only.
- [x] Reduce desktop provider-card pill density while keeping all four cards on
      the same repeated information system.
- [x] Change mobile care categories from a full vertical stack into a horizontal
      swipe row with scroll snapping.
- [x] Replace static FAQ buttons with localized accordion questions and answers.
- [x] Verify mobile provider density, mobile care scrolling, FAQ accordion
      behavior, and localized CTA containment with Chromium CDP checks.
- [x] Re-run build, lint, static copy scan, HTTPS probes, and service health
      checks.

## Japanese Provider Card Overflow Fix

- [x] Constrain the desktop provider title row so Japanese review counts stay
      inside the card.
- [x] Re-run build, lint, static copy scan, HTTPS probe, service health, and
      Chromium CDP overflow check for the Japanese provider card.

## Production Launch

- [x] Initialize local git repository on `main`.
- [x] Create private GitHub repository `nakamotosai/doula`.
- [x] Push source to GitHub.
- [x] Create Cloudflare Pages project `doula` with GitHub source sync.
- [x] Add `doula.saaaai.com` as the Pages custom domain.
- [x] Add Cloudflare DNS CNAME for `doula.saaaai.com`.
- [x] Verify Cloudflare Pages production deployment.
- [x] Verify `https://doula.saaaai.com/` returns the current homepage.
- [x] Update README with final production verification status.
