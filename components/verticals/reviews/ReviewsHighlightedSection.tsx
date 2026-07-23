import { ReviewsHubCard } from "@/components/verticals/reviews/ReviewsHubCard";
import { resolveHighlightedReviews } from "@/components/verticals/reviews/review-hub-data";

/**
 * Editorial highlighted reviews — not a ranking, latest list, or popularity claim.
 */
export function ReviewsHighlightedSection() {
  const { primary, secondary } = resolveHighlightedReviews();

  if (primary.length === 0 && secondary.length === 0) return null;

  return (
    <section
      id="reseñas-destacadas"
      aria-labelledby="reseñas-destacadas-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="reseñas-destacadas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Reseñas destacadas para México
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Selección editorial de operadores relevantes para distintos perfiles. No es
          un ranking y las fechas proceden del registro editorial.
        </p>
      </div>

      {primary.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {primary.map((card) => (
            <li key={card.review.id} className="min-w-0">
              <ReviewsHubCard card={card} variant="primary" />
            </li>
          ))}
        </ul>
      ) : null}

      {secondary.length > 0 ? (
        <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          {secondary.map((card) => (
            <li key={card.review.id} className="min-w-0">
              <ReviewsHubCard card={card} variant="secondary" />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
