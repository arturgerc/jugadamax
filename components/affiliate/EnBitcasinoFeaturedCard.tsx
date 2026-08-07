import { BITCASINO_REGISTRATION_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const BITCASINO_FULL_TERMS =
  "The supplied promotional page shows three deposit bonuses: 100% up to 1,500 USDT, 50% up to 2,000 USDT and 100% up to 1,500 USDT, for an advertised maximum of 5,000 USDT or equivalent. Activation, currency, minimum deposit, wagering, eligible games, maximum bet, expiry, KYC, limits, payments and withdrawals depend on account, jurisdiction and live terms.";

const BITCASINO_RESPONSIBLE = "18+ | Play responsibly";

const BITCASINO_LOGO = {
  src: "/operators/bitcasino.svg",
  alt: "Bitcasino.io",
  width: 120,
  height: 48,
} as const;

export type EnBitcasinoFeaturedCardProps = {
  context: "review";
  className?: string;
};

const REVIEW_CONFIG: Omit<
  OfferCardProps,
  "operatorName" | "operatorId" | "responsibleNote" | "logo"
> = {
  badge: "CRYPTO CASINO",
  headline: "Bitcasino: bonus, slots, live casino and Originals",
  subheadline: "International crypto casino for comparison",
  offerText: "Up to 5,000 USDT across three deposit bonuses",
  paymentBadges: ["BTC", "ETH", "USDT", "TRX"],
  featureBullets: [
    "Slots, live casino, tables and Originals",
    "Three deposit bonuses with an advertised maximum of 5,000 USDT",
    "Rotating promotions and VIP-style benefits",
    "Licence, KYC, wagering and withdrawals must be verified",
  ],
  primaryCtaLabel: "Visit Bitcasino.io",
  primaryCtaHref: BITCASINO_REGISTRATION_AFFILIATE_URL,
  secondaryCtaLabel: "Compare crypto casinos",
  secondaryCtaHref: "/en/casinos-crypto",
  termsNote: BITCASINO_FULL_TERMS,
  visual: {
    eyebrow: "BITCASINO WELCOME",
    title: "Up to 5,000 USDT",
    subtitle: "3 bonuses · crypto casino",
    chips: ["Crypto", "Casino", "Originals"],
    variant: "bitcasino",
    compact: false,
  },
  visualVariant: "crypto",
  mobileMaxBullets: 4,
  headingLevel: "h2",
};

/**
 * English Bitcasino.io featured card for /en/reviews/bitcasino.
 * Layout parity with Spanish BitcasinoFeaturedCard review context.
 */
export function EnBitcasinoFeaturedCard({ className }: EnBitcasinoFeaturedCardProps) {
  return (
    <OfferCard
      operatorName="Bitcasino.io"
      operatorId="bitcasino"
      logo={BITCASINO_LOGO}
      responsibleNote={BITCASINO_RESPONSIBLE}
      {...REVIEW_CONFIG}
      className={className}
    />
  );
}
