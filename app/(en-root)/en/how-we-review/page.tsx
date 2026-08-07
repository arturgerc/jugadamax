import type { Metadata } from "next";
import { EnMethodologyAffiliateTransparency } from "@/components/verticals/methodology/en/EnMethodologyAffiliateTransparency";
import { EnMethodologyAuthors } from "@/components/verticals/methodology/en/EnMethodologyAuthors";
import { EnMethodologyCriteria } from "@/components/verticals/methodology/en/EnMethodologyCriteria";
import { EnMethodologyFaq } from "@/components/verticals/methodology/en/EnMethodologyFaq";
import { EnMethodologyHero } from "@/components/verticals/methodology/en/EnMethodologyHero";
import { EnMethodologyPrinciples } from "@/components/verticals/methodology/en/EnMethodologyPrinciples";
import { EnMethodologyProcess } from "@/components/verticals/methodology/en/EnMethodologyProcess";
import { EnMethodologyRatings } from "@/components/verticals/methodology/en/EnMethodologyRatings";
import { EnMethodologyRelatedRoutes } from "@/components/verticals/methodology/en/EnMethodologyRelatedRoutes";
import { EnMethodologySources } from "@/components/verticals/methodology/en/EnMethodologySources";
import { EnMethodologyTrustStrip } from "@/components/verticals/methodology/en/EnMethodologyTrustStrip";
import { EnMethodologyUpdates } from "@/components/verticals/methodology/en/EnMethodologyUpdates";
import { EN_METHOD_FAQ_ITEMS } from "@/components/verticals/methodology/en/en-methodology-config";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";
import { buildEnMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildEnMetadata({
  title: "How We Review Casinos & Sportsbooks",
  description:
    "JugadaMax editorial methodology for reviewing crypto casinos, fiat and multi-currency casinos, and sportsbooks: criteria, sources, editorial ratings and affiliate disclosure. No fake user scores.",
  path: "/en/how-we-review",
  languageAlternates: {
    "es-MX": "/como-evaluamos",
    en: "/en/how-we-review",
  },
});

export default function EnHowWeReviewPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "How We Review", path: "/en/how-we-review" },
  ]);

  const faq = faqPageJsonLd(
    EN_METHOD_FAQ_ITEMS.map((item) => ({
      question: item.q,
      answer: item.a,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <EnMethodologyHero />
      <EnMethodologyTrustStrip />
      <EnMethodologyPrinciples />
      <EnMethodologyCriteria />
      <EnMethodologyProcess />
      <EnMethodologySources />
      <EnMethodologyRatings />
      <EnMethodologyAffiliateTransparency />
      <EnMethodologyUpdates />
      <EnMethodologyAuthors />
      <EnMethodologyFaq />
      <EnMethodologyRelatedRoutes />
    </Container>
  );
}
