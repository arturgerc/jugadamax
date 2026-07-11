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
  /** Absolute or root-relative image path; falls back to the site default OG image. */
  image?: string;
  /** Open Graph type; defaults to "website". */
  type?: "website" | "article";
  /** Open Graph locale; defaults to es-MX site config. */
  ogLocale?: string;
  /** hreflang alternates, e.g. { "es-MX": "/reviews/stake", en: "/en/reviews/stake" } */
  languageAlternates?: Record<string, string>;
}

export function buildMetadata(input: PageMetadataInput): Metadata {
  const {
    title,
    description,
    path = "/",
    image,
    type = "website",
    ogLocale = siteConfig.ogLocale,
    languageAlternates,
  } = input;
  const canonical = path;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(languageAlternates ? { languages: languageAlternates } : {}),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: ogLocale,
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

/** English/global page metadata with en Open Graph locale. */
export function buildEnMetadata(
  input: Omit<PageMetadataInput, "ogLocale">,
): Metadata {
  return buildMetadata({
    ...input,
    image: input.image ?? "/en/opengraph-image",
    ogLocale: "en_US",
  });
}
