/**
 * JSON-LD structured data generators (contracts/seo-schema.md).
 *
 * AUTHENTICITY GATE (Constitution Principle V): these helpers deliberately emit
 * only truthful, defensible schema. There is NO `AggregateRating` and NO
 * casino `Review`/`Product` star markup anywhere. Editorial ratings are shown
 * visually in the UI but are never encoded as aggregated schema.
 */

import { siteConfig } from "@/lib/site";

type JsonLd = Record<string, unknown>;

function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return new URL(path, siteConfig.url).toString();
}

/** Publisher Organization node with logo (Article / NewsArticle). */
function publisherOrganization(): JsonLd {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logoUrl),
    },
  };
}

/**
 * Site-wide Organization node (root layout).
 */
export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logoUrl),
  };
}

/** Site-wide WebSite node (root layout). */
export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList reflecting the real navigation hierarchy. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface ArticleJsonLdInput {
  headline: string;
  path: string;
  authorName: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  /** "Article" (default) or "NewsArticle". Never "Review" for casinos. */
  type?: "Article" | "NewsArticle";
  /** BCP 47 language tag; defaults to site locale (es-MX). */
  inLanguage?: string;
}

/**
 * Article / NewsArticle node for reviews, guides, and news. Carries real author
 * + dates. NEVER includes AggregateRating or reviewRating.
 */
export function articleJsonLd(input: ArticleJsonLdInput): JsonLd {
  const {
    headline,
    path,
    authorName,
    datePublished,
    dateModified,
    image,
    type = "Article",
    inLanguage = siteConfig.locale,
  } = input;

  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    mainEntityOfPage: absoluteUrl(path),
    inLanguage,
    author: { "@type": "Person", name: authorName },
    publisher: publisherOrganization(),
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    ...(image ? { image: absoluteUrl(image) } : {}),
  };
}
