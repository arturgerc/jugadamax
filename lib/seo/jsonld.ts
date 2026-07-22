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
    ...(siteConfig.sameAs.length > 0 ? { sameAs: [...siteConfig.sameAs] } : {}),
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
    ...(siteConfig.sameAs.length > 0 ? { sameAs: [...siteConfig.sameAs] } : {}),
  };
}

/** Site-wide WebSite node (root layout). */
export function websiteJsonLd(locale: string = siteConfig.locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: locale,
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
  /** Internal author profile URL when available. */
  authorUrl?: string;
  /** Person (default) or Organization for editorial desks. */
  authorType?: "Person" | "Organization";
  /** Optional external sameAs URLs (e.g. LinkedIn). */
  authorSameAs?: string[];
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
    authorUrl,
    authorType = "Person",
    authorSameAs,
  } = input;

  const authorNode: JsonLd = {
    "@type": authorType,
    name: authorName,
    ...(authorUrl ? { url: absoluteUrl(authorUrl) } : {}),
    ...(authorSameAs && authorSameAs.length > 0 ? { sameAs: authorSameAs } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    mainEntityOfPage: absoluteUrl(path),
    inLanguage,
    author: authorNode,
    publisher: publisherOrganization(),
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    ...(image ? { image: absoluteUrl(image) } : {}),
  };
}

export interface PersonJsonLdInput {
  name: string;
  path: string;
  description?: string;
  jobTitle?: string;
  sameAs?: string[];
}

/** Person node for Spanish author profile pages. */
export function personJsonLd(input: PersonJsonLdInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    url: absoluteUrl(input.path),
    ...(input.jobTitle ? { jobTitle: input.jobTitle } : {}),
    ...(input.description ? { description: input.description } : {}),
    ...(input.sameAs && input.sameAs.length > 0 ? { sameAs: input.sameAs } : {}),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export interface ProfileOrganizationJsonLdInput {
  name: string;
  path: string;
  description?: string;
  sameAs?: string[];
}

/** Organization node for the editorial-desk author profile. */
export function profileOrganizationJsonLd(
  input: ProfileOrganizationJsonLdInput,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: input.name,
    url: absoluteUrl(input.path),
    ...(input.description ? { description: input.description } : {}),
    ...(input.sameAs && input.sameAs.length > 0
      ? { sameAs: input.sameAs }
      : { sameAs: [...siteConfig.sameAs] }),
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
