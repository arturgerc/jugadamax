import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildMetadata({
  title: "Acerca de JugadaMax",
  description:
    "JugadaMax es un sitio editorial de comparación y medios sobre casinos crypto, casinos fiat y apuestas deportivas en México. Conoce quiénes somos y cómo trabajamos.",
  path: "/acerca-de",
});

export default function AcercaDePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Acerca de", path: "/acerca-de" },
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
            Acerca de JugadaMax
          </h1>
          <p className="text-muted-foreground">
            JugadaMax es un sitio editorial de comparación y medios enfocado en México.
          </p>
        </header>

        <section className="space-y-3 text-sm text-muted-foreground sm:text-base">
          <p>
            Publicamos rankings, comparativas y reseñas editoriales de casinos crypto, casinos fiat y
            casas de apuestas deportivas disponibles para jugadores en México. Nuestro objetivo es
            ofrecer información clara para que las personas mayores de 18 años tomen decisiones
            informadas.
          </p>
          <p>
            No somos un operador de juego ni aceptamos apuestas: somos un medio independiente que
            compara y comenta operadores de terceros. La información sobre bonos, pagos y licencias
            proviene de cada operador y puede cambiar; recomendamos verificarla siempre en el sitio
            oficial correspondiente.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Cómo trabajamos</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Nuestros rankings reflejan una evaluación editorial, no un hecho neutral, y pueden estar
            influenciados comercialmente a través de acuerdos de afiliación. Explicamos los criterios
            que usamos en{" "}
            <a
              href="/como-evaluamos"
              className="font-medium text-primary underline underline-offset-2"
            >
              Cómo evaluamos
            </a>{" "}
            y detallamos el modelo de afiliación en nuestra{" "}
            <a
              href="/divulgacion-afiliados"
              className="font-medium text-primary underline underline-offset-2"
            >
              divulgación de afiliados
            </a>
            . Las calificaciones que mostramos son opiniones editoriales del equipo de JugadaMax, no
            puntuaciones agregadas de usuarios ni de terceros.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contacto</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            ¿Tienes una consulta o una corrección de contenido? Visita nuestra página de{" "}
            <a
              href="/contacto"
              className="font-medium text-primary underline underline-offset-2"
            >
              contacto
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Solo para mayores de 18 años. El juego puede causar adicción. Juega de forma responsable.
        </p>
      </article>
    </Container>
  );
}
