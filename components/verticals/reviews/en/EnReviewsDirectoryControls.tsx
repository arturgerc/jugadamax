import Link from "next/link";
import {
  EN_REVIEW_HUB_FILTER_OPTIONS,
  EN_REVIEW_HUB_SORT_OPTIONS,
  type EnReviewHubCategory,
  type EnReviewHubSort,
} from "@/components/verticals/reviews/en/en-reviews-config";
import { buildEnReviewsQueryHref } from "@/components/verticals/reviews/en/en-reviews-data";
import { cn, focusRing } from "@/lib/utils";

/**
 * Server-rendered search, category filters, and sorting for the EN reviews directory.
 */
export function EnReviewsDirectoryControls({
  category,
  sort,
  query,
}: {
  category: EnReviewHubCategory;
  sort: EnReviewHubSort;
  query: string;
}) {
  return (
    <div className="space-y-3">
      <form
        method="get"
        action="/en/reviews"
        className="rounded-xl border border-white/10 bg-[#111417]/70 p-3 sm:p-4"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_auto] lg:items-end">
          <div className="min-w-0 md:col-span-2 lg:col-span-1">
            <label
              htmlFor="en-reviews-q"
              className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
            >
              Search
            </label>
            <input
              id="en-reviews-q"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Operator, title or topic..."
              className={cn(
                "min-h-11 w-full rounded-md border border-white/12 bg-[#0A1931]/70 px-3 text-sm text-foreground placeholder:text-muted-foreground/70",
                focusRing,
              )}
            />
          </div>

          <div className="min-w-0">
            <label
              htmlFor="en-reviews-category"
              className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
            >
              Category
            </label>
            <select
              id="en-reviews-category"
              name="category"
              defaultValue={category}
              className={cn(
                "min-h-11 w-full rounded-md border border-white/12 bg-[#0A1931]/70 px-3 text-sm text-foreground",
                focusRing,
              )}
            >
              {EN_REVIEW_HUB_FILTER_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0">
            <label
              htmlFor="en-reviews-sort"
              className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
            >
              Order
            </label>
            <select
              id="en-reviews-sort"
              name="sort"
              defaultValue={sort}
              className={cn(
                "min-h-11 w-full rounded-md border border-white/12 bg-[#0A1931]/70 px-3 text-sm text-foreground",
                focusRing,
              )}
            >
              {EN_REVIEW_HUB_SORT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)] md:col-span-2 lg:col-span-1",
              focusRing,
            )}
          >
            Apply
          </button>
        </div>
      </form>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Quick category filters"
      >
        {EN_REVIEW_HUB_FILTER_OPTIONS.map((option) => {
          const active = category === option.id;
          const href = buildEnReviewsQueryHref({
            q: query,
            category: option.id,
            sort,
            hash: "#directory",
          });
          return (
            <Link
              key={option.id}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-3.5 text-xs font-semibold transition-colors sm:text-sm",
                active
                  ? "border-primary/45 bg-primary/15 text-primary"
                  : "border-white/12 bg-[#0A1931]/55 text-muted-foreground hover:border-white/25 hover:text-foreground",
                focusRing,
              )}
            >
              {option.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
