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
      "Stake México es una opción sólida para quienes buscan casino crypto y apuestas deportivas desde el dominio local stake.mx. Recomendamos revisar disponibilidad, pagos y términos vigentes antes de registrarte.",
    rating: 4.8,
    pros: [
      "Amplio catálogo de juegos y proveedores.",
      "Soporte para varias criptomonedas (Bitcoin, Ethereum, USDT, Litecoin).",
      "Interfaz clara y experiencia de usuario cuidada.",
    ],
    cons: [
      "La disponibilidad, pagos y límites pueden variar según el dominio local y las políticas del operador.",
      "Licencia y condiciones deben verificarse en stake.mx; no recomendamos dominios globales si tu región aparece restringida.",
      "Los términos de bonos cambian con frecuencia y deben verificarse en el sitio oficial.",
    ],
    body:
      "En esta reseña editorial evaluamos Stake para jugadores en México según nuestra metodología pública: seguridad, métodos de pago, licencias y experiencia de usuario. Nos enfocamos en el dominio local stake.mx, no en dominios globales que pueden mostrar restricciones regionales. Stake combina casino crypto y apuestas deportivas con soporte para múltiples criptomonedas. Como con cualquier operador, recomendamos verificar la disponibilidad, leer los términos y condiciones vigentes y jugar de forma responsable. La información de bonos y promociones debe confirmarse siempre en stake.mx.",
    paymentsSummary:
      "Depósitos y retiros en criptomonedas (Bitcoin, Ethereum, USDT, Litecoin) según las condiciones publicadas en stake.mx. Verifica límites y tiempos en el sitio oficial.",
    trustSummary:
      "Licencia y disponibilidad informadas por el operador para el dominio local de México (pendiente de verificación editorial). Revisa las condiciones vigentes en stake.mx antes de registrarte.",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    locale: "es-MX",
  },
];
