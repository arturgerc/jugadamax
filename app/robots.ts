import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Robots directives (FR-023).
 *
 * All V1 content is public, so crawling is allowed site-wide. The sitemap is
 * referenced for discovery. There are no non-public/utility paths in V1; add
 * `disallow` entries here if any are introduced later.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}
