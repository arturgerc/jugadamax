import type { Article } from "@/types/content";

/**
 * News articles (Article with type "news") — task T037, User Story 5.
 *
 * Authenticity (Constitution Principle V): honest, verifiable, author-attributed
 * editorial notes only. No fabricated events, no fake statistics, no urgency.
 * Bodies use blank-line-separated paragraphs.
 */
export const news: Article[] = [
  {
    id: "noticia-metodologia-publicada",
    slug: "jugadamax-publica-su-metodologia-de-evaluacion",
    type: "news",
    title: "JugadaMax publica su metodología de evaluación",
    summary:
      "Ahora puedes consultar los criterios que usamos para ordenar casinos y casas de apuestas en México.",
    body: [
      "JugadaMax publicó su página de metodología, donde explicamos cómo evaluamos y ordenamos a los operadores que aparecen en el sitio.",
      "Nuestros rankings reflejan una evaluación editorial y pueden estar influenciados comercialmente mediante acuerdos de afiliación; por eso divulgamos esta información de forma abierta.",
      "Puedes consultar los criterios completos en la sección Cómo evaluamos. Seguiremos actualizando nuestra cobertura de casinos crypto, casinos fiat y apuestas deportivas en México.",
    ].join("\n\n"),
    authorId: "redaccion-jugadamax",
    tags: ["anuncio"],
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    locale: "es-MX",
  },
];
