import type { Metadata } from "next";
import { ContactHubPage } from "@/components/verticals/contact/ContactHubPage";
import { CONTACT_COPY } from "@/components/verticals/contact/contact-config";
import { Container } from "@/components/layout/Container";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contacto editorial JugadaMax",
  description:
    "Contacta al equipo editorial de JugadaMax para correcciones, fuentes oficiales, socios, prensa o consultas editoriales. No somos soporte de casinos.",
  path: "/contacto",
  languageAlternates: {
    "es-MX": "/contacto",
    en: "/en/contact",
  },
});

export default function ContactoPage() {
  const copy = CONTACT_COPY.es;
  const breadcrumb = breadcrumbJsonLd([
    { name: copy.breadcrumbHome, path: copy.homeHref },
    { name: copy.breadcrumbCurrent, path: "/contacto" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ContactHubPage locale="es" />
    </Container>
  );
}
