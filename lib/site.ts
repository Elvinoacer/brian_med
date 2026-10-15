import { fieldNotes, profile } from "@/lib/content";

// Set the real canonical origin when this portfolio is ready for publication.
// Keeping it unset is intentional for local previews; no domain is invented.
const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
export const siteOrigin = configuredOrigin
  ? new URL(configuredOrigin).origin
  : null;
export const canIndex =
  Boolean(siteOrigin) &&
  profile.contentStatus === "verified" &&
  fieldNotes.every((note) => note.contentStatus === "verified");
