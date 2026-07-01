import Link from "next/link";
import { getArticles } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { ArticleList } from "@/components/content/ArticleList";

/**
 * Homepage news preview (FR-006, homepage section 9). Shows the latest news and
 * links to the full index. Renders nothing when there is no news.
 */
const PREVIEW_COUNT = 2;

export function NewsPreview({ className }: { className?: string }) {
  const items = getArticles("news").slice(0, PREVIEW_COUNT);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="noticias-heading" className={cn("py-10", className)}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2
            id="noticias-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Noticias
          </h2>
          <Link
            href="/noticias"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Ver todas las noticias
          </Link>
        </div>
        <ArticleList articles={items} className="mt-6" />
      </Container>
    </section>
  );
}
