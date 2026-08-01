import Link from "next/link";
import {
  EN_NEWS_CATEGORY_ACCENTS,
  EN_NEWS_CATEGORY_LABELS,
  EN_NEWS_HUB_CATEGORY_NAV,
} from "@/components/verticals/news/en/en-news-config";
import { resolveEnNewsByCategory } from "@/components/verticals/news/en/en-news-data";
import { cn, focusRing } from "@/lib/utils";

export function EnNewsCategoryNav() {
  return (
    <section
      id="categories"
      aria-labelledby="en-news-categories-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-news-categories-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Explore by category
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Filter the editorial archive by topic. Categories describe the subject, not a ranking.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {EN_NEWS_HUB_CATEGORY_NAV.map((item) => {
          const count = resolveEnNewsByCategory(item.id).length;
          return (
            <li key={item.id}>
              <Link
                href={`/en/news?category=${item.id}#archive`}
                className={cn(
                  "flex h-full min-h-11 flex-col rounded-xl border border-white/10 bg-[#111417]/60 p-4 transition-colors hover:border-sky-400/30",
                  focusRing,
                )}
              >
                <span
                  className={cn(
                    "inline-flex w-fit rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    EN_NEWS_CATEGORY_ACCENTS[item.id],
                  )}
                >
                  {count} {count === 1 ? "article" : "articles"}
                </span>
                <span className="mt-2 text-base font-bold text-foreground">
                  {EN_NEWS_CATEGORY_LABELS[item.id]}
                </span>
                <span className="mt-1 text-sm leading-snug text-muted-foreground">
                  {item.description}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
