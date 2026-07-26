import {
  ONE_XBET_AFFILIATE_URL,
  ONE_XBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const ONEXBET_TERMS =
  "Bonuses, free spins, eligible games, wagering, payments, withdrawals, verification and availability depend on 1xBet official terms and your jurisdiction.";

const ONEXBET_RESPONSIBLE = "18+ | Play responsibly";

const ONEXBET_LOGO = {
  src: "/operators/1xbet.svg",
  alt: "1xBet",
  width: 96,
  height: 48,
} as const;

export type EnOneXBetFeaturedCardProps = {
  context: "review";
  className?: string;
};

const REVIEW_CONFIG: Omit<
  OfferCardProps,
  "operatorName" | "operatorId" | "promoCode" | "responsibleNote" | "logo"
> = {
  badge: "CASINO + SPORTSBOOK",
  headline: "1xBet welcome package and sportsbook",
  subheadline: "Casino, live games and sports betting in one international account",
  offerText: "Welcome package: up to 40,000 MXN + 150 free spins subject to terms",
  paymentBadges: ["Cards", "E-wallets", "Crypto"],
  featureBullets: [
    "Welcome package shown for eligible new users",
    "Up to 40,000 MXN + 150 free spins subject to live terms",
    `Enter promo code ${ONE_XBET_PROMO_CODE} during registration when applicable`,
    "Review eligible deposits, wagering and withdrawal rules",
  ],
  primaryCtaLabel: "View 1xBet package",
  primaryCtaHref: ONE_XBET_AFFILIATE_URL,
  secondaryCtaLabel: "Sports betting coverage",
  secondaryCtaHref: "/en/betting",
  termsNote: ONEXBET_TERMS,
  visual: {
    eyebrow: "WELCOME PACKAGE",
    title: "Up to 40,000 MXN + 150 FS",
    subtitle: "New users · terms apply · GEO dependent",
    chips: ["Casino", "150 FS", "Sports"],
    variant: "onexbet",
    compact: true,
  },
  visualVariant: "mexico",
  mobileMaxBullets: 3,
  promoCodeLabel: "Promo code",
};

/**
 * English 1xBet featured card for /en/reviews/1xbet.
 */
export function EnOneXBetFeaturedCard({ className }: EnOneXBetFeaturedCardProps) {
  return (
    <OfferCard
      operatorName="1xBet"
      operatorId="1xbet"
      promoCode={ONE_XBET_PROMO_CODE}
      logo={ONEXBET_LOGO}
      responsibleNote={ONEXBET_RESPONSIBLE}
      {...REVIEW_CONFIG}
      headingLevel="h2"
      className={className}
    />
  );
}
