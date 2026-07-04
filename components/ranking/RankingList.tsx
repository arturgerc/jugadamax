import type { Casino, Vertical } from "@/types/content";
import type { Market } from "@/types/operator-links";
import type { UiLocale } from "@/lib/i18n/ui-labels";
import { cn } from "@/lib/utils";
import { RankingCard } from "@/components/ranking/RankingCard";

/**
 * Ordered list of ranking cards. Preserves the incoming (rank) order and renders
 * only the entries provided — no fabricated filler when fewer than a "top N"
 * (spec edge case). Empty state degrades gracefully.
 */
export function RankingList({
  casinos,
  vertical,
  className,
  market = "mx",
  locale = "es",
  reviewBasePath = "/reviews",
  emptyMessage = "Pronto añadiremos operadores en esta categoría.",
  reviewLabel = "Leer reseña",
  topRankLabel = "Selección editorial",
  reviewSlugByCasinoId,
}: {
  casinos: Casino[];
  vertical: Vertical;
  className?: string;
  market?: Market;
  locale?: UiLocale;
  reviewBasePath?: string;
  emptyMessage?: string;
  reviewLabel?: string;
  topRankLabel?: string;
  /** Map casino id → review slug when not using the main content loader. */
  reviewSlugByCasinoId?: Record<string, string>;
}) {
  if (casinos.length === 0) {
    return <p className="text-sm text-muted-foreground">{emptyMessage}</p>;
  }

  return (
    <ol className={cn("space-y-3", className)}>
      {casinos.map((casino, index) => {
        const slug = reviewSlugByCasinoId?.[casino.id];
        const reviewHref = slug ? `${reviewBasePath}/${slug}` : undefined;

        return (
          <li key={casino.id}>
            <RankingCard
              casino={casino}
              vertical={vertical}
              rank={casino.rankByVertical[vertical] ?? index + 1}
              market={market}
              locale={locale}
              reviewHref={reviewHref}
              reviewLabel={reviewLabel}
              topRankLabel={topRankLabel}
            />
          </li>
        );
      })}
    </ol>
  );
}
