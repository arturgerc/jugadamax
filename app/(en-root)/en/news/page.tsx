import type { Metadata } from "next";
import { EnNewsArchiveSection } from "@/components/verticals/news/en/EnNewsArchiveSection";
import { EnNewsCategoryNav } from "@/components/verticals/news/en/EnNewsCategoryNav";
import { EnNewsFeaturedSection } from "@/components/verticals/news/en/EnNewsFeaturedSection";
import { EnNewsHubEducation } from "@/components/verticals/news/en/EnNewsHubEducation";
import { EnNewsHubHero } from "@/components/verticals/news/en/EnNewsHubHero";
import { EnNewsHubTrustStrip } from "@/components/verticals/news/en/EnNewsHubTrustStrip";
import { EN_NEWS_FAQ_ITEMS } from "@/components/verticals/news/en/en-news-config";
import {
  parseEnNewsCategory,
  resolveEnNewsDirectory,
} from "@/components/verticals/news/en/en-news-data";
import { Container } from "@/components/layout/Container";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
  faqPageJsonLd,
} from "@/lib/seo/jsonld";
import { buildEnMetadata } from "@/lib/seo/metadata";

const EN_NEWS_HUB_TITLE = "Casino, Crypto & Betting News and Analysis";
const EN_NEWS_HUB_DESCRIPTION =
  "Editorial news, analysis and opinion on online casinos, crypto payments, bonuses, regulation and sports betting, with identified authors and cited sources where applicable.";

export const metadata: Metadata = buildEnMetadata({
  title: EN_NEWS_HUB_TITLE,
  description: EN_NEWS_HUB_DESCRIPTION,
  path: "/en/news",
  languageAlternates: {
    "es-MX": "/noticias",
    en: "/en/news",
  },
});

type EnNewsSearchParams = Promise<{
  category?: string | string[];
}>;

/**
 * English News Hub V2 — parity with Spanish /noticias.
 */
export default async function EnNewsIndexPage({
  searchParams,
}: {
  searchParams: EnNewsSearchParams;
}) {
  const params = await searchParams;
  const category = parseEnNewsCategory(params.category);
  const items = resolveEnNewsDirectory({ category });

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "News", path: "/en/news" },
  ]);

  const faq = faqPageJsonLd(
    EN_NEWS_FAQ_ITEMS.map((item) => ({
      question: item.q,
      answer: item.a,
    })),
  );

  const collection = collectionPageJsonLd({
    name: EN_NEWS_HUB_TITLE,
    description: EN_NEWS_HUB_DESCRIPTION,
    path: "/en/news",
  });

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <EnNewsHubHero />
      <EnNewsHubTrustStrip />
      <EnNewsFeaturedSection />
      <EnNewsCategoryNav />
      <EnNewsArchiveSection items={items} category={category} />
      <EnNewsHubEducation />
    </Container>
  );
}
