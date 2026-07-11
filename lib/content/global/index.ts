/**
 * Content loaders for English/global pages under /en.
 */

import type { Article, Casino, Review, Vertical } from "@/types/content";
import { authors as rawAuthors } from "@/content/authors";
import { globalCasinos as rawGlobalCasinos } from "@/content/casinos/global";
import { globalReviews as rawGlobalReviews } from "@/content/reviews/global";
import { globalGuides as rawGlobalGuides } from "@/content/guides/global";
import {
  ContentValidationError,
  validateArticle,
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

function assertUniqueRanksPerVertical(items: Casino[], collection: string): void {
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
          `${collection}: duplicate rank ${rank} for vertical "${vertical}" ("${existing}" and "${casino.id}")`,
        );
      }
      ranks.set(rank, casino.id);
    }
  }
}

const globalCasinos: Casino[] = rawGlobalCasinos.map(validateCasino);
const globalReviews: Review[] = rawGlobalReviews.map(validateReview);
const globalGuides: Article[] = rawGlobalGuides.map(validateArticle);

assertUniqueIds(globalCasinos, "global casinos");
assertUniqueSlugs(globalCasinos, "global casinos");
assertUniqueRanksPerVertical(globalCasinos, "global casinos");
assertUniqueIds(globalReviews, "global reviews");
assertUniqueSlugs(globalReviews, "global reviews");
assertOneReviewPerCasino(globalReviews, "global reviews");
assertUniqueIds(globalGuides, "global guides");
assertUniqueSlugs(globalGuides, "global guides");

const authorIds = new Set(rawAuthors.map((author) => author.id));
const casinoIds = new Set(globalCasinos.map((casino) => casino.id));
const reviewsByCasinoId = new Map(globalReviews.map((review) => [review.casinoId, review]));

for (const review of globalReviews) {
  if (!casinoIds.has(review.casinoId)) {
    throw new ContentValidationError(
      `global review "${review.id}": casinoId "${review.casinoId}" does not resolve`,
    );
  }
  if (!authorIds.has(review.authorId)) {
    throw new ContentValidationError(
      `global review "${review.id}": authorId "${review.authorId}" does not resolve`,
    );
  }
}

for (const guide of globalGuides) {
  if (!authorIds.has(guide.authorId)) {
    throw new ContentValidationError(
      `global guide "${guide.id}": authorId "${guide.authorId}" does not resolve`,
    );
  }
}

for (const casino of globalCasinos) {
  if (casino.rating === undefined) continue;
  const review = reviewsByCasinoId.get(casino.id);
  if (!review) {
    throw new ContentValidationError(
      `global casino "${casino.id}": rating requires a corresponding authored review`,
    );
  }
  if (casino.rating !== review.rating) {
    throw new ContentValidationError(
      `global casino "${casino.id}": rating ${casino.rating} does not match review rating ${review.rating}`,
    );
  }
}

export function getGlobalCasinos(): Casino[] {
  return globalCasinos;
}

export function getGlobalCasinoById(id: string): Casino | undefined {
  return globalCasinos.find((c) => c.id === id);
}

export function getGlobalCasinosByVertical(vertical: Vertical): Casino[] {
  return sortByVerticalRank(globalCasinos, vertical);
}

export function getGlobalReviews(): Review[] {
  return globalReviews;
}

export function getGlobalReviewBySlug(slug: string): Review | undefined {
  return globalReviews.find((r) => r.slug === slug);
}

export function getGlobalReviewForCasino(casinoId: string): Review | undefined {
  return globalReviews.find((r) => r.casinoId === casinoId);
}

export function getGlobalGuideBySlug(slug: string): Article | undefined {
  return globalGuides.find((g) => g.slug === slug);
}

export function getGlobalGuides(): Article[] {
  return globalGuides;
}
