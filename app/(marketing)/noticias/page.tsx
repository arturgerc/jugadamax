import type { Metadata } from "next";
import { NewsArchiveSection } from "@/components/verticals/news/NewsArchiveSection";
import { NewsCategoryNav } from "@/components/verticals/news/NewsCategoryNav";
import { NewsFeaturedSection } from "@/components/verticals/news/NewsFeaturedSection";
import { NewsHubEducation } from "@/components/verticals/news/NewsHubEducation";
import { NewsHubHero } from "@/components/verticals/news/NewsHubHero";
import { NewsHubTrustStrip } from "@/components/verticals/news/NewsHubTrustStrip";
import {
  parseNewsCategory,
  resolveNewsDirectory,
} from "@/components/verticals/news/news-hub-data";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Noticias de casinos, crypto y apuestas en México",
  description:
    "Noticias, análisis y opinión editorial de JugadaMax sobre regulación, casinos, crypto, bonos y apuestas en México. Fuentes citadas y separación entre hechos y comentario.",
  path: "/noticias",
  languageAlternates: {
    "es-MX": "/noticias",
    en: "/en/news",
  },
});

type NewsSearchParams = Promise<{
  categoria?: string | string[];
}>;

/**
 * Spanish/Mexico News Hub V2.
 */
export default async function NewsIndexPage({
  searchParams,
}: {
  searchParams: NewsSearchParams;
}) {
  const params = await searchParams;
  const category = parseNewsCategory(params.categoria);
  const items = resolveNewsDirectory({ category });

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Noticias", path: "/noticias" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <NewsHubHero />
      <NewsHubTrustStrip />
      <NewsFeaturedSection />
      <NewsCategoryNav />
      <NewsArchiveSection items={items} category={category} />
      <NewsHubEducation />
    </Container>
  );
}
