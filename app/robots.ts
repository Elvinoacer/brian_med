import type { MetadataRoute } from "next";
import { canIndex, siteOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(canIndex ? { allow: "/" } : { disallow: "/" }),
    },
    ...(canIndex && siteOrigin ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
