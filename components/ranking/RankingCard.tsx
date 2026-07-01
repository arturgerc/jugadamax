import type { Casino, Vertical } from "@/types/content";
import { getBonusesForCasino } from "@/lib/content";
import { cn } from "@/lib/utils";
import { RankBadge } from "@/components/ranking/RankBadge";
import { RatingStars } from "@/components/ranking/RatingStars";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";
import { AffiliateCta } from "@/components/trust/AffiliateCta";
import { TrustBadge } from "@/components/trust/TrustBadge";

/**
 * Ranking card for a single operator (FR-009/FR-012).
 *
 * Renders rank, name, editorial rating (only when present), headline bonus,
 * a real trust/license badge (when present), payment badges, and a compliant
 * affiliate CTA. Mobile-first: stacks on small screens, row layout on >=sm.
 */
export function RankingCard({
  casino,
  vertical,
  rank,
  className,
}: {
  casino: Casino;
  vertical: Vertical;
  rank: number;
  className?: string;
}) {
  const headlineBonus = getBonusesForCasino(casino.id).find((b) => b.active)?.title;

  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-lg border border-border/60 bg-card p-4 sm:flex-row sm:items-center",
        className,
      )}
      data-vertical={vertical}
    >
      <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
        <RankBadge rank={rank} />
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-foreground">{casino.name}</h3>
          {casino.rating !== undefined && <RatingStars rating={casino.rating} className="mt-0.5" />}
        </div>
      </div>

      <div className="min-w-0 flex-1 space-y-2">
        {headlineBonus && <p className="text-sm text-foreground">{headlineBonus}</p>}
        {casino.licensing?.licenseName && <TrustBadge label={casino.licensing.licenseName} />}
        <PaymentBadges payments={casino.payments} max={4} />
      </div>

      <div className="sm:shrink-0">
        <AffiliateCta href={casino.affiliateUrl} label="Visitar sitio" className="w-full sm:w-auto" />
      </div>
    </article>
  );
}
