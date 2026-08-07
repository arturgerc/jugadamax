import type { Metadata } from "next";
import { ContactHubPage } from "@/components/verticals/contact/ContactHubPage";
import { CONTACT_COPY } from "@/components/verticals/contact/contact-config";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildEnMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildEnMetadata({
  title: "Contact JugadaMax editorial team",
  description:
    "Contact JugadaMax for editorial corrections, official sources, affiliate managers, operators, payment providers, press and industry inquiries. Independent iGaming media — not casino customer support.",
  path: "/en/contact",
  languageAlternates: {
    "es-MX": "/contacto",
    en: "/en/contact",
  },
});

export default function EnContactPage() {
  const copy = CONTACT_COPY.en;
  const breadcrumb = breadcrumbJsonLd([
    { name: copy.breadcrumbHome, path: copy.homeHref },
    { name: copy.breadcrumbCurrent, path: "/en/contact" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ContactHubPage locale="en" />
    </Container>
  );
}
