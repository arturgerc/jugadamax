/**
 * Content loaders for English/global pages under /en.
 */

import type { Article, Casino, Review, Vertical } from "@/types/content";
import { globalCasinos as rawGlobalCasinos } from "@/content/casinos/global";
import { globalReviews as rawGlobalReviews } from "@/content/reviews/global";
import { globalGuides as rawGlobalGuides } from "@/content/guides/global";
import { validateArticle, validateCasino, validateReview } from "@/lib/content/schema";
import { sortByVerticalRank } from "@/lib/ranking";

const globalCasinos: Casino[] = rawGlobalCasinos.map(validateCasino);
const globalReviews: Review[] = rawGlobalReviews.map(validateReview);
const globalGuides: Article[] = rawGlobalGuides.map(validateArticle);

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
