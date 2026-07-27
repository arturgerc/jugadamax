import { BettingOperatorCard } from "@/components/verticals/betting/BettingOperatorCard";
import { EN_BETTING_PRIMARY } from "@/components/verticals/betting/en/en-betting-page-config";
import { resolveEnBettingCards } from "@/components/verticals/betting/en/en-betting-data";
import { cn } from "@/lib/utils";

/**
 * Main editorial selection — exactly three commercial sportsbook operators.
 */
export function EnBettingPrimarySelection() {
  const cards = resolveEnBettingCards(EN_BETTING_PRIMARY);
  if (cards.length === 0) return null;

  return (
    <section
      id="main-selection"
      aria-labelledby="en-main-selection-heading"
      className="mb-5 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1 sm:space-y-1.5">
        <h2
          id="en-main-selection-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Editorial sportsbook selection
        </h2>
        <p className="line-clamp-2 text-sm text-muted-foreground sm:line-clamp-none sm:text-base">
          Three active operators for comparing sportsbook, payments, sports promotions and
          conditions. Order combines editorial interest, active campaigns and assessment; it may
          differ from individual scores.
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
            We prioritise operators with an allowed affiliate CTA on English surfaces, a published
            English review and comparative value. This is not a universal ranking or a guarantee of
            odds, availability or outcomes.
          </p>
        </details>
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
              featured={card.featured}
              position={card.position}
              logo={card.logo}
              reviewCtaLabel="Read review"
              promoCodeLabel="Code:"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
