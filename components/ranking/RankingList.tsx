import type { Casino, Vertical } from "@/types/content";
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
}: {
  casinos: Casino[];
  vertical: Vertical;
  className?: string;
}) {
  if (casinos.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Pronto añadiremos operadores en esta categoría.
      </p>
    );
  }

  return (
    <ol className={cn("space-y-3", className)}>
      {casinos.map((casino, index) => (
        <li key={casino.id}>
          <RankingCard
            casino={casino}
            vertical={vertical}
            rank={casino.rankByVertical[vertical] ?? index + 1}
          />
        </li>
      ))}
    </ol>
  );
}
