import type { SourceReference } from "@/components/trust/SourceReferenceBlock";
import { buildOperatorHomepageSourceReference } from "@/lib/affiliate/source-references";
import { MELBET_PROMO_CODE } from "@/lib/affiliate/constants";

export type SpanishFiatSourceSlug =
  | "betsson"
  | "1xbet"
  | "melbet"
  | "caliente"
  | "codere";

type SpanishFiatSourceBlock = {
  description: string;
  items: SourceReference[];
};

/**
 * Operator-specific Spanish source blocks for paired fiat reviews.
 * Homepage rows resolve through the central affiliate helper.
 */
export const SPANISH_FIAT_SOURCE_BLOCKS: Record<
  SpanishFiatSourceSlug,
  SpanishFiatSourceBlock
> = {
  melbet: {
    description:
      "Fuentes oficiales del operador, materiales de campaña del partner, contexto externo y metodología editorial de JugadaMax.",
    items: [
      buildOperatorHomepageSourceReference({
        operatorId: "melbet",
        operatorName: "Melbet",
        market: "mx",
        locale: "es",
        fallbackOfficialHref: "https://melbet.com/",
      }),
      {
        label: "Melbet — términos y condiciones",
        href: "https://melbet.com/information/rules/",
        kind: "official-doc",
      },
      {
        label: "Casino Guru — reseña de Melbet",
        href: "https://casino.guru/melbet-casino-review",
        note: "Contexto de terceros — no es la calificación editorial de JugadaMax (4.0/5).",
        kind: "third-party",
      },
      {
        label: "AskGamblers — reseña de Melbet",
        href: "https://www.askgamblers.com/online-casinos/reviews/melbet-casino",
        note: "Contexto de opiniones de jugadores de terceros.",
        kind: "third-party",
      },
      {
        label: "Metodología editorial de JugadaMax",
        href: "/como-evaluamos",
      },
      {
        label: "Materiales de campaña suministrados por el partner",
        note: `Código promocional ${MELBET_PROMO_CODE}; la estructura de bienvenida puede variar por GEO y términos vigentes.`,
      },
    ],
  },
  betsson: {
    description:
      "Sitio oficial de Betsson México, metodología editorial de JugadaMax y recursos de divulgación y juego responsable.",
    items: [
      buildOperatorHomepageSourceReference({
        operatorId: "betsson",
        operatorName: "Betsson México",
        market: "mx",
        locale: "es",
        fallbackOfficialHref: "https://www.betsson.mx/",
      }),
      {
        label: "Metodología editorial de JugadaMax",
        href: "/como-evaluamos",
      },
      {
        label: "Divulgación de afiliados",
        href: "/divulgacion-afiliados",
      },
      {
        label: "Juego responsable",
        href: "/juego-responsable",
      },
      {
        label: "Términos, pagos y jurisdicción publicados por el operador",
        note: "Información publicada por el operador; confirma condiciones vigentes antes de registrarte.",
      },
    ],
  },
  "1xbet": {
    description:
      "Fuentes oficiales del operador, metodología editorial de JugadaMax, divulgación de afiliados y recursos de juego responsable.",
    items: [
      buildOperatorHomepageSourceReference({
        operatorId: "1xbet",
        operatorName: "1xBet",
        market: "mx",
        locale: "es",
        fallbackOfficialHref: "https://1xbet.com/",
      }),
      {
        label: "Metodología editorial de JugadaMax",
        href: "/como-evaluamos",
      },
      {
        label: "Divulgación de afiliados",
        href: "/divulgacion-afiliados",
      },
      {
        label: "Juego responsable",
        href: "/juego-responsable",
      },
      {
        label:
          "Términos oficiales, jurisdicciones restringidas y páginas de pago de 1xBet",
        note: "Información publicada por el operador; confirma condiciones vigentes antes de registrarte.",
      },
    ],
  },
  caliente: {
    description:
      "Metodología editorial, páginas de divulgación e información publicada por el operador cuando aplica.",
    items: [
      {
        label: "Metodología editorial de JugadaMax",
        href: "/como-evaluamos",
      },
      {
        label: "Divulgación de afiliados",
        href: "/divulgacion-afiliados",
      },
      {
        label: "Juego responsable",
        href: "/juego-responsable",
      },
      {
        label:
          "Términos oficiales, páginas de pago e información de jurisdicción restringida de Caliente",
        note: "Información publicada por el operador cuando aplica; verifica condiciones vigentes antes de registrarte.",
      },
    ],
  },
  codere: {
    description:
      "Metodología editorial, páginas de divulgación e información publicada por el operador cuando aplica.",
    items: [
      {
        label: "Metodología editorial de JugadaMax",
        href: "/como-evaluamos",
      },
      {
        label: "Divulgación de afiliados",
        href: "/divulgacion-afiliados",
      },
      {
        label: "Juego responsable",
        href: "/juego-responsable",
      },
      {
        label:
          "Términos oficiales, páginas de pago e información de jurisdicción restringida de Codere",
        note: "Información publicada por el operador cuando aplica; verifica condiciones vigentes antes de registrarte.",
      },
    ],
  },
};
