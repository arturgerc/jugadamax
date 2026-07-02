import Link from "next/link";
import { getArticles } from "@/lib/content";
import { cn, focusRing } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { ArticleCard } from "@/components/content/ArticleCard";

/**
 * Homepage guides preview (FR-006, homepage section 8). Shows the latest guides
 * and links to the full index. Renders nothing when there are no guides.
 */
const PREVIEW_COUNT = 2;

export function GuidesPreview({ className }: { className?: string }) {
  const guides = getArticles("guide").slice(0, PREVIEW_COUNT);
  if (guides.length === 0) return null;

  return (
    <section aria-labelledby="guias-heading" className={cn("py-10", className)}>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-4">
            <h2
              id="guias-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Guías
            </h2>
            <Link
              href="/guias"
              className={cn(
                "inline-flex min-h-11 w-fit items-center justify-center self-start rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60",
                focusRing,
              )}
            >
              Ver todas las guías
            </Link>
          </div>
          {guides.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
