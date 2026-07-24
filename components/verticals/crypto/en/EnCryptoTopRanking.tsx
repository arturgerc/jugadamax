import { CryptoTopCasinoCard } from "@/components/verticals/crypto/CryptoTopCasinoCard";
import {
  EN_CRYPTO_TOP_SIX,
  resolveEnCryptoCtaHref,
} from "@/components/verticals/crypto/en/en-crypto-page-config";
import { getEnCryptoReviewHref } from "@/components/verticals/crypto/en/en-crypto-data";
import {
  getCryptoEditorialRating,
  getCryptoPaymentNames,
} from "@/components/verticals/crypto/crypto-data";
import { getCasinoById } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Main TOP-6 crypto recommendations for /en/casinos-crypto.
 */
export function EnCryptoTopRanking() {
  const cards = EN_CRYPTO_TOP_SIX.flatMap((entry) => {
    const casino = getCasinoById(entry.operatorId);
    const ctaHref = resolveEnCryptoCtaHref(entry.operatorId);
    if (!casino || !ctaHref) return [];
    return [
      {
        ...entry,
        logo: casino.logo,
        rating: getCryptoEditorialRating(entry.operatorId),
        paymentNames: getCryptoPaymentNames(entry.operatorId),
        ctaHref,
        reviewHref: getEnCryptoReviewHref(entry.operatorId),
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="top-crypto"
      aria-labelledby="en-top-crypto-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1.5">
        <h2
          id="en-top-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Crypto casinos recommended by JugadaMax
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Editorial selection based on user interest, product, payments, specialisation and published
          terms. Order may differ from individual scores.
        </p>
        <details className="group rounded-md border border-white/8 bg-[#0A1931]/40 open:border-primary/20">
          <summary
            className={cn(
              "cursor-pointer list-none px-2.5 py-1.5 text-xs font-medium text-foreground sm:px-3 sm:py-2 sm:text-sm",
              "[&::-webkit-details-marker]:hidden",
            )}
          >
            <span className="flex items-center justify-between gap-2">
              How is this selection ordered?
              <span
                aria-hidden="true"
                className="text-primary transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="border-t border-white/6 px-2.5 pb-2.5 pt-1.5 text-xs leading-relaxed text-muted-foreground sm:px-3 sm:pb-3 sm:pt-2 sm:text-sm">
            Order combines user interest, specialisation, payment methods, product and editorial
            assessment. It is not a universal ranking and may change when terms change. Availability
            depends on your jurisdiction.
          </p>
        </details>
      </div>

      <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {cards.slice(0, 3).map((card) => (
            <li
              key={card.operatorId}
              className={cn("min-w-0", card.featured && "sm:col-span-2 xl:col-span-2")}
            >
              <CryptoTopCasinoCard
                operatorId={card.operatorId}
                name={card.name}
                secondaryName={card.secondaryName}
                badge={card.badge}
                purpose={card.purpose}
                summary={card.summary}
                chips={card.chips}
                kycLabel={card.kycLabel}
                paymentNames={card.paymentNames}
                rating={card.rating}
                primaryCtaLabel={card.ctaLabel}
                primaryCtaHref={card.ctaHref}
                reviewHref={card.reviewHref}
                reviewLabel="Read review"
                reserveReviewSpace
                theme={card.theme}
                featured={card.featured}
                position={card.position}
                logo={card.logo}
              />
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {cards.slice(3).map((card) => (
            <li key={card.operatorId} className="min-w-0">
              <CryptoTopCasinoCard
                operatorId={card.operatorId}
                name={card.name}
                secondaryName={card.secondaryName}
                badge={card.badge}
                purpose={card.purpose}
                summary={card.summary}
                chips={card.chips}
                kycLabel={card.kycLabel}
                paymentNames={card.paymentNames}
                rating={card.rating}
                primaryCtaLabel={card.ctaLabel}
                primaryCtaHref={card.ctaHref}
                reviewHref={card.reviewHref}
                reviewLabel="Read review"
                reserveReviewSpace
                theme={card.theme}
                featured={card.featured}
                position={card.position}
                logo={card.logo}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
