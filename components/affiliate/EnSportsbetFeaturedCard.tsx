import { SPORTSBETIO_REGISTRATION_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const SPORTSBETIO_TERMS =
  "The Champions Welcome Bonus offers 100% up to 300 USDT for Sports or Casino, with a 10 USDT minimum deposit. Published wagering is 15x for Sports and 40x for Casino. Activation, eligibility, markets, games, maximum bet, expiry, KYC, payments and withdrawals depend on your account and live terms.";

const SPORTSBETIO_RESPONSIBLE = "18+ | Play responsibly";

const SPORTSBETIO_LOGO = {
  src: "/operators/sportsbet.svg",
  alt: "Sportsbet.io",
  width: 120,
  height: 48,
} as const;

export type EnSportsbetFeaturedCardProps = {
  context: "review";
  className?: string;
};

const REVIEW_CONFIG: Omit<
  OfferCardProps,
  "operatorName" | "operatorId" | "responsibleNote" | "logo"
> = {
  badge: "CRYPTO SPORTSBOOK + CASINO",
  headline: "Sportsbet.io: sportsbook, casino and crypto payments",
  subheadline: "International crypto-first operator for comparison",
  offerText: "100% up to 300 USDT — Sports or Casino",
  paymentBadges: ["BTC", "USDT", "Sportsbook", "Casino"],
  featureBullets: [
    "Pre-match, live and esports sportsbook",
    "Casino, slots, Originals and live casino",
    "Published wagering: Sports 15x, Casino 40x",
    "Curaçao licence, KYC and withdrawal conditions apply",
  ],
  primaryCtaLabel: "Visit Sportsbet.io",
  primaryCtaHref: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
  secondaryCtaLabel: "Compare crypto casinos",
  secondaryCtaHref: "/en/casinos-crypto",
  termsNote: SPORTSBETIO_TERMS,
  visual: {
    eyebrow: "SPORTSBET.IO WELCOME",
    title: "100% up to 300 USDT",
    subtitle: "Sports 15x · Casino 40x",
    chips: ["Sports", "Casino", "Crypto"],
    variant: "sportsbetio",
    compact: false,
  },
  visualVariant: "crypto",
  mobileMaxBullets: 3,
  headingLevel: "h2",
};

/**
 * English Sportsbet.io featured card for /en/reviews/sportsbet-io.
 */
export function EnSportsbetFeaturedCard({ className }: EnSportsbetFeaturedCardProps) {
  return (
    <OfferCard
      operatorName="Sportsbet.io"
      operatorId="sportsbetio"
      logo={SPORTSBETIO_LOGO}
      responsibleNote={SPORTSBETIO_RESPONSIBLE}
      {...REVIEW_CONFIG}
      className={className}
    />
  );
}
