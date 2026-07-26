import { EnBonusFeaturedCard } from "@/components/verticals/bonuses/en/EnBonusFeaturedCard";
import { resolveEnFeaturedBonuses } from "@/components/verticals/bonuses/en/en-bonus-data";
import {
  BONUS_SURFACES,
  sectionHeadingClassName,
} from "@/components/verticals/bonuses/bonus-visual";

/**
 * Exactly three primary featured promotions for /en/bonuses.
 */
export function EnBonusFeaturedSection() {
  const rows = resolveEnFeaturedBonuses();
  if (rows.length === 0) return null;

  return (
    <section
      id="featured-promotions"
      aria-labelledby="featured-promotions-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className={BONUS_SURFACES.commercialShell}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,184,0,0.1),transparent_55%)]"
        />
        <div className="relative p-3.5 sm:p-5 lg:p-6">
          <div className="max-w-3xl space-y-1.5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary/90">
              Commercial zone
            </p>
            <h2 id="featured-promotions-heading" className={sectionHeadingClassName()}>
              Featured promotions
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Three priority offers for a quick comparison: Betsson Mexico and two English-only
              multi-currency casino promotions. The order is editorial and may differ from review
              scores.
            </p>
          </div>

          <ul className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {rows.map((row, index) => (
              <li key={row.entry.id} className="min-w-0 xl:min-w-0">
                <EnBonusFeaturedCard
                  row={row}
                  position={index + 1}
                  featured={index === 0}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
