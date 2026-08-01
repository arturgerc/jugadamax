import Link from "next/link";
import { EnReviewsDirectoryControls } from "@/components/verticals/reviews/en/EnReviewsDirectoryControls";
import { EnReviewsHubCard } from "@/components/verticals/reviews/en/EnReviewsHubCard";
import type { EnReviewDirectoryResult } from "@/components/verticals/reviews/en/en-reviews-data";
import { cn, focusRing } from "@/lib/utils";

/**
 * Search/filter/sort controls + English review directory with progressive disclosure.
 */
export function EnReviewDirectory({
  directory,
}: {
  directory: EnReviewDirectoryResult;
}) {
  const {
    items,
    collapsedItems,
    totalMatched,
    collapsedCount,
    isDefaultView,
    category,
    sort,
    query,
  } = directory;

  return (
    <section
      id="directory"
      aria-labelledby="en-directory-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-directory-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Reviews directory
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {isDefaultView
            ? "The default directory shows the remaining reviews without duplicating the featured selection. Search or filter to include featured reviews when they match."
            : "Filtered or sorted results. Featured reviews also appear when they match your search or category."}
        </p>
      </div>

      <div className="mt-4">
        <EnReviewsDirectoryControls
          category={category}
          sort={sort}
          query={query}
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {totalMatched === 0
          ? "No reviews match these criteria."
          : isDefaultView
            ? `Showing ${items.length} review${items.length === 1 ? "" : "s"} from the directory${collapsedCount > 0 ? ` · ${collapsedCount} more below` : ""}.`
            : `Showing ${items.length} of ${totalMatched} review${totalMatched === 1 ? "" : "s"}.`}
      </p>

      {items.length === 0 && collapsedItems.length === 0 ? (
        <p className="mt-4 rounded-xl border border-white/10 bg-[#111417]/60 p-4 text-sm text-muted-foreground">
          Try another category, clear the search, or return to{" "}
          <Link
            href="/en/reviews#directory"
            className={cn(
              "font-medium text-primary underline-offset-2 hover:underline",
              focusRing,
            )}
          >
            All
          </Link>
          .
        </p>
      ) : (
        <>
          {items.length > 0 ? (
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {items.map((card) => (
                <li key={card.review.id} className="min-w-0">
                  <EnReviewsHubCard card={card} />
                </li>
              ))}
            </ul>
          ) : null}

          {collapsedCount > 0 ? (
            <details className="group mt-4 rounded-xl border border-white/10 bg-[#111417]/55 open:border-primary/20">
              <summary
                className={cn(
                  "cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground",
                  "[&::-webkit-details-marker]:hidden",
                  focusRing,
                )}
              >
                <span className="flex min-h-11 items-center justify-between gap-3">
                  {`View ${collapsedCount} more review${collapsedCount === 1 ? "" : "s"}`}
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <ul className="border-t border-white/8 px-3 pb-3 pt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 sm:px-4">
                {collapsedItems.map((card) => (
                  <li key={card.review.id} className="min-w-0">
                    <EnReviewsHubCard card={card} />
                  </li>
                ))}
              </ul>
            </details>
          ) : null}
        </>
      )}
    </section>
  );
}
