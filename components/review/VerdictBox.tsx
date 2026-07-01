import { cn } from "@/lib/utils";
import { RatingStars } from "@/components/ranking/RatingStars";

/**
 * Verdict summary box (FR-005).
 *
 * Highlights the editorial verdict and the author-attributed rating. The rating
 * is presented as an editorial opinion (shown visually), never encoded as
 * AggregateRating or review-star schema (Constitution Principle V).
 */
export function VerdictBox({
  verdict,
  rating,
  className,
}: {
  verdict: string;
  rating: number;
  className?: string;
}) {
  return (
    <section
      aria-label="Veredicto editorial"
      className={cn("rounded-lg border border-border/60 bg-card p-4 sm:p-5", className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-foreground">Nuestro veredicto</h2>
        <RatingStars rating={rating} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{verdict}</p>
    </section>
  );
}
