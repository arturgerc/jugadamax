import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/social/SocialLinks";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacta al equipo editorial de JugadaMax para consultas, correcciones de contenido o propuestas de colaboración.",
  path: "/contacto",
  languageAlternates: {
    "es-MX": "/contacto",
    en: "/en/contact",
  },
});

export default function ContactoPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Contacto", path: "/contacto" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Contacto
          </h1>
          <p className="text-muted-foreground">
            ¿Tienes una consulta, una corrección de contenido o una propuesta de colaboración?
          </p>
        </header>

        <section className="space-y-3 text-sm text-muted-foreground sm:text-base">
          <p>
            Escríbenos por correo electrónico a{" "}
            <a
              href="mailto:jugadamaxcom@gmail.com"
              className="font-medium text-primary underline underline-offset-2"
            >
              jugadamaxcom@gmail.com
            </a>
            . Revisamos los mensajes de forma editorial y damos prioridad a correcciones de
            información sobre operadores.
          </p>
          <p>
            Para temas de afiliación y transparencia, consulta nuestra{" "}
            <a
              href="/divulgacion-afiliados"
              className="font-medium text-primary underline underline-offset-2"
            >
              divulgación de afiliados
            </a>{" "}
            y la metodología en{" "}
            <a
              href="/como-evaluamos"
              className="font-medium text-primary underline underline-offset-2"
            >
              Cómo evaluamos
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="contact-channels-heading" className="space-y-4">
          <div className="space-y-2">
            <h2
              id="contact-channels-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Contacto y canales oficiales
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Puedes contactar a JugadaMax por email o seguir nuestros canales oficiales para
              novedades, guías, reseñas y contenido sobre casinos online, apuestas y juego
              responsable.
            </p>
          </div>
          <SocialLinks variant="contact" />
        </section>

        <p className="text-xs text-muted-foreground">
          Solo para mayores de 18 años. Juega de forma responsable.
        </p>
      </article>
    </Container>
  );
}
