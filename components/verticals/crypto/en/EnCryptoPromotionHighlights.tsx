import { CryptoPromotionCard } from "@/components/verticals/crypto/CryptoPromotionCard";
import {
  EN_CRYPTO_PROMOTIONS,
  resolveEnCryptoCtaHref,
} from "@/components/verticals/crypto/en/en-crypto-page-config";
import { getEnCryptoReviewHref } from "@/components/verticals/crypto/en/en-crypto-data";
import { getCasinoById } from "@/lib/content";

/**
 * Active crypto promotions — operators not in TOP-6.
 */
export function EnCryptoPromotionHighlights() {
  const cards = EN_CRYPTO_PROMOTIONS.flatMap((promo) => {
    const casino = getCasinoById(promo.operatorId);
    const ctaHref = resolveEnCryptoCtaHref(promo.operatorId);
    if (!casino || !ctaHref) return [];
    return [
      {
        ...promo,
        name: casino.name,
        logo: casino.logo,
        ctaHref,
        reviewHref: getEnCryptoReviewHref(promo.operatorId),
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="promociones-crypto"
      aria-labelledby="en-promociones-crypto-heading"
      className="mb-8 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-promociones-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Active crypto promotions
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Campaigns published by operators. Check deposit rules, wagering, eligible games, limits,
          verification and expiry before opting in. Eligibility varies by jurisdiction.
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
        {cards.map((card) => (
          <li key={card.operatorId} className="min-w-0">
            <CryptoPromotionCard
              operatorId={card.operatorId}
              name={card.name}
              offerTitle={card.offerTitle}
              promoCode={card.promoCode}
              chips={card.chips}
              termsLine={card.termsLine}
              ctaLabel={card.ctaLabel}
              ctaHref={card.ctaHref}
              reviewHref={card.reviewHref}
              reviewLabel="Read review"
              promoCodeLabel="Code"
              reserveReviewSpace
              theme={card.theme}
              position={card.position}
              logo={card.logo}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
