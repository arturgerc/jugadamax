import type { Metadata } from "next";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { EnGuideHubHero } from "@/components/verticals/guides/en/EnGuideHubHero";
import { EnGuideHubTrustStrip } from "@/components/verticals/guides/en/EnGuideHubTrustStrip";
import { EnGuideLearningPaths } from "@/components/verticals/guides/en/EnGuideLearningPaths";
import { EnGuideHubLibrary } from "@/components/verticals/guides/en/EnGuideHubLibrary";
import { EnGuideHubEducation } from "@/components/verticals/guides/en/EnGuideHubEducation";

export const metadata: Metadata = buildEnMetadata({
  title: "Casino, crypto and betting guides for English readers",
  description:
    "JugadaMax English learning hub: crypto casino checklist, rankings, operator research, KYC notes and responsible gambling for global 18+ readers.",
  path: "/en/guides",
  languageAlternates: {
    "es-MX": "/guias",
    en: "/en/guides",
  },
});

export default function EnGuidesIndexPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Guides", path: "/en/guides" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <EnGuideHubHero />
      <EnGuideHubTrustStrip />
      <EnGuideLearningPaths />
      <EnGuideHubLibrary />
      <EnGuideHubEducation />
    </Container>
  );
}
