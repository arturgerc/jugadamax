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
    id: "betfury-welcome",
    casinoId: "betfury",
    title: "Hasta 590% + Free Spins según términos oficiales",
    type: "welcome",
    terms:
      "Promoción visible en Bonus Cabinet. Bonos, free spins, cashback, retiros y verificación dependen de los términos oficiales de BetFury.",
    active: true,
  },
];
