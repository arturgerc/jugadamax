import type { Bonus } from "@/types/content";

/**
 * Seed bonus records tied to operators (FR-013).
 *
 * Authenticity (Constitution Principle V): titles are neutral, honest
 * placeholders that direct users to verify the current offer on the operator's
 * site. No fabricated amounts, no fabricated urgency/countdowns.
 */
export const bonuses: Bonus[] = [
  {
    id: "stake-welcome",
    casinoId: "stake",
    title: "Consulta la promoción de bienvenida vigente",
    type: "welcome",
    terms: "Aplican términos y condiciones del operador. Verifica la oferta actual en el sitio oficial.",
    active: true,
  },
  {
    id: "cryptocasino-welcome",
    casinoId: "cryptocasino",
    title: "Consulta la promoción vigente en el sitio oficial",
    type: "welcome",
    terms: "Aplican términos y condiciones del operador. Verifica la oferta actual en el sitio oficial.",
    active: true,
  },
  {
    id: "ethcasino-welcome",
    casinoId: "ethcasino",
    title: "Consulta la promoción vigente en el sitio oficial",
    type: "welcome",
    terms: "Aplican términos y condiciones del operador. Verifica la oferta actual en el sitio oficial.",
    active: true,
  },
  {
    id: "ltccasino-welcome",
    casinoId: "ltccasino",
    title: "Consulta la promoción vigente en el sitio oficial",
    type: "welcome",
    terms: "Aplican términos y condiciones del operador. Verifica la oferta actual en el sitio oficial.",
    active: true,
  },
  {
    id: "caliente-welcome",
    casinoId: "caliente",
    title: "Consulta el bono de bienvenida vigente",
    type: "welcome",
    terms: "Aplican términos y condiciones del operador. Verifica la oferta actual en el sitio oficial.",
    active: true,
  },
  {
    id: "codere-welcome",
    casinoId: "codere",
    title: "Consulta la promoción de apuestas vigente",
    type: "welcome",
    terms: "Aplican términos y condiciones del operador. Verifica la oferta actual en el sitio oficial.",
    active: true,
  },
  {
    id: "betsson-welcome",
    casinoId: "betsson",
    title: "Consulta la promoción de bienvenida vigente",
    type: "welcome",
    terms: "Aplican términos y condiciones del operador. Verifica la oferta actual en el sitio oficial.",
    active: true,
  },
  {
    id: "500-casino-welcome",
    casinoId: "500-casino",
    title: "Promociones visibles según términos oficiales",
    type: "welcome",
    terms:
      "Verifica promociones, requisitos de apuesta, disponibilidad, pagos y retiros directamente en 500 Casino.",
    active: true,
  },
  {
    id: "rainbet-promotions",
    casinoId: "rainbet",
    title: "Promociones, rewards y free spins según términos oficiales",
    type: "welcome",
    terms:
      "La página pública de promociones muestra Wager Lock Promotion, No Wager Lock Promotion, bonos de primer depósito y free spins. Depósito mínimo $30 y máximo $700 según información publicada. Verifica requisitos de apuesta, juegos elegibles, elegibilidad por país, free spins de Pragmatic Play y condiciones antes de depositar.",
    active: true,
  },
  {
    id: "betfury-welcome",
    casinoId: "betfury",
    title: "Hasta 590% + Free Spins según términos oficiales",
    type: "welcome",
    terms:
      "Promoción visible en Bonus Cabinet. Bonos, free spins, cashback, retiros y verificación dependen de los términos oficiales de BetFury.",
    active: true,
  },
];
