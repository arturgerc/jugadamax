import type { Review } from "@/types/content";

/**
 * Review records (User Story 2 / task T022).
 *
 * Authenticity (Constitution Principle IV/V): reviews are honest editorial
 * assessments authored by the JugadaMax editorial desk. The `rating` is an
 * author-attributed editorial opinion — never an aggregated user score, and it
 * is never encoded as AggregateRating/review-star schema. Pros AND cons are
 * balanced. No fabricated winners, payouts, or user comments.
 */
export const reviews: Review[] = [
  {
    id: "stake-review",
    casinoId: "stake",
    authorId: "redaccion-jugadamax",
    slug: "stake",
    title: "Reseña de Stake: casino crypto para jugadores en México",
    verdict:
      "Stake es una opción sólida para quienes buscan un casino crypto con amplia variedad de juegos y pagos en criptomonedas. Recomendamos revisar la disponibilidad y los términos vigentes desde México antes de registrarte.",
    rating: 4.8,
    pros: [
      "Amplio catálogo de juegos y proveedores.",
      "Soporte para varias criptomonedas (Bitcoin, Ethereum, USDT, Litecoin).",
      "Interfaz clara y experiencia de usuario cuidada.",
    ],
    cons: [
      "La disponibilidad y los métodos de pago pueden variar según la región.",
      "Según el operador, opera bajo licencia de Curazao; conviene revisar las condiciones para México.",
      "Los términos de bonos cambian con frecuencia y deben verificarse en el sitio oficial.",
    ],
    body:
      "En esta reseña editorial evaluamos Stake según nuestra metodología pública: seguridad, métodos de pago, licencias y experiencia de usuario. Stake es un casino crypto internacional con un catálogo extenso y soporte para múltiples criptomonedas. Como con cualquier operador, recomendamos verificar la disponibilidad desde México, leer los términos y condiciones vigentes y jugar de forma responsable. La información de bonos y promociones debe confirmarse siempre en el sitio oficial del operador.",
    paymentsSummary:
      "Depósitos y retiros en criptomonedas (Bitcoin, Ethereum, USDT, Litecoin). Verifica límites y tiempos en el sitio oficial.",
    trustSummary:
      "Licencia de Curazao informada por el operador (pendiente de verificación editorial). Revisa las condiciones aplicables a tu región antes de registrarte.",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    locale: "es-MX",
  },
];
