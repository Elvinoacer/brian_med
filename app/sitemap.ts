import type { MetadataRoute } from "next";
import { fieldNotes, workProjects } from "@/lib/content";
import { canIndex, siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex || !siteOrigin) return [];
  return [
    { url: siteOrigin, priority: 1 },
    ...workProjects.map((project) => ({
      url: `${siteOrigin}/work/${project.slug}`,
      priority: 0.7,
    })),
    ...fieldNotes.map((note) => ({
      url: `${siteOrigin}/notes/${note.slug}`,
      priority: 0.6,
      ...(note.reviewedAt ? { lastModified: note.reviewedAt } : {}),
    })),
  ];
}
