import { EnFiatTopCasinoCard } from "@/components/verticals/fiat/en/EnFiatTopCasinoCard";
import {
  EN_FIAT_TOP_SIX,
  resolveEnFiatCtaHref,
} from "@/components/verticals/fiat/en/en-fiat-page-config";
import {
  getEnFiatEditorialRating,
  getEnFiatOfferTitle,
  getEnFiatPaymentNames,
  getEnFiatReviewHref,
  resolveEnFiatCasino,
} from "@/components/verticals/fiat/en/en-fiat-data";
import { cn } from "@/lib/utils";

/**
 * Main TOP-6 fiat recommendations for /en/casinos-fiat.
 * Order: Betsson Mexico → 1xBet → XON.BET → Slotoro → Mostbet → Melbet.
 */
export function EnFiatTopRanking() {
  const cards = EN_FIAT_TOP_SIX.flatMap((entry) => {
    const casino = resolveEnFiatCasino(entry.operatorId);
    const reviewHref = getEnFiatReviewHref(entry.operatorId);
    const ctaHref = resolveEnFiatCtaHref(entry.operatorId);
    if (!casino || !reviewHref || !ctaHref) return [];
    return [
      {
        ...entry,
        logo: casino.logo,
        rating: getEnFiatEditorialRating(entry.operatorId),
        paymentNames: getEnFiatPaymentNames(entry.operatorId, entry.paymentPriority),
        offerTitle: getEnFiatOfferTitle(entry),
        reviewHref,
        ctaHref,
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="top-fiat"
      aria-labelledby="en-top-fiat-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1.5">
        <h2
          id="en-top-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Fiat casinos recommended by JugadaMax
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Editorial selection of operators with traditional payment routes, online casino products
          and mixed sportsbook options. Order combines product fit, payments, campaigns and editorial
          judgement — it may differ from individual scores.
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
            Order combines user interest, payment methods, product breadth, campaign availability and
            editorial evaluation. Betsson Mexico leads as the featured Mexico-facing fiat option;
            international multi-currency brands follow. It is not a universal ranking and can update
            when conditions change. Availability always depends on jurisdiction and live operator terms.
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
              <EnFiatTopCasinoCard
                operatorId={card.operatorId}
                name={card.name}
                badge={card.badge}
                purpose={card.purpose}
                summary={card.summary}
                paymentNames={card.paymentNames}
                offerTitle={card.offerTitle}
                promoCode={card.promoCode}
                rating={card.rating}
                primaryCtaLabel={card.ctaLabel}
                primaryCtaHref={card.ctaHref}
                reviewHref={card.reviewHref}
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
              <EnFiatTopCasinoCard
                operatorId={card.operatorId}
                name={card.name}
                badge={card.badge}
                purpose={card.purpose}
                summary={card.summary}
                paymentNames={card.paymentNames}
                offerTitle={card.offerTitle}
                promoCode={card.promoCode}
                rating={card.rating}
                primaryCtaLabel={card.ctaLabel}
                primaryCtaHref={card.ctaHref}
                reviewHref={card.reviewHref}
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
