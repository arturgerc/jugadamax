import Link from "next/link";
import { EN_REVIEW_HUB_CATEGORIES } from "@/components/verticals/reviews/en/en-reviews-config";
import { countEnReviewsByCategory } from "@/components/verticals/reviews/en/en-reviews-data";
import { cn, focusRing } from "@/lib/utils";

/**
 * Four category cards for English Reviews Hub exploration.
 */
export function EnReviewCategories() {
  return (
    <section
      id="categories"
      aria-labelledby="en-categories-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-categories-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Explore by category
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Filter the directory by operator type. One operator may appear in more than one category.
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {EN_REVIEW_HUB_CATEGORIES.map((category) => {
          const count = countEnReviewsByCategory(category.id);
          return (
            <li key={category.id}>
              <Link
                href={category.href}
                className={cn(
                  "flex h-full min-h-11 flex-col rounded-xl border p-4 transition-[border-color,background-color] hover:border-white/25",
                  category.shell,
                  focusRing,
                )}
              >
                <span
                  className={cn(
                    "inline-flex w-fit rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    category.accent,
                  )}
                >
                  {count} review{count === 1 ? "" : "s"}
                </span>
                <span className="mt-2 text-base font-bold text-foreground">
                  {category.label}
                </span>
                <span className="mt-1 text-sm leading-snug text-muted-foreground">
                  {category.description}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
