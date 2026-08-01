import type { Metadata } from "next";
import { MethodologyAffiliateTransparency } from "@/components/verticals/methodology/MethodologyAffiliateTransparency";
import { MethodologyAuthors } from "@/components/verticals/methodology/MethodologyAuthors";
import { MethodologyCriteria } from "@/components/verticals/methodology/MethodologyCriteria";
import { MethodologyFaq } from "@/components/verticals/methodology/MethodologyFaq";
import { MethodologyHero } from "@/components/verticals/methodology/MethodologyHero";
import { MethodologyPrinciples } from "@/components/verticals/methodology/MethodologyPrinciples";
import { MethodologyProcess } from "@/components/verticals/methodology/MethodologyProcess";
import { MethodologyRatings } from "@/components/verticals/methodology/MethodologyRatings";
import { MethodologyRelatedRoutes } from "@/components/verticals/methodology/MethodologyRelatedRoutes";
import { MethodologySources } from "@/components/verticals/methodology/MethodologySources";
import { MethodologyTrustStrip } from "@/components/verticals/methodology/MethodologyTrustStrip";
import { MethodologyUpdates } from "@/components/verticals/methodology/MethodologyUpdates";
import { METHOD_FAQ_ITEMS } from "@/components/verticals/methodology/methodology-config";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cómo evaluamos casinos y casas de apuestas",
  description:
    "Metodología editorial de JugadaMax para reseñar y comparar casinos crypto, casinos fiat y casas de apuestas en México: criterios, fuentes, calificaciones editoriales y divulgación de afiliados.",
  path: "/como-evaluamos",
  languageAlternates: {
    "es-MX": "/como-evaluamos",
    en: "/en/how-we-review",
  },
});

export default function ComoEvaluamosPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Cómo evaluamos", path: "/como-evaluamos" },
  ]);

  const faq = faqPageJsonLd(
    METHOD_FAQ_ITEMS.map((item) => ({
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

      <MethodologyHero />
      <MethodologyTrustStrip />
      <MethodologyPrinciples />
      <MethodologyCriteria />
      <MethodologyProcess />
      <MethodologySources />
      <MethodologyRatings />
      <MethodologyAffiliateTransparency />
      <MethodologyUpdates />
      <MethodologyAuthors />
      <MethodologyFaq />
      <MethodologyRelatedRoutes />
    </Container>
  );
}
