import { EnReviewsHubCard } from "@/components/verticals/reviews/en/EnReviewsHubCard";
import { resolveEnHighlightedReviews } from "@/components/verticals/reviews/en/en-reviews-data";

/**
 * Editorial featured reviews — not a ranking, latest list, or popularity claim.
 */
export function EnFeaturedReviews() {
  const { primary, secondary } = resolveEnHighlightedReviews();

  if (primary.length === 0 && secondary.length === 0) return null;

  return (
    <section
      id="featured-reviews"
      aria-labelledby="en-featured-reviews-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-featured-reviews-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Featured reviews
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          A curated selection of English-language operator reviews for different reader profiles.
          This is not a ranking, and dates come from the editorial review register.
        </p>
      </div>

      {primary.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {primary.map((card) => (
            <li key={card.review.id} className="min-w-0">
              <EnReviewsHubCard card={card} variant="primary" />
            </li>
          ))}
        </ul>
      ) : null}

      {secondary.length > 0 ? (
        <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          {secondary.map((card) => (
            <li key={card.review.id} className="min-w-0">
              <EnReviewsHubCard card={card} variant="secondary" />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
