import { HomepageContainer } from "@/components/home/HomepageContainer";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getGlobalGuides, getGlobalReviews } from "@/lib/content/global";
import { cn } from "@/lib/utils";

type ContentKind = "guide" | "news" | "review";

type LatestItem = {
  kind: ContentKind;
  title: string;
  excerpt: string;
  href: string;
  date: string;
  sortMs: number;
};

const MAX_CARDS = 3;

const KIND_LABELS: Record<ContentKind, string> = {
  guide: "Guide",
  news: "News",
  review: "Review",
};

const KIND_CTA: Record<ContentKind, string> = {
  guide: "Read guide",
  news: "Read news",
  review: "Read review",
};

const KIND_STYLES: Record<ContentKind, { badge: string; card: string; cta: string }> = {
  guide: {
    badge: "border-amber-400/30 bg-amber-500/10 text-amber-200",
    card: "border-amber-500/20 bg-gradient-to-br from-[#1a1408]/50 via-card/80 to-[#0A1931]/80 hover:border-amber-400/35",
    cta: "text-amber-200 hover:text-primary",
  },
  news: {
    badge: "border-sky-400/30 bg-sky-500/10 text-sky-200",
    card: "border-sky-500/20 bg-gradient-to-br from-[#0A1931]/80 via-[#111417]/80 to-[#0A1931]/80 hover:border-sky-400/35",
    cta: "text-sky-200 hover:text-sky-100",
  },
  review: {
    badge: "border-violet-400/30 bg-violet-500/10 text-violet-200",
    card: "border-violet-500/20 bg-gradient-to-br from-[#1a1038]/50 via-card/80 to-[#0A1931]/80 hover:border-violet-400/35",
    cta: "text-violet-200 hover:text-violet-100",
  },
};

function safeSortMs(iso: string): number {
  const ms = Date.parse(iso);
  return Number.isFinite(ms) ? ms : 0;
}

function formatDate(iso: string): string {
  const ms = safeSortMs(iso);
  if (!ms) return "Date unavailable";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(ms));
}

function buildLatestItems(): LatestItem[] {
  const items: LatestItem[] = [];

  for (const guide of getGlobalGuides()) {
    const date = guide.updatedAt ?? guide.publishedAt;
    items.push({
      kind: "guide",
      title: guide.title,
      excerpt: guide.summary,
      href: `/en/guides/${guide.slug}`,
      date,
      sortMs: safeSortMs(date),
    });
  }

  // English news articles are not yet loaded from a global collection.
  // When added, include them here without placeholders.

  for (const review of getGlobalReviews()) {
    const date = review.updatedAt ?? review.publishedAt;
    items.push({
      kind: "review",
      title: review.title,
      excerpt: review.verdict,
      href: `/en/reviews/${review.slug}`,
      date,
      sortMs: safeSortMs(date),
    });
  }

  items.sort((a, b) => {
    if (b.sortMs !== a.sortMs) return b.sortMs - a.sortMs;
    return a.title.localeCompare(b.title, "en");
  });

  return items.slice(0, MAX_CARDS);
}

/**
 * Latest English editorial content — full English content feed (not the recommended shortlist).
 * Omits the section when no real English items exist.
 */
export function EnHomepageLatestContent() {
  const items = buildLatestItems();
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="en-latest-heading" className="py-6 sm:py-8">
      <HomepageContainer>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl space-y-1">
            <h2
              id="en-latest-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Latest English editorial
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Guides and reviews published for global readers. Availability and terms always depend
              on jurisdiction.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <TrackedLink
              href="/en/guides"
              event="homepage_latest_click"
              section="latest-content"
              position="guides-hub"
              contentKind="guide"
              destination="/en/guides"
              className="inline-flex min-h-11 items-center rounded-md border border-border/60 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              View guides
            </TrackedLink>
            <TrackedLink
              href="/en/reviews"
              event="homepage_latest_click"
              section="latest-content"
              position="reviews-hub"
              contentKind="review"
              destination="/en/reviews"
              className="inline-flex min-h-11 items-center rounded-md border border-border/60 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              View reviews
            </TrackedLink>
          </div>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-3 lg:mt-5 lg:grid-cols-3 lg:gap-4">
          {items.map((item, index) => {
            const styles = KIND_STYLES[item.kind];

            return (
              <li key={`${item.kind}-${item.href}`} className="min-w-0">
                <article
                  className={cn(
                    "flex h-full min-w-0 flex-col rounded-xl border p-4 transition-colors sm:p-5",
                    styles.card,
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                        styles.badge,
                      )}
                    >
                      {KIND_LABELS[item.kind]}
                    </span>
                    <time dateTime={item.date} className="text-[0.65rem] text-muted-foreground">
                      {formatDate(item.date)}
                    </time>
                  </div>

                  <h3 className="mt-2.5 text-base font-semibold leading-snug text-foreground sm:mt-3">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:line-clamp-3">
                    {item.excerpt}
                  </p>

                  <TrackedLink
                    href={item.href}
                    event="homepage_latest_click"
                    section="latest-content"
                    position={index + 1}
                    contentKind={item.kind}
                    destination={item.href}
                    className={cn(
                      "mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-2 sm:mt-4",
                      styles.cta,
                    )}
                  >
                    {KIND_CTA[item.kind]}
                  </TrackedLink>
                </article>
              </li>
            );
          })}
        </ul>
      </HomepageContainer>
    </section>
  );
}
