import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildMetadata({
  title: "Divulgación de afiliados",
  description:
    "Cómo funciona la afiliación en JugadaMax: podemos recibir una comisión por registros a través de nuestros enlaces, sin costo adicional para ti y sin condicionar nuestra evaluación editorial.",
  path: "/divulgacion-afiliados",
});

export default function DivulgacionAfiliadosPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Divulgación de afiliados", path: "/divulgacion-afiliados" },
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
            Divulgación de afiliados
          </h1>
          <p className="text-muted-foreground">
            Queremos ser claros sobre cómo se financia JugadaMax.
          </p>
        </header>

        <section className="space-y-3 text-sm text-muted-foreground sm:text-base">
          <p>
            JugadaMax es un sitio de medios y afiliación. Algunos enlaces a operadores son enlaces de
            afiliado: si te registras o juegas a través de ellos, podemos recibir una comisión.{" "}
            <strong className="text-foreground">Esto no tiene costo adicional para ti.</strong>
          </p>
          <p>
            La comisión por afiliación no determina nuestras opiniones ni el orden de nuestros
            rankings. La metodología que seguimos es pública y puedes consultarla en{" "}
            <a
              href="/como-evaluamos"
              className="font-medium text-primary underline underline-offset-2"
            >
              Cómo evaluamos los casinos
            </a>
            .
          </p>
          <p>
            Los enlaces de afiliado se marcan técnicamente como{" "}
            <code className="rounded bg-card px-1 py-0.5 text-xs">rel=&quot;sponsored nofollow&quot;</code>{" "}
            y se abren en una pestaña nueva. Las promociones y condiciones pertenecen a cada operador
            y pueden cambiar; verifica siempre la oferta vigente en su sitio oficial.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Solo para mayores de 18 años. Juega de forma responsable.
        </p>
      </article>
    </Container>
  );
}
