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

function assertOneReviewPerCasino(items: Review[], collection: string): void {
  const seen = new Set<string>();
  for (const review of items) {
    if (seen.has(review.casinoId)) {
      throw new ContentValidationError(
        `${collection}: multiple reviews reference casinoId "${review.casinoId}"`,
      );
    }
    seen.add(review.casinoId);
  }
}

/**
 * Ranking integrity (Constitution Principle III): within a given vertical, no
 * two casinos may claim the same `rankByVertical` position. A collision would
 * make the ranking order non-deterministic and misleading, so fail loudly.
 */
function assertUniqueRanksPerVertical(items: Casino[]): void {
  const seenByVertical = new Map<Vertical, Map<number, string>>();
  for (const casino of items) {
    for (const [vertical, rank] of Object.entries(casino.rankByVertical) as [
      Vertical,
      number | undefined,
    ][]) {
      if (rank === undefined) continue;
      let ranks = seenByVertical.get(vertical);
      if (!ranks) {
        ranks = new Map<number, string>();
        seenByVertical.set(vertical, ranks);
      }
      const existing = ranks.get(rank);
      if (existing) {
        throw new ContentValidationError(
          `casinos: duplicate rank ${rank} for vertical "${vertical}" ("${existing}" and "${casino.id}")`,
        );
      }
      ranks.set(rank, casino.id);
    }
  }
}

// --- Validate collections at load time ---

const authors: Author[] = rawAuthors.map(validateAuthor);
assertUniqueIds(authors, "authors");
assertUniqueSlugs(authors, "authors");

const casinos: Casino[] = rawCasinos.map(validateCasino);
assertUniqueIds(casinos, "casinos");
assertUniqueSlugs(casinos, "casinos");
assertUniqueRanksPerVertical(casinos);

const bonuses: Bonus[] = rawBonuses.map(validateBonus);
assertUniqueIds(bonuses, "bonuses");

const reviews: Review[] = rawReviews.map(validateReview);
assertUniqueIds(reviews, "reviews");
assertUniqueSlugs(reviews, "reviews");
assertOneReviewPerCasino(reviews, "reviews");

const articles: Article[] = [...rawGuides, ...rawNews].map(validateArticle);
assertUniqueIds(articles, "articles");
assertUniqueSlugs(articles, "articles");

// --- Referential integrity ---

const authorIds = new Set(authors.map((a) => a.id));
const casinoIds = new Set(casinos.map((c) => c.id));
const bonusIds = new Set(bonuses.map((b) => b.id));
const bonusesById = new Map(bonuses.map((b) => [b.id, b]));
const reviewsByCasinoId = new Map(reviews.map((r) => [r.casinoId, r]));

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
    const bonus = bonusesById.get(bid);
    if (bonus?.casinoId !== casino.id) {
      throw new ContentValidationError(
        `casino "${casino.id}": bonusId "${bid}" belongs to casinoId "${bonus?.casinoId}"`,
      );
    }
  }
}

for (const bonus of bonuses) {
  const casino = casinos.find((item) => item.id === bonus.casinoId);
  if (!casino?.bonusIds?.includes(bonus.id)) {
    throw new ContentValidationError(
      `bonus "${bonus.id}": owning casino "${bonus.casinoId}" does not reference it in bonusIds`,
    );
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

for (const casino of casinos) {
  if (casino.rating === undefined) continue;
  const review = reviewsByCasinoId.get(casino.id);
  if (!review) {
    throw new ContentValidationError(
      `casino "${casino.id}": rating requires a corresponding authored review`,
    );
  }
  if (casino.rating !== review.rating) {
    throw new ContentValidationError(
      `casino "${casino.id}": rating ${casino.rating} does not match review rating ${review.rating}`,
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

export function getCasinoById(id: string): Casino | undefined {
  return casinos.find((c) => c.id === id);
}

/** Casinos in `vertical`, ordered deterministically by rank. */
export function getCasinosByVertical(vertical: Vertical): Casino[] {
  return sortByVerticalRank(casinos, vertical);
}

export function getBonusesForCasino(casinoId: string): Bonus[] {
  return bonuses.filter((b) => b.casinoId === casinoId);
}

export function getBonusById(id: string): Bonus | undefined {
  return bonusesById.get(id);
}

/** Active bonuses tagged for the Spanish /bonos directory, stable id order. */
export function getBonosDirectoryBonuses(): Bonus[] {
  return bonuses.filter((b) => b.active && b.directoryGroup);
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
