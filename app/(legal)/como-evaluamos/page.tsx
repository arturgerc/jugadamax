import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildMetadata({
  title: "Cómo evaluamos los casinos y casas de apuestas",
  description:
    "Metodología editorial de JugadaMax para evaluar y ordenar casinos crypto, casinos fiat y casas de apuestas en México: seguridad, licencias, pagos y experiencia de usuario.",
  path: "/como-evaluamos",
  languageAlternates: {
    "es-MX": "/como-evaluamos",
    en: "/en/how-we-review",
  },
});

export default function ComoEvaluamosPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Cómo evaluamos", path: "/como-evaluamos" },
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
            Cómo evaluamos los casinos
          </h1>
          <p className="text-muted-foreground">
            Nuestros rankings reflejan una evaluación editorial, no un hecho neutral. Explicamos aquí
            los criterios que usamos para ordenar operadores y por qué.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Criterios de evaluación</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              <strong className="text-foreground">Seguridad y confianza:</strong> licencias
              informadas por el operador, reputación y transparencia. Cuando no contamos con una
              fuente verificable, lo indicamos con lenguaje cauteloso.
            </li>
            <li>
              <strong className="text-foreground">Pagos:</strong> métodos disponibles (criptomonedas
              o métodos locales en México), tiempos y condiciones publicadas por el operador.
            </li>
            <li>
              <strong className="text-foreground">Experiencia de usuario:</strong> facilidad de uso,
              catálogo de juegos o mercados, y soporte.
            </li>
            <li>
              <strong className="text-foreground">Bonos y condiciones:</strong> claridad de los
              términos. No mostramos urgencia falsa ni cifras no verificadas; recomendamos confirmar
              cada oferta en el sitio oficial.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Independencia y afiliación</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax puede recibir una comisión por afiliación cuando te registras con un operador a
            través de nuestros enlaces. Esto no condiciona nuestra evaluación editorial, pero por
            transparencia lo divulgamos en cada página con enlaces de afiliado. Consulta nuestra{" "}
            <a
              href="/divulgacion-afiliados"
              className="font-medium text-primary underline underline-offset-2"
            >
              divulgación de afiliados
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Calificaciones editoriales</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Las calificaciones que mostramos son opiniones editoriales del equipo de JugadaMax. No
            son puntuaciones agregadas de usuarios ni de terceros, y no representan una valoración
            verificada de forma independiente.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Solo para mayores de 18 años. Juega de forma responsable.
        </p>
      </article>
    </Container>
  );
}
