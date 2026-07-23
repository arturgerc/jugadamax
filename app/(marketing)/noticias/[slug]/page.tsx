import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticleTemplate } from "@/components/verticals/news/NewsArticleTemplate";
import {
  resolveNewsCard,
  resolveRelatedNews,
} from "@/components/verticals/news/news-hub-data";
import { Container } from "@/components/layout/Container";
import {
  getArticleBySlug,
  getArticles,
  getAuthorById,
  getAuthorSameAs,
} from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

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

  const card = resolveNewsCard(article);
  if (!card) notFound();

  const related = resolveRelatedNews(article, 3);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Noticias", path: "/noticias" },
    { name: article.title, path: `/noticias/${article.slug}` },
  ]);

  const jsonLd = articleJsonLd({
    headline: article.title,
    path: `/noticias/${article.slug}`,
    authorName: author.name,
    authorUrl: `/autores/${author.slug}`,
    authorType: author.kind === "organization" ? "Organization" : "Person",
    authorSameAs: getAuthorSameAs(author),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    type: "NewsArticle",
  });

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <NewsArticleTemplate card={card} related={related} />
    </Container>
  );
}
