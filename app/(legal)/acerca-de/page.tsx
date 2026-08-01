import type { Metadata } from "next";
import { AboutAffiliateTransparency } from "@/components/verticals/about/AboutAffiliateTransparency";
import { AboutAudience } from "@/components/verticals/about/AboutAudience";
import { AboutAuthors } from "@/components/verticals/about/AboutAuthors";
import { AboutBoundaries } from "@/components/verticals/about/AboutBoundaries";
import { AboutContact } from "@/components/verticals/about/AboutContact";
import { AboutEditorialProcess } from "@/components/verticals/about/AboutEditorialProcess";
import { AboutFaq } from "@/components/verticals/about/AboutFaq";
import { AboutHero } from "@/components/verticals/about/AboutHero";
import { AboutPublishingAreas } from "@/components/verticals/about/AboutPublishingAreas";
import { AboutTrustStrip } from "@/components/verticals/about/AboutTrustStrip";
import { ABOUT_FAQ_ITEMS } from "@/components/verticals/about/about-config";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Acerca de JugadaMax",
  description:
    "JugadaMax es un sitio editorial de comparación y medios sobre casinos crypto, casinos fiat y apuestas deportivas en México. Conoce quiénes somos, cómo trabajamos y cómo divulgamos la afiliación.",
  path: "/acerca-de",
  languageAlternates: {
    "es-MX": "/acerca-de",
    en: "/en/about",
  },
});

export default function AcercaDePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Acerca de", path: "/acerca-de" },
  ]);

  const faq = faqPageJsonLd(
    ABOUT_FAQ_ITEMS.map((item) => ({
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

      <AboutHero />
      <AboutTrustStrip />
      <AboutPublishingAreas />
      <AboutAudience />
      <AboutEditorialProcess />
      <AboutAffiliateTransparency />
      <AboutBoundaries />
      <AboutAuthors />
      <AboutContact />
      <AboutFaq />
    </Container>
  );
}
