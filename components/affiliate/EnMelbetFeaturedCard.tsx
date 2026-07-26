import {
  MELBET_AFFILIATE_URL,
  MELBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const MELBET_TERMS =
  "Bonuses, odds, markets, games, payments, withdrawals, verification and availability depend on Melbet official terms and your jurisdiction.";

const MELBET_RESPONSIBLE = "18+ | Play responsibly";

const MELBET_LOGO = {
  src: "/operators/melbet.svg",
  alt: "Melbet",
  width: 120,
  height: 48,
} as const;

export type EnMelbetFeaturedCardProps = {
  context: "review";
  className?: string;
};

const REVIEW_CONFIG: Omit<
  OfferCardProps,
  "operatorName" | "operatorId" | "promoCode" | "responsibleNote" | "logo"
> = {
  badge: "CASINO + SPORTSBOOK",
  headline: "Melbet casino, live games and sportsbook",
  subheadline: "Mixed international account with promotions subject to live terms",
  offerText: "Welcome campaigns subject to GEO, product selection and live terms",
  paymentBadges: ["Cards", "E-wallets", "Crypto"],
  featureBullets: [
    "Sportsbook and casino in one account",
    "Slots, live casino and fast games where enabled",
    `Enter promo code ${MELBET_PROMO_CODE} during registration when applicable`,
    "Review rollover, minimum odds, expiry and KYC before depositing",
  ],
  primaryCtaLabel: "Visit Melbet",
  primaryCtaHref: MELBET_AFFILIATE_URL,
  secondaryCtaLabel: "Sports betting coverage",
  secondaryCtaHref: "/en/betting",
  termsNote: MELBET_TERMS,
  visual: {
    eyebrow: "CASINO + LIVE",
    title: "Slots, live casino and sports",
    subtitle: "Promotions subject to live terms",
    chips: ["Slots", "Live", "Sports"],
    variant: "melbet",
    compact: true,
  },
  visualVariant: "mexico",
  mobileMaxBullets: 3,
  promoCodeLabel: "Promo code",
};

/**
 * English Melbet featured card for /en/reviews/melbet.
 */
export function EnMelbetFeaturedCard({ className }: EnMelbetFeaturedCardProps) {
  return (
    <OfferCard
      operatorName="Melbet"
      operatorId="melbet"
      promoCode={MELBET_PROMO_CODE}
      logo={MELBET_LOGO}
      responsibleNote={MELBET_RESPONSIBLE}
      {...REVIEW_CONFIG}
      headingLevel="h2"
      className={className}
    />
  );
}
