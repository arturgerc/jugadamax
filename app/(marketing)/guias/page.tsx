import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { GuideHubHero } from "@/components/verticals/guides/GuideHubHero";
import { GuideHubTrustStrip } from "@/components/verticals/guides/GuideHubTrustStrip";
import { GuideLearningPaths } from "@/components/verticals/guides/GuideLearningPaths";
import { GuideHubLibrary } from "@/components/verticals/guides/GuideHubLibrary";
import { GuideHubEducation } from "@/components/verticals/guides/GuideHubEducation";

export const metadata: Metadata = buildMetadata({
  title: "Guías de casino, crypto y apuestas para México",
  description:
    "Centro de aprendizaje editorial de JugadaMax: guías sobre casinos crypto, pagos, KYC, operadores internacionales y juego responsable para México y LATAM. 18+.",
  path: "/guias",
  languageAlternates: {
    "es-MX": "/guias",
    en: "/en/guides",
  },
});

export default function GuidesIndexPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Guías", path: "/guias" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <GuideHubHero />
      <GuideHubTrustStrip />
      <GuideLearningPaths />
      <GuideHubLibrary />
      <GuideHubEducation />
    </Container>
  );
}
