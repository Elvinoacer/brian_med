# Brian Kiptoo — Medicine, with the person in view

A complete, responsive medical-student portfolio built with Next.js App Router, TypeScript and React. The design uses warm paper, deep teal, sage and restrained clay accents; locally hosted DM Sans and Instrument Serif; original SVG editorial graphics; and a consistently light theme.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build`, then `npm start`.

## Included

- Nine homepage sections: introduction, perspective, six clinical interests, three work proposals, community, journey, three field notes, professional profile and contact.
- Six statically generated work/article pages, a custom 404, original monograms/favicon and a social-sharing image.
- Responsive sticky navigation, mobile menu with Escape/focus handling, keyboard-accessible expandable clinical entries, email copying and topic-specific email links.
- Server-rendered text, local fonts, small SVG assets, reduced-motion support, visible keyboard focus and a skip link.
- Metadata, robots and sitemap routes with indexing protection for the illustrative content.

## Editing

See [the content guide](docs/CONTENT-GUIDE.md). The editable source is `lib/content.ts`; presentation lives in `app/page.tsx`, `app/globals.css` and `components/`. Font sources and licences are recorded in [FONT-LICENSES.md](docs/FONT-LICENSES.md).

## Contact

The owner supplied **briankiptoo125@gmail.com**. Contact actions open the visitor's email app, with optional subjects. The page also lets visitors copy the address. There is no submission service, data collection, or simulated “message sent” state.

## Publication status

The supplied brief explicitly describes the identity and first-person narrative as illustrative. These remain marked as example content, with a visible design-preview notice and `noindex`. The projects remain honestly labelled proposals. No portrait, placements, awarded qualifications, CV, testimonials, dates or results have been invented.

Before public launch, have the owner review the identity/narrative and field notes, confirm status, and supply any genuine portrait or supporting documents. Set each reviewed entry's `contentStatus` to `verified`, assign genuine publication dates to notes, and configure `NEXT_PUBLIC_SITE_URL` with the actual HTTPS origin. `lib/site.ts` enables indexing and the sitemap only when a real origin and reviewed profile/notes are in place. Existing proposal labels remain until the projects' status changes in reality.
