import type { Article } from "@/types/content";
import { cn } from "@/lib/utils";
import { ArticleCard } from "@/components/content/ArticleCard";

/**
 * Grid list of article cards. Renders only the provided entries (no filler) and
 * degrades gracefully when empty. Mobile-first: 1 column, 2 columns on >=sm.
 */
export function ArticleList({
  articles,
  className,
}: {
  articles: Article[];
  className?: string;
}) {
  if (articles.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Pronto publicaremos contenido en esta sección.
      </p>
    );
  }

  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
