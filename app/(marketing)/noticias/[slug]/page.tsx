import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles, getAuthorById } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AuthorByline } from "@/components/review/AuthorByline";

export function generateStaticParams() {
  return getArticles("news").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug("news", slug);
  if (!article) {
    return {
      title: "Página no encontrada",
      robots: { index: false, follow: true },
    };
  }

  return buildMetadata({
    title: article.title,
    description: article.summary,
    path: `/noticias/${article.slug}`,
    type: "article",
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug("news", slug);
  if (!article) notFound();

  const author = getAuthorById(article.authorId);
  if (!author) notFound();

  const paragraphs = article.body.split("\n\n").filter(Boolean);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Noticias", path: "/noticias" },
    { name: article.title, path: `/noticias/${article.slug}` },
  ]);

  const jsonLd = articleJsonLd({
    headline: article.title,
    path: `/noticias/${article.slug}`,
    authorName: author.name,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    type: "NewsArticle",
  });

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">Noticia</p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {article.title}
          </h1>
          <p className="text-muted-foreground">{article.summary}</p>
          <AuthorByline
            author={author}
            publishedAt={article.publishedAt}
            updatedAt={article.updatedAt}
          />
        </header>

        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <p className="border-t border-border/60 pt-6 text-xs text-muted-foreground">
          Solo para mayores de 18 años. Juega de forma responsable.
        </p>
      </article>
    </Container>
  );
}
