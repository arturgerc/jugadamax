import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildMetadata({
  title: "Juego responsable (+18)",
  description:
    "El juego es solo para mayores de 18 años y puede causar adicción. Guía de juego responsable de JugadaMax: señales de riesgo, recomendaciones y dónde buscar ayuda.",
  path: "/juego-responsable",
  languageAlternates: {
    "es-MX": "/juego-responsable",
    en: "/en/responsible-gambling",
  },
});

export default function JuegoResponsablePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Juego responsable", path: "/juego-responsable" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <div className="inline-flex items-center rounded bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
            +18
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Juego responsable
          </h1>
          <p className="text-muted-foreground">
            El juego con dinero real es solo para personas mayores de 18 años y puede causar
            adicción. JugadaMax promueve el juego responsable.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Recomendaciones</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>Juega solo con dinero que puedas permitirte perder.</li>
            <li>Establece límites de tiempo y de gasto antes de empezar.</li>
            <li>No intentes recuperar pérdidas con más apuestas.</li>
            <li>No juegues bajo estrés, presión emocional o efectos de sustancias.</li>
            <li>El juego es entretenimiento, no una forma de generar ingresos.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Señales de riesgo</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Gastar más de lo previsto, mentir sobre cuánto juegas, pedir dinero prestado para
            apostar o sentir ansiedad cuando no juegas pueden ser señales de un problema. Si te
            identificas con alguna, considera buscar apoyo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Dónde buscar ayuda</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Si crees que tú o alguien cercano tiene un problema con el juego, habla con un
            profesional de la salud o busca grupos de apoyo especializados en tu país. Muchos
            operadores ofrecen herramientas de autoexclusión y límites de depósito; puedes solicitar
            estas medidas directamente en su plataforma.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Solo para mayores de 18 años. Si el juego deja de ser un entretenimiento, detente y busca
          ayuda.
        </p>
      </article>
    </Container>
  );
}
