import type { Author, Casino, Review } from "@/types/content";
import { cn } from "@/lib/utils";
import { RatingStars } from "@/components/ranking/RatingStars";
import { AuthorByline } from "@/components/review/AuthorByline";

/**
 * Review header (FR-005/FR-016).
 *
 * Renders the review title, the operator name, the author-attributed editorial
 * rating (shown visually only — never as aggregated schema), and the author
 * byline with publish/updated dates.
 */
export function ReviewHeader({
  review,
  casino,
  author,
  className,
}: {
  review: Review;
  casino: Casino;
  author: Author;
  className?: string;
}) {
  return (
    <header className={cn("space-y-3", className)}>
      <p className="text-sm font-medium uppercase tracking-wide text-accent">
        Reseña de {casino.name}
      </p>
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {review.title}
      </h1>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <RatingStars rating={review.rating} />
        <span className="text-xs text-muted-foreground">Calificación editorial de JugadaMax</span>
      </div>
      <AuthorByline
        author={author}
        publishedAt={review.publishedAt}
        updatedAt={review.updatedAt}
      />
    </header>
  );
}
