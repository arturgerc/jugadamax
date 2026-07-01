import type { Article } from "@/types/content";

/**
 * Guide articles (Article with type "guide") — task T037, User Story 5.
 *
 * Authenticity (Constitution Principle V): educational, author-attributed
 * content only. No fake statistics, no urgency, no "ganancia garantizada"
 * claims. Bodies use blank-line-separated paragraphs.
 */
export const guides: Article[] = [
  {
    id: "guia-como-elegir-casino-crypto",
    slug: "como-elegir-casino-crypto-mexico",
    type: "guide",
    title: "Cómo elegir un casino crypto en México",
    summary:
      "Qué revisar antes de registrarte en un casino con criptomonedas: seguridad, licencias, métodos de pago y juego responsable.",
    body: [
      "Elegir un casino crypto en México implica revisar varios factores antes de crear una cuenta. En esta guía editorial explicamos qué observamos y qué te recomendamos verificar por tu cuenta.",
      "Seguridad y licencias: revisa qué licencia informa el operador y en qué jurisdicción opera. Ten en cuenta que una licencia informada por el operador no equivale a una verificación independiente.",
      "Métodos de pago: confirma qué criptomonedas acepta, los tiempos de retiro y las comisiones. Cuando sea posible, prueba primero con montos pequeños.",
      "Términos de los bonos: lee siempre las condiciones, como los requisitos de apuesta y los plazos. Ninguna promoción garantiza ganancias.",
      "Juego responsable: define un presupuesto y respétalo. El juego es entretenimiento, no una fuente de ingresos, y es solo para mayores de 18 años.",
    ].join("\n\n"),
    authorId: "redaccion-jugadamax",
    tags: ["casinos crypto", "guía"],
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    locale: "es-MX",
  },
];
