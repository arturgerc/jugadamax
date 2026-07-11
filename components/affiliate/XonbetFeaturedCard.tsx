import { XONBET_GLOBAL_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const XONBET_COMPACT_TERMS =
  "Offer, percentage and cap may differ by country, currency and account. Wagering applies.";

const XONBET_FULL_TERMS =
  "Welcome offer, currency cap, wagering, eligible games and cashback requirements vary by country, currency, campaign and account. Confirm the exact offer shown after redirect and read the operator's current terms before depositing.";

const XONBET_RESPONSIBLE = "18+ | Play responsibly";

const XONBET_LOGO = {
  src: "/operators/xonbet.svg",
  alt: "XON.BET",
  width: 120,
  height: 48,
} as const;

type XonbetContext = "homepage" | "fiat" | "review";

export type XonbetFeaturedCardProps = {
  context: XonbetContext;
  className?: string;
  fillHeight?: boolean;
};

const CONTEXT_CONFIG: Record<
  XonbetContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  homepage: {
    badge: "MULTI-CURRENCY CASINO",
    headline: "XON.BET",
    subheadline: "Slots, live casino, tournaments and loyalty",
    offerText: "Up to 500% across the first 4 deposits",
    paymentBadges: ["Cards", "E-wallets", "Crypto"],
    featureBullets: [
      "150% + 120% + 110% + 120% deposit package",
      "5% weekly cashback subject to activity and terms",
    ],
    primaryCtaLabel: "Visit XON.BET",
    primaryCtaHref: XONBET_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Read review",
    secondaryCtaHref: "/en/reviews/xonbet",
    termsNote: XONBET_COMPACT_TERMS,
    visual: {
      eyebrow: "WELCOME PACKAGE",
      title: "Up to 500%",
      subtitle: "Across 4 deposits",
      chips: ["150%", "120%", "110%", "120%"],
      variant: "xonbet",
      compact: true,
    },
    visualVariant: "fiat",
    mobileMaxBullets: 2,
    emphasis: "comparison-secondary",
    compactComparison: true,
    className: "h-fit self-start p-3 sm:p-4",
  },
  fiat: {
    badge: "FEATURED MULTI-CURRENCY CASINO",
    headline: "XON.BET: fiat and crypto-enabled online casino",
    subheadline: "Slots, live casino, tournaments, loyalty and flexible payment options",
    offerText: "Up to 500% across the first 4 deposits",
    paymentBadges: ["Cards", "E-wallets", "Crypto", "Interac"],
    featureBullets: [
      "Four-deposit welcome package with geo-specific caps",
      "Slots, live casino, crash/instant games and table games",
      "Cards, e-wallets and selected cryptocurrencies",
      "5% weekly cashback subject to activity and terms",
    ],
    primaryCtaLabel: "Visit XON.BET",
    primaryCtaHref: XONBET_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Read XON.BET review",
    secondaryCtaHref: "/en/reviews/xonbet",
    termsNote: XONBET_COMPACT_TERMS,
    visual: {
      eyebrow: "WELCOME PACKAGE",
      title: "Up to 500%",
      subtitle: "Caps vary by country and currency",
      chips: ["150%", "120%", "110%", "120%"],
      variant: "xonbet",
      compact: false,
    },
    visualVariant: "fiat",
    mobileMaxBullets: 2,
    className: "mt-4",
  },
  review: {
    badge: "MULTI-CURRENCY CASINO",
    headline: "XON.BET: slots, live casino and multi-currency payments",
    subheadline: "International casino with tournaments, loyalty and selected crypto support",
    offerText: "Up to 500% across the first 4 deposits",
    paymentBadges: ["Cards", "E-wallets", "Crypto", "Interac"],
    featureBullets: [
      "150% + 120% + 110% + 120% welcome structure",
      "5% weekly cashback subject to activity thresholds",
      "Fiat, e-wallet and selected crypto payment options",
      "Curaçao licence with country-specific availability",
    ],
    primaryCtaLabel: "Visit XON.BET",
    primaryCtaHref: XONBET_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Compare fiat casinos",
    secondaryCtaHref: "/en/casinos-fiat",
    termsNote: XONBET_FULL_TERMS,
    visual: {
      eyebrow: "WELCOME PACKAGE",
      title: "Up to 500%",
      subtitle: "Across 4 deposits · GEO-specific caps",
      chips: ["150%", "120%", "Cashback"],
      variant: "xonbet",
      compact: false,
    },
    visualVariant: "fiat",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded XON.BET offer card for English/global casino surfaces. */
export function XonbetFeaturedCard({ context, className, fillHeight }: XonbetFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="XON.BET"
      operatorId="xonbet"
      logo={XONBET_LOGO}
      responsibleNote={XONBET_RESPONSIBLE}
      {...config}
      fillHeight={fillHeight}
      className={className ?? config.className}
    />
  );
}
