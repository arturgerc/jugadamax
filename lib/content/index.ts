/**
 * Content loaders for the file-based content collections.
 *
 * All records are validated at module load (build time). Referential integrity
 * is enforced here: unresolved casino/author/bonus references FAIL loudly so a
 * broken page can never ship (contracts/content-model.md).
 */

import type {
  Article,
  ArticleType,
  Author,
  Bonus,
  Casino,
  Review,
  Vertical,
} from "@/types/content";
import { authors as rawAuthors } from "@/content/authors";
import { casinos as rawCasinos } from "@/content/casinos";
import { bonuses as rawBonuses } from "@/content/bonuses";
import { reviews as rawReviews } from "@/content/reviews";
import { guides as rawGuides } from "@/content/guides";
import { news as rawNews } from "@/content/news";
import {
  ContentValidationError,
  validateArticle,
  validateAuthor,
  validateBonus,
  validateCasino,
  validateReview,
} from "@/lib/content/schema";
import { sortByVerticalRank } from "@/lib/ranking";

function assertUniqueIds(items: { id: string }[], collection: string): void {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.id)) {
      throw new ContentValidationError(`${collection}: duplicate id "${item.id}"`);
    }
    seen.add(item.id);
  }
}

function assertUniqueSlugs(items: { slug: string }[], collection: string): void {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.slug)) {
      throw new ContentValidationError(`${collection}: duplicate slug "${item.slug}"`);
    }
    seen.add(item.slug);
  }
}

// --- Validate collections at load time ---

const authors: Author[] = rawAuthors.map(validateAuthor);
assertUniqueIds(authors, "authors");

const casinos: Casino[] = rawCasinos.map(validateCasino);
assertUniqueIds(casinos, "casinos");
assertUniqueSlugs(casinos, "casinos");

const bonuses: Bonus[] = rawBonuses.map(validateBonus);
assertUniqueIds(bonuses, "bonuses");

const reviews: Review[] = rawReviews.map(validateReview);
assertUniqueIds(reviews, "reviews");

const articles: Article[] = [...rawGuides, ...rawNews].map(validateArticle);
assertUniqueIds(articles, "articles");

// --- Referential integrity ---

const authorIds = new Set(authors.map((a) => a.id));
const casinoIds = new Set(casinos.map((c) => c.id));
const bonusIds = new Set(bonuses.map((b) => b.id));

for (const bonus of bonuses) {
  if (!casinoIds.has(bonus.casinoId)) {
    throw new ContentValidationError(
      `bonus "${bonus.id}": casinoId "${bonus.casinoId}" does not resolve`,
    );
  }
}

for (const casino of casinos) {
  for (const bid of casino.bonusIds ?? []) {
    if (!bonusIds.has(bid)) {
      throw new ContentValidationError(
        `casino "${casino.id}": bonusId "${bid}" does not resolve`,
      );
    }
  }
}

for (const review of reviews) {
  if (!casinoIds.has(review.casinoId)) {
    throw new ContentValidationError(
      `review "${review.id}": casinoId "${review.casinoId}" does not resolve`,
    );
  }
  if (!authorIds.has(review.authorId)) {
    throw new ContentValidationError(
      `review "${review.id}": authorId "${review.authorId}" does not resolve`,
    );
  }
}

for (const article of articles) {
  if (!authorIds.has(article.authorId)) {
    throw new ContentValidationError(
      `article "${article.id}": authorId "${article.authorId}" does not resolve`,
    );
  }
}

// --- Public loader API (contracts/content-model.md) ---

export function getCasinos(): Casino[] {
  return casinos;
}

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}

/** Casinos in `vertical`, ordered deterministically by rank. */
export function getCasinosByVertical(vertical: Vertical): Casino[] {
  return sortByVerticalRank(casinos, vertical);
}

export function getBonusesForCasino(casinoId: string): Bonus[] {
  return bonuses.filter((b) => b.casinoId === casinoId);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}

export function getReviews(): Review[] {
  return reviews;
}

export function getReviewBySlug(slug: string): Review | undefined {
  return reviews.find((r) => r.slug === slug);
}

/** The editorial review for a given casino, if one has been published. */
export function getReviewForCasino(casinoId: string): Review | undefined {
  return reviews.find((r) => r.casinoId === casinoId);
}

/** Articles, optionally filtered by type, newest first. */
export function getArticles(type?: ArticleType): Article[] {
  const list = type ? articles.filter((a) => a.type === type) : articles;
  return list
    .slice()
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getArticleBySlug(type: ArticleType, slug: string): Article | undefined {
  return articles.find((a) => a.type === type && a.slug === slug);
}
