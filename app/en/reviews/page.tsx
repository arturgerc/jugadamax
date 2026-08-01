import type { Metadata } from "next";
import { EnFeaturedReviews } from "@/components/verticals/reviews/en/EnFeaturedReviews";
import { EnReviewAuthors } from "@/components/verticals/reviews/en/EnReviewAuthors";
import { EnReviewCategories } from "@/components/verticals/reviews/en/EnReviewCategories";
import { EnReviewDirectory } from "@/components/verticals/reviews/en/EnReviewDirectory";
import { EnReviewMethodology } from "@/components/verticals/reviews/en/EnReviewMethodology";
import { EnReviewsFaq, EnReviewsRelatedRoutes } from "@/components/verticals/reviews/en/EnReviewsFaq";
import { EnReviewsHero } from "@/components/verticals/reviews/en/EnReviewsHero";
import { EnReviewsTrustStrip } from "@/components/verticals/reviews/en/EnReviewsTrustStrip";
import {
  parseEnReviewHubCategory,
  parseEnReviewHubQuery,
  parseEnReviewHubSort,
  resolveAllEnReviewCards,
  resolveEnReviewDirectory,
} from "@/components/verticals/reviews/en/en-reviews-data";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo/jsonld";
import { buildEnMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildEnMetadata({
  title: "Casino & Sportsbook Reviews",
  description:
    "Editorial reviews of crypto casinos, fiat and multi-currency operators, no-KYC casinos and sportsbooks, including payments, verification, ratings, strengths and drawbacks.",
  path: "/en/reviews",
  languageAlternates: {
    "es-MX": "/reviews",
    en: "/en/reviews",
  },
});

type EnReviewsSearchParams = Promise<{
  q?: string | string[];
  category?: string | string[];
  sort?: string | string[];
}>;

/**
 * English Reviews Hub V2 — directory index only.
 * Individual /en/reviews/[slug] pages are unchanged.
 */
export default async function EnReviewsIndexPage({
  searchParams,
}: {
  searchParams: EnReviewsSearchParams;
}) {
  const params = await searchParams;
  const category = parseEnReviewHubCategory(params.category);
  const sort = parseEnReviewHubSort(params.sort);
  const query = parseEnReviewHubQuery(params.q);

  const directory = resolveEnReviewDirectory({
    category,
    sort,
    query,
  });

  const allCards = resolveAllEnReviewCards();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Reviews", path: "/en/reviews" },
  ]);

  const itemList = itemListJsonLd(
    allCards.map((card) => ({
      name: card.operatorName,
      path: card.href,
    })),
  );

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <EnReviewsHero />
      <EnReviewsTrustStrip />
      <EnFeaturedReviews />
      <EnReviewCategories />
      <EnReviewDirectory directory={directory} />
      <EnReviewMethodology />
      <EnReviewAuthors />
      <EnReviewsFaq />
      <EnReviewsRelatedRoutes />
    </Container>
  );
}
