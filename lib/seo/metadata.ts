/**
 * Per-page metadata builder (FR-022).
 *
 * Produces a Next.js Metadata object with a unique title, description, canonical
 * reference, and Open Graph / Twitter social metadata. Locale is es-MX.
 */

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export interface PageMetadataInput {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/casinos-crypto". Used for canonical. */
  path?: string;
  /** Absolute or root-relative image path; falls back to the site default. */
  image?: string;
  /** Open Graph type; defaults to "website". */
  type?: "website" | "article";
}

export function buildMetadata(input: PageMetadataInput): Metadata {
  const { title, description, path = "/", image, type = "website" } = input;
  const canonical = path;
  const ogImage = image ?? siteConfig.defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.ogLocale,
      type,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
