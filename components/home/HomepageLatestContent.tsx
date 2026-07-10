import Link from "next/link";
import { getArticles, getReviews } from "@/lib/content";
import { filterReviewsForSurface } from "@/content/operators/status";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

type ContentKind = "guide" | "news" | "review";

type LatestItem = {
  kind: ContentKind;
  title: string;
  excerpt: string;
  href: string;
  date: string;
};

const MAX_CARDS = 4;

const KIND_LABELS: Record<ContentKind, string> = {
  guide: "Guía",
  news: "Noticia",
  review: "Reseña",
};

const KIND_STYLES: Record<
  ContentKind,
  { badge: string; card: string; cta: string }
> = {
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

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

function reviewSortDate(review: { publishedAt: string; updatedAt?: string }): number {
  return Date.parse(review.updatedAt ?? review.publishedAt);
}

function buildLatestItems(): LatestItem[] {
  const items: LatestItem[] = [];

  for (const guide of getArticles("guide").slice(0, 2)) {
    items.push({
      kind: "guide",
      title: guide.title,
      excerpt: guide.summary,
      href: `/guias/${guide.slug}`,
      date: guide.updatedAt ?? guide.publishedAt,
    });
  }

  if (items.length < MAX_CARDS) {
    const newsLimit = Math.min(2, MAX_CARDS - items.length);
    for (const article of getArticles("news").slice(0, newsLimit)) {
      items.push({
        kind: "news",
        title: article.title,
        excerpt: article.summary,
        href: `/noticias/${article.slug}`,
        date: article.updatedAt ?? article.publishedAt,
      });
    }
  }

  if (items.length < MAX_CARDS) {
    const reviewLimit = Math.min(2, MAX_CARDS - items.length);
    const reviews = filterReviewsForSurface(getReviews(), "reviews")
      .slice()
      .sort((a, b) => reviewSortDate(b) - reviewSortDate(a))
      .slice(0, reviewLimit);

    for (const review of reviews) {
      items.push({
        kind: "review",
        title: review.title,
        excerpt: review.verdict,
        href: `/reviews/${review.slug}`,
        date: review.updatedAt ?? review.publishedAt,
      });
    }
  }

  return items;
}

/**
 * Mixed latest guides, news and reviews hub (P14C).
 */
export function HomepageLatestContent() {
  const items = buildLatestItems();
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="ultimas-guias-heading" className="py-8">
      <Container>
        <div className="max-w-2xl space-y-1">
          <h2
            id="ultimas-guias-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Últimas guías y actualizaciones
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Contenido nuevo para comparar operadores y entender bonos, pagos y riesgos.
          </p>
        </div>

        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const styles = KIND_STYLES[item.kind];

            return (
              <li key={item.href} className="min-w-0">
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
                    <time
                      dateTime={item.date}
                      className="text-[0.65rem] text-muted-foreground"
                    >
                      {formatDate(item.date)}
                    </time>
                  </div>

                  <h3 className="mt-3 text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>

                  <Link
                    href={item.href}
                    className={cn(
                      "mt-4 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-2",
                      styles.cta,
                      focusRing,
                    )}
                  >
                    Leer más
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
