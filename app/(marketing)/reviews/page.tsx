import type { Metadata } from "next";
import { ReviewsCategoryNav } from "@/components/verticals/reviews/ReviewsCategoryNav";
import { ReviewsDirectory } from "@/components/verticals/reviews/ReviewsDirectory";
import { ReviewsHighlightedSection } from "@/components/verticals/reviews/ReviewsHighlightedSection";
import { ReviewsHubAuthors } from "@/components/verticals/reviews/ReviewsHubAuthors";
import { ReviewsHubEducation } from "@/components/verticals/reviews/ReviewsHubEducation";
import { ReviewsHubHero } from "@/components/verticals/reviews/ReviewsHubHero";
import { ReviewsHubTrustStrip } from "@/components/verticals/reviews/ReviewsHubTrustStrip";
import { ReviewsMethodology } from "@/components/verticals/reviews/ReviewsMethodology";
import {
  parseReviewHubCategory,
  parseReviewHubQuery,
  parseReviewHubSort,
  resolveReviewDirectory,
} from "@/components/verticals/reviews/review-hub-data";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Reseñas de casinos y casas de apuestas en México",
  description:
    "Compara reseñas editoriales de casinos crypto, operadores fiat, casinos sin KYC y casas de apuestas para México. Consulta calificaciones, pagos, bonos, KYC, pros, contras y fechas de actualización.",
  path: "/reviews",
  languageAlternates: {
    "es-MX": "/reviews",
    en: "/en/reviews",
  },
});

type ReviewsSearchParams = Promise<{
  q?: string | string[];
  categoria?: string | string[];
  orden?: string | string[];
}>;

/**
 * Spanish/Mexico Reviews Hub V2 — directory index only.
 * Individual /reviews/[slug] pages are unchanged.
 */
export default async function ReviewsIndexPage({
  searchParams,
}: {
  searchParams: ReviewsSearchParams;
}) {
  const params = await searchParams;
  const category = parseReviewHubCategory(params.categoria);
  const sort = parseReviewHubSort(params.orden);
  const query = parseReviewHubQuery(params.q);

  const directory = resolveReviewDirectory({
    category,
    sort,
    query,
  });

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Reseñas", path: "/reviews" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <ReviewsHubHero />
      <ReviewsHubTrustStrip />
      <ReviewsHighlightedSection />
      <ReviewsCategoryNav />
      <ReviewsDirectory directory={directory} />
      <ReviewsMethodology />
      <ReviewsHubAuthors />
      <ReviewsHubEducation />
    </Container>
  );
}
