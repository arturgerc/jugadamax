import {
  AWINTURA_CARD_AFFILIATE_URL,
  BETFURY_AFFILIATE_URL,
  BETFURY_PROMO_CODE,
  BETSSON_MX_CASINO_WELCOME_URL,
  BITCASINO_PROMO_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
  MELBET_AFFILIATE_URL,
  MELBET_PROMO_CODE,
  MELLSTROY_GLOBAL_AFFILIATE_URL,
  MELLSTROY_PROMO_CODE,
  MOSTBET_PLAYERS_AFFILIATE_URL,
  MOSTBET_PROMO_CODE,
  ONE_XBET_AFFILIATE_URL,
  ONE_XBET_PROMO_CODE,
  SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
  VODKABET_AFFILIATE_URL,
  VODKABET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import type { BonusDirectoryGroup } from "@/types/content";

/** Page-level update date for /bonos V2 — not individual offer verification. */
export const BONUS_PAGE_UPDATED_AT = "2026-07-22";

export type BonusPageCtaConfig = {
  bonusId: string;
  ctaLabel: string;
  ctaHref: string;
  promoCode?: string;
  badge?: string;
};

/** Featured TOP-3 — casino-first Mexico hierarchy. */
export const BONUS_FEATURED: readonly BonusPageCtaConfig[] = [
  {
    bonusId: "betsson-welcome",
    ctaLabel: "Ver bono Betsson",
    ctaHref: BETSSON_MX_CASINO_WELCOME_URL,
    badge: "Destacado MX",
  },
  {
    bonusId: "betfury-welcome",
    ctaLabel: "Ver bonos BetFury",
    ctaHref: BETFURY_AFFILIATE_URL,
    promoCode: BETFURY_PROMO_CODE,
    badge: "Crypto · rewards",
  },
  {
    bonusId: "bitcasino-three-deposit-welcome",
    ctaLabel: "Ver bono Bitcasino",
    ctaHref: BITCASINO_PROMO_AFFILIATE_URL,
    badge: "Casino crypto",
  },
] as const;

/** CTA + promo map for all /bonos directory entries. */
export const BONUS_PAGE_CTAS: Record<string, BonusPageCtaConfig> = {
  "betsson-welcome": BONUS_FEATURED[0]!,
  "betfury-welcome": BONUS_FEATURED[1]!,
  "bitcasino-three-deposit-welcome": BONUS_FEATURED[2]!,
  "1xbet-casino-welcome-package": {
    bonusId: "1xbet-casino-welcome-package",
    ctaLabel: "Ver paquete 1xBet",
    ctaHref: ONE_XBET_AFFILIATE_URL,
    promoCode: ONE_XBET_PROMO_CODE,
  },
  "awintura-welcome": {
    bonusId: "awintura-welcome",
    ctaLabel: "Ver bono Awintura",
    ctaHref: AWINTURA_CARD_AFFILIATE_URL,
  },
  "gamdom-rewards-welcome": {
    bonusId: "gamdom-rewards-welcome",
    ctaLabel: "Ver Gamdom Rewards",
    ctaHref: GAMDOM_GLOBAL_AFFILIATE_URL,
  },
  "mellstroy-welcome": {
    bonusId: "mellstroy-welcome",
    ctaLabel: "Ver bono Mellstroy",
    ctaHref: MELLSTROY_GLOBAL_AFFILIATE_URL,
    promoCode: MELLSTROY_PROMO_CODE,
  },
  "vodkabet-welcome": {
    bonusId: "vodkabet-welcome",
    ctaLabel: "Ver bono Vodka.bet",
    ctaHref: VODKABET_AFFILIATE_URL,
    promoCode: VODKABET_PROMO_CODE,
  },
  "melbet-sportsbook-welcome": {
    bonusId: "melbet-sportsbook-welcome",
    ctaLabel: "Ver bono Melbet",
    ctaHref: MELBET_AFFILIATE_URL,
    promoCode: MELBET_PROMO_CODE,
  },
  "sportsbetio-champions-welcome": {
    bonusId: "sportsbetio-champions-welcome",
    ctaLabel: "Ver bono Sportsbet.io",
    ctaHref: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
  },
  "mostbet-first-deposit": {
    bonusId: "mostbet-first-deposit",
    ctaLabel: "Ver bono Mostbet",
    ctaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    promoCode: MOSTBET_PROMO_CODE,
  },
};

export const BONUS_DIRECTORY_SECTIONS: readonly {
  group: BonusDirectoryGroup;
  heading: string;
  description: string;
  sectionId: string;
}[] = [
  {
    group: "casino-mx",
    heading: "Casino y ofertas para México",
    description:
      "Promociones de casino y operadores mixtos con foco en pagos o mercado mexicano.",
    sectionId: "bonos-casino-mx",
  },
  {
    group: "crypto-rewards",
    heading: "Crypto y recompensas",
    description:
      "Bonos crypto, free spins y programas de rewards o rakeback según campaña.",
    sectionId: "bonos-crypto-rewards",
  },
  {
    group: "sports-mixed",
    heading: "Apuestas y productos mixtos",
    description:
      "Promociones deportivas o landings donde puedes elegir casino o sportsbook.",
    sectionId: "bonos-sports-mixed",
  },
] as const;

export const BONUS_STATUS_LABELS: Record<string, string> = {
  "active-variable": "Oferta variable",
  "pending-verification": "Revisión editorial",
  "active-verified": "Datos publicados",
  expiring: "Vigencia limitada",
  expired: "No vigente",
  paused: "Pausada",
};
