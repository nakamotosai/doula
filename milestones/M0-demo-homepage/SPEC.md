# M0 Demo Homepage Spec

## Goal

Build a polished English homepage demo for `Doula`, matching the selected
reference image closely enough for client review while using clean React
components, fixed copy data, and generated standalone imagery.

## Reference

Selected baseline:

`/home/ubuntu/codex/gptimg/artifacts/requests/gptimg-20260516T055001Z-b788af4c/00029173-result-20260516-145151-4fd04214.png`

## Audience

Modern families in the United States and Europe who are looking for trustworthy
birth, postpartum, newborn, overnight, or culturally fluent care.

Secondary audience: independent doulas and newborn care providers considering
joining the platform.

## Page Structure

1. Header over hero
   - Doula arch logo and wordmark
   - Navigation: Find Support, For Providers, How It Works, Resources, About Us
   - Log in and Get Started
2. Hero
   - Large serif headline
   - Subcopy
   - Start Matching and View Providers CTAs
   - Generated warm home-care hero image
3. Match panel
   - I need, Timing, Location, Languages, Care schedule
   - Find My Match button
   - Non-medical scope note
4. Curated providers
   - Four provider profile cards
   - Generated provider portraits
   - Roles, chips, languages, reviewed, availability
5. Trust strip
   - Four concise trust benefits with line icons
6. Care categories
   - Five generated care images and category descriptions
7. How matching works
   - Four numbered steps
8. Choose your path
   - For Families and For Providers split CTA
9. FAQ strip
   - Four closed accordion rows
10. Footer
   - Brand line, nav groups, newsletter form, legal links

## Approved User-Facing Copy

All copy lives in `src/content/home.ts`. Components render that content. No
component may add placeholder or internal explanatory text.

## Visual Requirements

- Use the selected reference's pale beige, pale orange, and muted green family.
- Use warm paper backgrounds and very subtle borders/shadows.
- Use serif display headings and modern sans UI text.
- Use lucide icons for UI symbols.
- Do not use purple gradients, decorative orbs, hospital symbols, childish baby
  art, or stock-like dark/blurred hero images.
- Cards should use restrained radius and stable dimensions.
- Text must not overflow on desktop or mobile.

## Repair Pass Requirements

The first implementation received user feedback that the actual browser result
felt around 60/100. The repair pass must address these design gaps before M0 can
pass:

- Reference fidelity: top-of-page proportions should feel like the selected
  screenshot, with a compact header, balanced hero copy, visible CTAs, and the
  match panel entering the first desktop view instead of feeling pushed down.
- Hero craft: reduce overlarge type, improve text/image relationship, keep the
  family-care image warm and legible, and avoid washed-out or foggy overlays.
- Marketplace utility: make the match panel and provider cards feel like a real
  care marketplace rather than static marketing tiles.
- Trust depth: add concrete but demo-safe signals such as review counts,
  hourly/session rate ranges, coverage area, availability, credential markers,
  and short testimonial snippets.
- Theme system: use pale beige, pale orange, and pale green consistently for
  backgrounds, buttons, chips, dividers, icons, and section bands.
- Section rhythm: vary below-fold density and hierarchy so the page does not
  repeat the same grid-card pattern throughout.
- Mobile quality: keep the same brand feeling on mobile with no overlapping
  text, broken hero crop, or oversized panels.
- Content integrity: insert only final user-facing English copy from
  `src/content/home.ts`; if a phrase is missing, write the actual copy there
  first.

## Open Design Feedback Gate

User feedback on the repair draft added three hard requirements:

- Header readability: desktop header text and actions must never sit directly
  over a visually busy face/image area without enough contrast.
- Provider-card system: the four person cards must read as one unified product
  system. Profile details, review snippets, credentials, price, and availability
  must use aligned slots rather than each card appearing to have a different
  format.
- Mobile redesign: the mobile homepage must be rebuilt as its own layout while
  preserving the same brand language as desktop. It must not feel like a
  separate website or a compressed desktop page.

## Hero Header Redesign Gate

User feedback on the second repair draft added a stricter hero rule:

- Remove the full-width top fog/gradient treatment because it hides faces and
  makes the hero feel muddy.
- Desktop header must be a compact floating glass layer that is visually
  separate from the hero image.
- The hero image should begin below the header layer and focus on the two
  caregivers and baby instead of being obscured by navigation readability fixes.
- Keep only a light left-side beige gradient to support the headline; do not
  blur or wash out the people.

Follow-up feedback refined this rule:

- Remove any white strip outside the floating header itself; the hero image
  should be visible behind and around the header.
- The header must remain floating while the page scrolls.
- The hero image composition should not be pushed down to make room for the
  header.

## Localization Gate

M0 now includes a demo language switcher:

- Header must include language options for English, Traditional Chinese, and
  Japanese.
- Selecting Traditional Chinese or Japanese must replace the full page copy, not
  just the navigation.
- Chinese and Japanese copy must be final user-facing copy from
  `src/content/home.ts`.
- Layout must remain stable when Chinese or Japanese labels are longer than the
  English source.

## Image Assets

Generate standalone assets with GPTIMG, then store them under `src/assets/doula/`:

- Hero family/doula image
- Four provider portraits
- Five care category images
- Two split CTA images

The implementation may crop generated asset sheets into individual images, but
the source imagery must be generated for this project and not copied from the
reference screenshot.

## Acceptance Criteria

- The homepage renders as a full single-page experience.
- The top 3344px of the page follows the reference structure and visual rhythm.
- Build passes with no TypeScript errors.
- Browser smoke test validates desktop and mobile visibility.
- Static text scan finds no placeholder/internal guidance copy.
- Internal preview URL is provided for user review.
- Post-repair desktop and mobile screenshots are captured from the HTTPS
  Tailnet preview.

## Explicit Non-Goals

- Real search behavior
- Authentication
- Payments
- Provider profile detail pages
- Backend/API/database
- Production deployment
- Live multilingual toggle
