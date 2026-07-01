import { cn } from "@/lib/utils";

/**
 * Editorial rating display. Renders ONLY when a rating is present (author-
 * attributed editorial score, 0–5). Never fabricates or aggregates a rating
 * (Constitution Principle V) — if no rating exists, renders nothing.
 */
export function RatingStars({
  rating,
  className,
}: {
  rating?: number;
  className?: string;
}) {
  if (rating === undefined || rating === null) return null;

  const value = Math.round(Math.max(0, Math.min(5, rating)) * 10) / 10;

  return (
    <span
      aria-label={`Calificación editorial ${value.toFixed(1)} de 5`}
      className={cn("inline-flex items-center gap-1 text-sm", className)}
    >
      <span aria-hidden="true" className="text-primary">
        ★
      </span>
      <span className="font-semibold text-foreground">{value.toFixed(1)}</span>
      <span className="text-muted-foreground">/5</span>
    </span>
  );
}
