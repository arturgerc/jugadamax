import { BettingOperatorCard } from "@/components/verticals/betting/BettingOperatorCard";
import { BETTING_SECONDARY } from "@/components/verticals/betting/betting-page-config";
import { resolveBettingCards } from "@/components/verticals/betting/betting-data";

/**
 * Additional active operators — compact three-card row.
 */
export function BettingSecondarySelection() {
  const cards = resolveBettingCards(BETTING_SECONDARY);
  if (cards.length === 0) return null;

  return (
    <section
      id="operadores-adicionales"
      aria-labelledby="operadores-adicionales-heading"
      className="mb-5 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="operadores-adicionales-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Operadores activos adicionales
        </h2>
        <p className="line-clamp-2 text-sm text-muted-foreground sm:line-clamp-none sm:text-base">
          Alternativas internacionales mixtas para ampliar la comparación. Revisa siempre GEO, KYC
          y si la promoción aplica a apuestas o casino.
        </p>
      </div>

      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {cards.map((card) => (
          <li key={card.operatorId} className="min-w-0">
            <BettingOperatorCard
              operatorId={card.operatorId}
              name={card.name}
              badge={card.badge}
              purpose={card.purpose}
              summary={card.summary}
              paymentNames={card.paymentNames}
              offerTitle={card.offerTitle}
              offerProductLabel={card.offerProductLabel}
              promoCode={card.promoCode}
              rating={card.rating}
              primaryCtaLabel={card.ctaLabel}
              primaryCtaHref={card.ctaHref}
              reviewHref={card.reviewHref}
              theme={card.theme}
              position={card.position}
              logo={card.logo}
              compact
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
