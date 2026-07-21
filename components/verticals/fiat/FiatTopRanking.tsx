import { FiatTopCasinoCard } from "@/components/verticals/fiat/FiatTopCasinoCard";
import { FIAT_TOP_FIVE } from "@/components/verticals/fiat/fiat-page-config";
import {
  getFiatEditorialRating,
  getFiatOfferTitle,
  getFiatPaymentNames,
  getFiatReviewHref,
} from "@/components/verticals/fiat/fiat-data";
import { getCasinoById } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Main TOP-5 fiat recommendations for /casinos-fiat.
 */
export function FiatTopRanking() {
  const cards = FIAT_TOP_FIVE.flatMap((entry) => {
    const casino = getCasinoById(entry.operatorId);
    const reviewHref = getFiatReviewHref(entry.operatorId);
    if (!casino || !reviewHref) return [];
    return [
      {
        ...entry,
        logo: casino.logo,
        rating: getFiatEditorialRating(entry.operatorId),
        paymentNames: getFiatPaymentNames(entry.operatorId, entry.paymentPriority),
        offerTitle: getFiatOfferTitle(entry),
        reviewHref,
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="top-fiat"
      aria-labelledby="top-fiat-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1.5">
        <h2
          id="top-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Casinos fiat recomendados por JugadaMax
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Selección editorial de operadores con pagos tradicionales, casino online y productos
          mixtos. El orden combina interés de los usuarios, campañas activas, producto, pagos y
          evaluación editorial; puede diferir de las puntuaciones individuales.
        </p>
        <details className="group rounded-md border border-white/8 bg-[#0A1931]/40 open:border-primary/20">
          <summary
            className={cn(
              "cursor-pointer list-none px-2.5 py-1.5 text-xs font-medium text-foreground sm:px-3 sm:py-2 sm:text-sm",
              "[&::-webkit-details-marker]:hidden",
            )}
          >
            <span className="flex items-center justify-between gap-2">
              ¿Cómo se ordena esta selección?
              <span
                aria-hidden="true"
                className="text-primary transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="border-t border-white/6 px-2.5 pb-2.5 pt-1.5 text-xs leading-relaxed text-muted-foreground sm:px-3 sm:pb-3 sm:pt-2 sm:text-sm">
            El orden combina interés de los usuarios, métodos de pago, producto, disponibilidad de
            campañas y evaluación editorial. No representa una clasificación universal y puede
            actualizarse cuando cambian las condiciones.
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
              <FiatTopCasinoCard
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
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-2">
          {cards.slice(3).map((card) => (
            <li key={card.operatorId} className="min-w-0">
              <FiatTopCasinoCard
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
