# Doula Demo Site

This repository contains a front-end demo website for a doula, postpartum care,
newborn care, and night nanny marketplace concept.

The site is intended for design review, product discussion, and early client
reference only. It is not a live care platform.

## Project Status

- Status: demo complete.
- Repository visibility: public.
- Live demo: `https://doula.saaaai.com/`
- Source: `https://github.com/nakamotosai/doula`
- Current handoff state: this repository is suitable as a public demo reference
  and front-end starting point.

No further work is currently planned in this repository unless a new production
scope is defined.

## Demo Notice

This project is a static demo. It shows what a future matching website could
look like, including example service sections, provider cards, calls to action,
FAQ content, and multilingual page copy.

Important limitations:

- The website does not accept real bookings.
- The website does not process payments.
- The website does not create user accounts.
- The website does not store submitted family or caregiver information.
- The provider profiles, reviews, availability, prices, and service details are
  sample content for demonstration purposes.
- Images and names may be generated or fictional and should not be treated as
  real caregiver profiles.

## Basic Disclaimer

This demo does not provide medical, legal, employment, immigration, tax, or
childcare compliance advice.

Any real production version would need appropriate business review before
launch, including service terms, privacy policy, caregiver screening process,
local compliance requirements, data handling, consent language, and contact
workflow setup.

Care described on the demo site should be understood as non-medical family
support unless a future production operator separately verifies and discloses
provider qualifications, scope of service, and applicable legal requirements.

## Current Scope

The current demo is a single-page front-end experience with:

- A homepage for families seeking doula, postpartum, newborn, and night nanny
  support.
- Static provider/profile-style cards.
- Static service category sections.
- Static FAQ content.
- English, Traditional Chinese, and Japanese copy variants.
- Responsive desktop and mobile styling.

## Not Included

This demo does not include:

- Backend database
- Lead submission workflow
- Admin dashboard
- Caregiver onboarding system
- Authentication
- Payment integration
- Real provider verification
- Real-time availability
- Production legal pages

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Production Use

This repository can be used as a visual and technical starting point. Before it
is used for a real business website, the demo content should be replaced with
approved brand copy, verified service information, real contact workflows,
privacy/legal documents, and production data handling.

## Next Production Step

If this demo is converted into a real service website, start a new project scope
for lead forms, data storage, caregiver onboarding, legal/privacy pages, and
operational workflows. Those production features are intentionally outside the
current demo.
