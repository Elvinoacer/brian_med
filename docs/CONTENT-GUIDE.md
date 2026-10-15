# Content editing and launch handover

## Single source of content

Edit `lib/content.ts` for the name, status, programme, biography, clinical interests, project concepts, article text, academic journey, profile rows and contact email. `example`, `verified` and `proposal` are distinct editorial states. Changing a state does not establish evidence; review the content first.

Homepage headings with intentional line breaks are in `app/page.tsx`. The header receives the profile name from the root layout. The BK monogram and social artwork are original SVG assets, so update those too if the approved identity changes.

## Theme

All colors are declared at the top of `app/globals.css`. Keep warm paper `#F6F3EC` dominant, dark ink `#132E2C` for reading, deep teal `#124C46` for actions and community, sage `#E2ECE7` for quiet panels and clay `#9B4D36` for small accents. There is intentionally no automatic dark mode or theme switch. Do not add emergency-red signals or saturated colors to each clinical discipline.

Typography is locally hosted and licensed; see `FONT-LICENSES.md`. The font files live in `public/fonts`. Use serif for short editorial headings, and sans-serif for prose and controls.

## Genuine portrait

The hero currently uses `public/images/observation-plate.svg`, a decorative original illustration. When the owner supplies a portrait with permission, put an appropriately sized WebP or AVIF in `public/images`, update the hero Image with real dimensions and descriptive alt text, and check the mobile crop. Preserve the artwork as a quiet background if desired. Update `app/opengraph-image.png` too. Never substitute a stranger's image for the owner.

## Work and field notes

Work lives at `/work/[slug]` and notes at `/notes/[slug]`; new entries generate pages automatically at build time. Keep slugs stable after publication. Keep proposals visibly labelled and change claimed outputs only when verified. A project diagram represents the concept, not measured results. Article reading times are calculated from the actual words at 200 words/minute.

Do not backdate sample notes. Set `publishedAt` and `reviewedAt` to genuine ISO dates when reviewed and published; dates are omitted while null. No identifiable patient material belongs here.

## Contact and documents

`profile.contact.email` contains the approved email. Links use `mailto:` and open the visitor's email client; copy-to-clipboard gives real success/failure feedback. This implementation does not need email service keys or claim that it sends mail itself. A future contact form needs server-side validation, spam protection and a tested real delivery provider before it appears on the site.

A CV download is intentionally absent because no reviewed document was supplied. Only add an action when the actual file exists; show its accurate format and size.

## Public launch

1. Obtain review of the identity, study status, interests, biography and all first-person notes. Preserve MBChB as in progress until graduation is verified.
2. Set the reviewed profile and note entries to `contentStatus: "verified"`; add genuine article publication dates. Projects may remain `proposal`.
3. Set `NEXT_PUBLIC_SITE_URL=https://your-approved-domain` in the deployment environment. It must be a URL, not a bare hostname.
4. Run `npm run build`. Preview all routes and contact actions on mobile and desktop.
5. Verify metadata, social preview, `/robots.txt` and `/sitemap.xml` at the actual origin. The sitemap is deliberately empty and crawling disallowed while content remains illustrative.

No custom domain or hosting project has been invented or provisioned by this build.
