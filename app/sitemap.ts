import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getArticles, getReviews } from "@/lib/content";
import { getGlobalReviews } from "@/lib/content/global";
import { filterReviewsForSurface } from "@/content/operators/status";

/**
 * Dynamic sitemap (FR-023).
 *
 * Emits every public static page plus each review, guide, and news article from
 * the content loaders, staying in sync with content automatically. Content
 * entries carry `lastModified` from the record's `updatedAt` (falling back to
 * `publishedAt`).
 */
const STATIC_PATHS = [
  "/",
  "/casinos-crypto",
  "/casinos-fiat",
  "/bonos",
  "/apuestas",
  "/guias",
  "/noticias",
  "/reviews",
  "/como-evaluamos",
  "/divulgacion-afiliados",
  "/juego-responsable",
  "/acerca-de",
  "/contacto",
  "/politica-de-privacidad",
  "/terminos-y-condiciones",
  "/partners",
  "/en",
  "/en/casinos-crypto",
  "/en/casinos-fiat",
  "/en/reviews",
  "/en/guides",
  "/en/contact",
  "/en/partners",
  "/en/guides/best-crypto-casinos",
  "/en/affiliate-disclosure",
  "/en/responsible-gambling",
  "/en/how-we-review",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => new URL(path, siteConfig.url).toString();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: abs(path),
  }));

  const reviewEntries: MetadataRoute.Sitemap = filterReviewsForSurface(
    getReviews(),
    "sitemap",
  ).map((review) => ({
    url: abs(`/reviews/${review.slug}`),
    lastModified: new Date(review.updatedAt ?? review.publishedAt),
  }));

  const guideEntries: MetadataRoute.Sitemap = getArticles("guide").map((article) => ({
    url: abs(`/guias/${article.slug}`),
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
  }));

  const newsEntries: MetadataRoute.Sitemap = getArticles("news").map((article) => ({
    url: abs(`/noticias/${article.slug}`),
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
  }));

  const enReviewEntries: MetadataRoute.Sitemap = getGlobalReviews().map((review) => ({
    url: abs(`/en/reviews/${review.slug}`),
    lastModified: new Date(review.updatedAt ?? review.publishedAt),
  }));

  return [...staticEntries, ...reviewEntries, ...guideEntries, ...newsEntries, ...enReviewEntries];
}
