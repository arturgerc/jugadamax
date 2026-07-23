import type { Metadata } from "next";
import { PartnersMediaKitPage } from "@/components/verticals/partners/PartnersMediaKitPage";
import { PARTNERS_COPY } from "@/components/verticals/partners/partners-config";
import { Container } from "@/components/layout/Container";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildEnMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildEnMetadata({
  title: "JugadaMax Media Kit for operators and iGaming partners",
  description:
    "Information for operators, affiliate managers and partners about JugadaMax: editorial coverage, markets, formats, channels, traffic standards and collaboration opportunities for Mexico, LATAM and English/global audiences.",
  path: "/en/partners",
  languageAlternates: {
    "es-MX": "/partners",
    en: "/en/partners",
  },
});

export default function EnPartnersPage() {
  const copy = PARTNERS_COPY.en;
  const breadcrumb = breadcrumbJsonLd([
    { name: copy.breadcrumbHome, path: copy.homeHref },
    { name: copy.breadcrumbCurrent, path: "/en/partners" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PartnersMediaKitPage locale="en" />
      <div className="mt-8">
        <ResponsibleGamblingNoticeEn />
      </div>
    </Container>
  );
}
