import type { Metadata } from "next";
import { EnAboutAffiliateTransparency } from "@/components/verticals/about/en/EnAboutAffiliateTransparency";
import { EnAboutAudience } from "@/components/verticals/about/en/EnAboutAudience";
import { EnAboutAuthors } from "@/components/verticals/about/en/EnAboutAuthors";
import { EnAboutBoundaries } from "@/components/verticals/about/en/EnAboutBoundaries";
import { EnAboutContact } from "@/components/verticals/about/en/EnAboutContact";
import { EnAboutEditorialProcess } from "@/components/verticals/about/en/EnAboutEditorialProcess";
import { EnAboutFaq } from "@/components/verticals/about/en/EnAboutFaq";
import { EnAboutHero } from "@/components/verticals/about/en/EnAboutHero";
import { EnAboutPublishingAreas } from "@/components/verticals/about/en/EnAboutPublishingAreas";
import { EnAboutTrustStrip } from "@/components/verticals/about/en/EnAboutTrustStrip";
import { EN_ABOUT_FAQ_ITEMS } from "@/components/verticals/about/en/en-about-config";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";
import { buildEnMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildEnMetadata({
  title: "About JugadaMax",
  description:
    "JugadaMax is an independent editorial comparison and media site covering crypto casinos, fiat casinos and sports betting. Learn who we are, how we work and how we disclose affiliation.",
  path: "/en/about",
  languageAlternates: {
    "es-MX": "/acerca-de",
    en: "/en/about",
  },
});

export default function EnAboutPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "About", path: "/en/about" },
  ]);

  const faq = faqPageJsonLd(
    EN_ABOUT_FAQ_ITEMS.map((item) => ({
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

      <EnAboutHero />
      <EnAboutTrustStrip />
      <EnAboutPublishingAreas />
      <EnAboutAudience />
      <EnAboutEditorialProcess />
      <EnAboutAffiliateTransparency />
      <EnAboutBoundaries />
      <EnAboutAuthors />
      <EnAboutContact />
      <EnAboutFaq />
    </Container>
  );
}
