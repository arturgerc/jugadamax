import Link from "next/link";
import type { Article } from "@/types/content";
import { getAuthorById } from "@/lib/content";
import { cn } from "@/lib/utils";
import { AuthorByline } from "@/components/review/AuthorByline";

/** Route for an article based on its type (guides vs news). */
export function articleHref(article: Pick<Article, "type" | "slug">): string {
  return article.type === "news" ? `/noticias/${article.slug}` : `/guias/${article.slug}`;
}

/**
 * Article summary card (FR-006). Shows title, summary, author byline and date,
 * and links to the article route. Author-attributed only (no fabricated bylines).
 */
export function ArticleCard({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  const author = getAuthorById(article.authorId);
  const href = articleHref(article);

  return (
    <article className={cn("flex flex-col rounded-lg border border-border/60 bg-card p-5", className)}>
      <h3 className="text-lg font-semibold text-foreground">
        <Link href={href} className="transition-colors hover:text-primary">
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{article.summary}</p>
      {author ? (
        <AuthorByline
          author={author}
          publishedAt={article.publishedAt}
          updatedAt={article.updatedAt}
          className="mt-3"
        />
      ) : null}
      <Link
        href={href}
        className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-2"
      >
        Leer más
      </Link>
    </article>
  );
}
