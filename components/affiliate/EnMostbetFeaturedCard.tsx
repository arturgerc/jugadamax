import {
  MOSTBET_PLAYERS_AFFILIATE_URL,
  MOSTBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const MOSTBET_TERMS =
  "Affiliate landing shows 125% + 250 FS on the first deposit with Casino or Sports selection. Max amount, currency, minimum deposit, wagering, eligible games/markets, expiry and availability depend on campaign, account, GEO and live terms after redirect.";

const MOSTBET_RESPONSIBLE = "18+ | Play responsibly";

const MOSTBET_LOGO = {
  src: "/operators/mostbet.webp",
  alt: "Mostbet",
  width: 120,
  height: 48,
} as const;

export type EnMostbetFeaturedCardProps = {
  context: "review";
  className?: string;
};

const REVIEW_CONFIG: Omit<
  OfferCardProps,
  "operatorName" | "operatorId" | "responsibleNote" | "logo" | "promoCode"
> = {
  badge: "CASINO + SPORTS + APP",
  headline: "Mostbet first-deposit campaign",
  subheadline: "Choose Casino or Sports welcome framing subject to live terms",
  offerText: "125% + 250 FS on the first deposit subject to campaign selection",
  paymentBadges: ["Cards", "E-wallets", "Crypto"],
  featureBullets: [
    "Casino, live casino, poker and instant games",
    "Sportsbook, live betting and esports",
    `Promo code ${MOSTBET_PROMO_CODE} for the current campaign`,
    "Payments, KYC and availability depend on account and GEO",
  ],
  primaryCtaLabel: "Visit Mostbet",
  primaryCtaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
  secondaryCtaLabel: "Sports betting coverage",
  secondaryCtaHref: "/en/betting",
  termsNote: MOSTBET_TERMS,
  visual: {
    eyebrow: "FIRST DEPOSIT",
    title: "125% + 250 FS",
    subtitle: `Casino or Sports · code ${MOSTBET_PROMO_CODE}`,
    chips: ["Casino", "Sports", "250 FS"],
    variant: "mostbet",
    compact: true,
  },
  visualVariant: "fiat",
  mobileMaxBullets: 3,
  promoCodeLabel: "Promo code",
};

/**
 * English Mostbet featured card for /en/reviews/mostbet.
 */
export function EnMostbetFeaturedCard({ className }: EnMostbetFeaturedCardProps) {
  return (
    <OfferCard
      operatorName="Mostbet"
      operatorId="mostbet"
      promoCode={MOSTBET_PROMO_CODE}
      logo={MOSTBET_LOGO}
      responsibleNote={MOSTBET_RESPONSIBLE}
      {...REVIEW_CONFIG}
      headingLevel="h2"
      className={className}
    />
  );
}
