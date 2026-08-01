import Link from "next/link";
import { EnNewsHubCard } from "@/components/verticals/news/en/EnNewsHubCard";
import {
  EN_NEWS_CATEGORY_LABELS,
  EN_NEWS_HUB_CATEGORY_NAV,
} from "@/components/verticals/news/en/en-news-config";
import type { EnResolvedNewsCard } from "@/components/verticals/news/en/en-news-data";
import { cn, focusRing } from "@/lib/utils";
import type { NewsCategory } from "@/types/content";

export function EnNewsArchiveSection({
  items,
  category,
}: {
  items: EnResolvedNewsCard[];
  category: NewsCategory | "all";
}) {
  return (
    <section
      id="archive"
      aria-labelledby="en-archive-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-archive-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          News archive
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {category === "all"
            ? "Complete list ordered by publication date, newest first."
            : `Filtered by ${EN_NEWS_CATEGORY_LABELS[category]}.`}
        </p>
      </div>

      <div
        className="mt-4 flex flex-wrap gap-2"
        role="group"
        aria-label="Category filters"
      >
        <Link
          href="/en/news#archive"
          aria-current={category === "all" ? "page" : undefined}
          className={cn(
            "inline-flex min-h-11 items-center rounded-full border px-3.5 text-xs font-semibold sm:text-sm",
            category === "all"
              ? "border-sky-400/45 bg-sky-500/15 text-sky-200"
              : "border-white/12 bg-[#0A1931]/55 text-muted-foreground hover:border-white/25 hover:text-foreground",
            focusRing,
          )}
        >
          All
        </Link>
        {EN_NEWS_HUB_CATEGORY_NAV.map((item) => {
          const active = category === item.id;
          return (
            <Link
              key={item.id}
              href={`/en/news?category=${item.id}#archive`}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-3.5 text-xs font-semibold sm:text-sm",
                active
                  ? "border-sky-400/45 bg-sky-500/15 text-sky-200"
                  : "border-white/12 bg-[#0A1931]/55 text-muted-foreground hover:border-white/25 hover:text-foreground",
                focusRing,
              )}
            >
              {EN_NEWS_CATEGORY_LABELS[item.id]}
            </Link>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {items.length === 0
          ? "No articles in this category yet."
          : `${items.length} article${items.length === 1 ? "" : "s"}.`}
      </p>

      {items.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {items.map((card) => (
            <li key={card.article.id} className="min-w-0">
              <EnNewsHubCard card={card} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
