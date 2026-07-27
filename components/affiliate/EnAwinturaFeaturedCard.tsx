import { AWINTURA_CARD_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const AWINTURA_TERMS =
  "The supplied campaign creative shows bonus amounts, free spins and freebets, but Awintura's public pages show other figures depending on country, currency and account. Confirm the active promotion, currency, minimum deposit, wagering, eligible games, expiry, limits and conditions before depositing or betting.";

const AWINTURA_RESPONSIBLE = "18+ | Play responsibly";

const AWINTURA_LOGO = {
  src: "/operators/awintura.svg",
  alt: "Awintura",
  width: 120,
  height: 48,
} as const;

export type EnAwinturaFeaturedCardProps = {
  context: "review";
  className?: string;
};

const REVIEW_CONFIG: Omit<
  OfferCardProps,
  "operatorName" | "operatorId" | "responsibleNote" | "logo"
> = {
  badge: "Fiat casino + sportsbook",
  headline: "Awintura: casino, bonuses, payments and sports betting",
  subheadline: "International mixed operator for comparison",
  offerText: "Casino bonus + free spins + freebets — figures vary by campaign",
  paymentBadges: ["Cards", "E-wallets", "Crypto", "Sportsbook"],
  featureBullets: [
    "Casino, live casino, table games and instant games",
    "Sportsbook and freebet balances",
    "Fiat methods and crypto options depending on availability",
    "Curaçao licence and jurisdiction-dependent terms",
  ],
  primaryCtaLabel: "Visit Awintura",
  primaryCtaHref: AWINTURA_CARD_AFFILIATE_URL,
  secondaryCtaLabel: "Compare fiat casinos",
  secondaryCtaHref: "/en/casinos-fiat",
  termsNote: AWINTURA_TERMS,
  visual: {
    eyebrow: "AWINTURA WELCOME",
    title: "Casino + free spins",
    subtitle: "+ freebets · campaign varies",
    chips: ["Casino", "Sport", "Free spins"],
    variant: "awintura",
    compact: false,
  },
  visualVariant: "mexico",
  mobileMaxBullets: 4,
  headingLevel: "h2",
};

/**
 * English Awintura featured card for /en/reviews/awintura.
 */
export function EnAwinturaFeaturedCard({ className }: EnAwinturaFeaturedCardProps) {
  return (
    <OfferCard
      operatorName="Awintura"
      operatorId="awintura"
      logo={AWINTURA_LOGO}
      responsibleNote={AWINTURA_RESPONSIBLE}
      {...REVIEW_CONFIG}
      className={className}
    />
  );
}
