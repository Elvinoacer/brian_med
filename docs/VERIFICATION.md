# Verification record

Verified on 12 October 2026 in Chromium on Linux.

## Build and source

- Next.js production build and TypeScript compilation passed. Homepage, all six detail pages, custom 404, favicon, social image, robots and sitemap routes generate successfully.
- ESLint passed.
- Original SVGs parsed and were visually reviewed. Fonts were parsed and their official SIL Open Font Licenses saved.

## Browser checks

- All six detail routes return 200 and contain complete article content. An unknown project slug returns the custom 404.
- Homepage and article pages have one H1 and one main landmark. The keyboard skip link works.
- All six clinical disclosures are real buttons; a representative disclosure was tested with mouse and keyboard, including `aria-expanded` and visible/hidden content.
- Mobile menu exposes all nine sections. Escape closes it and restores focus; selecting a section closes it and navigates to the correct anchor.
- Copy-email success places the approved address on the clipboard. A simulated permission failure displays a truthful fallback rather than success.
- All six mailto links target `briankiptoo125@gmail.com`; subject links encode the topic correctly. No email was sent during testing.
- No horizontal page overflow at widths 320, 390, 640, 768, 1024 or 1440 CSS pixels. A 200% viewport-equivalent setup (720 CSS pixels at 2x device scale) also fits; this is not a claim of physical-device testing.
- Article return links and browser back navigation work naturally.
- Reduced-motion emulation removes hero animation. The interface remains usable.
- No browser runtime errors across tested flows.
- Robots disallows crawling and sitemap has no entries while content is illustrative. The social image responds as PNG.

## Accessibility and color

Axe-core 4.10.3 checks for WCAG 2 A/AA and WCAG 2.1 A/AA found **zero violations** on:

- Homepage, 1440 px and 390 px.
- Discharge concept page, 1440 px.
- Plain-language note, 390 px.

Primary text/background combinations were measured. The lowest tested ratio was **5.26:1**, above the 4.5:1 AA threshold for ordinary text. Main ink on paper was 13.03:1; muted ink on paper was 5.88:1. These are automated checks and targeted visual review, not a formal accessibility certification.

## Evidence

`output/qa/` contains desktop/mobile screenshots and JSON records of route, interaction, contrast and accessibility results. The interface was visually reviewed at desktop and mobile sizes, including loaded project diagrams and long-form article typography.

## Publication dependencies

The implementation is complete locally. The source brief calls the identity and personal narrative illustrative; the site retains a design-preview notice and search protection. The owner still needs to review those facts and provide any genuine portrait/CV before they can be presented as verified personal content. No domain, hosting deployment or delivery backend was invented. Contact uses direct email links.
