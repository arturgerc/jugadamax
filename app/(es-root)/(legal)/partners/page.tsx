import type { Metadata } from "next";
import { PartnersMediaKitPage } from "@/components/verticals/partners/PartnersMediaKitPage";
import { PARTNERS_COPY } from "@/components/verticals/partners/partners-config";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "JugadaMax Media Kit para operadores y socios de iGaming",
  description:
    "Información para operadores, managers y socios sobre JugadaMax: cobertura editorial, mercados, formatos, canales, estándares de tráfico y oportunidades de colaboración en México y LATAM.",
  path: "/partners",
  languageAlternates: {
    "es-MX": "/partners",
    en: "/en/partners",
  },
});

export default function PartnersPage() {
  const copy = PARTNERS_COPY.es;
  const breadcrumb = breadcrumbJsonLd([
    { name: copy.breadcrumbHome, path: copy.homeHref },
    { name: copy.breadcrumbCurrent, path: "/partners" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PartnersMediaKitPage locale="es" />
    </Container>
  );
}
