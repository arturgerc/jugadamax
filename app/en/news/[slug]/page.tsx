import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnNewsArticleTemplate } from "@/components/verticals/news/en/EnNewsArticleTemplate";
import {
  resolveEnNewsCard,
  resolveEnRelatedNews,
} from "@/components/verticals/news/en/en-news-data";
import { Container } from "@/components/layout/Container";
import { getAuthorById, getAuthorSameAs } from "@/lib/content";
import { getGlobalNews, getGlobalNewsBySlug } from "@/lib/content/global";
import { getNewsLanguageAlternates } from "@/lib/i18n/language-alternates";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildEnMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return getGlobalNews().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getGlobalNewsBySlug(slug);
  if (!article) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: true },
    };
  }

  return buildEnMetadata({
    title: article.title,
    description: article.summary,
    path: `/en/news/${article.slug}`,
    type: "article",
    languageAlternates: getNewsLanguageAlternates(article.slug),
  });
}

export default async function EnNewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getGlobalNewsBySlug(slug);
  if (!article) notFound();

  const author = getAuthorById(article.authorId);
  if (!author) notFound();

  const card = resolveEnNewsCard(article);
  if (!card) notFound();

  const related = resolveEnRelatedNews(article, 3);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "News", path: "/en/news" },
    { name: article.title, path: `/en/news/${article.slug}` },
  ]);

  const jsonLd = articleJsonLd({
    headline: article.title,
    path: `/en/news/${article.slug}`,
    authorName:
      author.id === "redaccion-jugadamax" ? "JugadaMax Editorial" : author.name,
    authorUrl: "/en/about",
    authorType: author.kind === "organization" ? "Organization" : "Person",
    authorSameAs: getAuthorSameAs(author),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    type: "NewsArticle",
    inLanguage: "en",
    image: article.coverImage?.src,
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

      <EnNewsArticleTemplate card={card} related={related} />
    </Container>
  );
}
