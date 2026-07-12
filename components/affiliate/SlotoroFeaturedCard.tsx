import { SLOTORO_MAIN_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const SLOTORO_COMPACT_TERMS =
  "Bonus value, currency, deposit thresholds, wagering, eligible games and availability vary by country, account and current terms.";

const SLOTORO_FULL_TERMS =
  "The official package is distributed across three deposits. Currency, bonus caps, free-spin titles, minimum deposits and eligibility may vary by country and account. Published terms include 40x wagering, a five-day wagering period and a maximum conversion limit. Confirm the exact offer after redirect before depositing.";

const SLOTORO_RESPONSIBLE = "18+ | Play responsibly";

const SLOTORO_LOGO = {
  src: "/operators/slotoro.svg",
  alt: "Slotoro Casino",
  width: 120,
  height: 48,
} as const;

type SlotoroContext = "homepage" | "fiat" | "review";

export type SlotoroFeaturedCardProps = {
  context: SlotoroContext;
  className?: string;
  fillHeight?: boolean;
};

const CONTEXT_CONFIG: Record<
  SlotoroContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  homepage: {
    badge: "FIAT & MULTI-CURRENCY CASINO",
    headline: "Slotoro Casino",
    subheadline: "Slots, live casino, Wheel of Fortune and loyalty",
    offerText: "Up to 2,500 + 250 FS across 3 deposits",
    paymentBadges: ["Cards", "E-wallets", "Interac", "Multi-currency"],
    featureBullets: [
      "Three-deposit welcome package with up to 250 FS",
      "Wheel of Fortune, tournaments and loyalty rewards",
    ],
    primaryCtaLabel: "Visit Slotoro",
    primaryCtaHref: SLOTORO_MAIN_AFFILIATE_URL,
    secondaryCtaLabel: "Read review",
    secondaryCtaHref: "/en/reviews/slotoro",
    termsNote: SLOTORO_COMPACT_TERMS,
    visual: {
      eyebrow: "WELCOME PACKAGE",
      title: "Up to 2,500 + 250 FS",
      subtitle: "Across 3 deposits · terms apply",
      chips: ["100%", "125%", "150%"],
      variant: "slotoro",
      compact: true,
    },
    visualVariant: "fiat",
    mobileMaxBullets: 2,
    className: "mt-4",
  },
  fiat: {
    badge: "REVIEWED FIAT CASINO",
    headline: "Slotoro: fiat casino, live games and loyalty",
    subheadline: "Cards, e-wallets, tournaments, Wheel of Fortune and sportsbook additional",
    offerText: "Up to 2,500 + 250 FS across 3 deposits",
    paymentBadges: ["Cards", "E-wallets", "Interac", "Fiat currencies"],
    featureBullets: [
      "Three-deposit welcome package with GEO-specific currency",
      "Slots, live casino, tables, jackpots and instant games",
      "Wheel of Fortune, tournaments, VIP and loyalty",
      "Active Curaçao licence with restricted-country rules",
    ],
    primaryCtaLabel: "View Slotoro welcome offer",
    primaryCtaHref: SLOTORO_MAIN_AFFILIATE_URL,
    secondaryCtaLabel: "Read Slotoro review",
    secondaryCtaHref: "/en/reviews/slotoro",
    termsNote: SLOTORO_FULL_TERMS,
    visual: {
      eyebrow: "WELCOME + ROYAL PIGGY",
      title: "Up to 2,500 + 250 FS",
      subtitle: "Bonus package and variable wheel landing",
      chips: ["3 deposits", "250 FS", "Wheel"],
      variant: "slotoro",
      compact: false,
    },
    visualVariant: "fiat",
    mobileMaxBullets: 2,
    className: "mt-4",
  },
  review: {
    badge: "FIAT & MULTI-CURRENCY CASINO",
    headline: "Slotoro: casino, bonuses, payments and loyalty",
    subheadline: "International casino with sportsbook as an additional product",
    offerText: "Up to 2,500 + 250 FS across 3 deposits",
    paymentBadges: ["Cards", "E-wallets", "Interac", "Multi-currency"],
    featureBullets: [
      "Three-deposit welcome package",
      "Up to 250 free spins according to the live offer",
      "Wheel of Fortune, tournaments, VIP and loyalty",
      "Curaçao licence with country restrictions",
    ],
    primaryCtaLabel: "View Slotoro welcome offer",
    primaryCtaHref: SLOTORO_MAIN_AFFILIATE_URL,
    secondaryCtaLabel: "Compare fiat casinos",
    secondaryCtaHref: "/en/casinos-fiat",
    termsNote: SLOTORO_FULL_TERMS,
    visual: {
      eyebrow: "WELCOME PACKAGE",
      title: "Up to 2,500 + 250 FS",
      subtitle: "40x wagering · 5-day period",
      chips: ["3 deposits", "40x", "250 FS"],
      variant: "slotoro",
      compact: false,
    },
    visualVariant: "fiat",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded Slotoro offer card for English/global fiat casino surfaces. */
export function SlotoroFeaturedCard({ context, className, fillHeight }: SlotoroFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Slotoro Casino"
      operatorId="slotoro"
      logo={SLOTORO_LOGO}
      responsibleNote={SLOTORO_RESPONSIBLE}
      {...config}
      fillHeight={fillHeight}
      className={className ?? config.className}
    />
  );
}
