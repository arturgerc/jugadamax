/**
 * Dependency-free runtime validation for JugadaMax content records.
 *
 * Validators throw a descriptive error on the first invalid field so the build
 * fails loudly (per contracts/content-model.md). Referential integrity across
 * collections is enforced separately in lib/content/index.ts.
 */

import {
  ARTICLE_TYPES,
  BONUS_TYPES,
  LOCALES,
  PAYMENT_KINDS,
  VERTICALS,
  type Article,
  type ArticleType,
  type Author,
  type Bonus,
  type BonusType,
  type Casino,
  type Locale,
  type PaymentKind,
  type Review,
  type Vertical,
} from "@/types/content";

class ContentValidationError extends Error {
  constructor(message: string) {
    super(`[content] ${message}`);
    this.name = "ContentValidationError";
  }
}

function fail(message: string): never {
  throw new ContentValidationError(message);
}

function assertNonEmptyString(value: unknown, field: string, ctx: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    fail(`${ctx}: "${field}" must be a non-empty string`);
  }
  return value as string;
}

function assertIsoDate(value: unknown, field: string, ctx: string): string {
  const str = assertNonEmptyString(value, field, ctx);
  if (Number.isNaN(Date.parse(str))) {
    fail(`${ctx}: "${field}" must be a valid ISO date (got "${str}")`);
  }
  return str;
}

function assertEnum<T extends string>(
  value: unknown,
  allowed: readonly T[],
  field: string,
  ctx: string,
): T {
  if (typeof value !== "string" || !allowed.includes(value as T)) {
    fail(`${ctx}: "${field}" must be one of [${allowed.join(", ")}] (got "${String(value)}")`);
  }
  return value as T;
}

function assertRating(value: unknown, field: string, ctx: string): number {
  if (typeof value !== "number" || Number.isNaN(value) || value < 0 || value > 5) {
    fail(`${ctx}: "${field}" must be a number between 0 and 5 (got "${String(value)}")`);
  }
  return value;
}

export function validateCasino(input: Casino): Casino {
  const ctx = `casino "${input?.id ?? "?"}"`;
  assertNonEmptyString(input.id, "id", ctx);
  assertNonEmptyString(input.slug, "slug", ctx);
  assertNonEmptyString(input.name, "name", ctx);
  assertEnum<Locale>(input.locale, LOCALES, "locale", ctx);

  if (!Array.isArray(input.verticals) || input.verticals.length === 0) {
    fail(`${ctx}: "verticals" must be a non-empty array`);
  }
  for (const v of input.verticals) {
    assertEnum<Vertical>(v, VERTICALS, "verticals[]", ctx);
  }

  if (typeof input.rankByVertical !== "object" || input.rankByVertical === null) {
    fail(`${ctx}: "rankByVertical" must be an object`);
  }
  for (const key of Object.keys(input.rankByVertical)) {
    if (!input.verticals.includes(key as Vertical)) {
      fail(`${ctx}: rankByVertical key "${key}" is not in the casino's verticals`);
    }
    const rank = input.rankByVertical[key as Vertical];
    if (typeof rank !== "number" || !Number.isInteger(rank) || rank < 1) {
      fail(`${ctx}: rankByVertical["${key}"] must be a positive integer`);
    }
  }

  if (input.rating !== undefined) {
    assertRating(input.rating, "rating", ctx);
  }

  if (input.payments) {
    for (const p of input.payments) {
      assertNonEmptyString(p.name, "payments[].name", ctx);
      assertEnum<PaymentKind>(p.kind, PAYMENT_KINDS, "payments[].kind", ctx);
    }
  }

  if (input.affiliateUrl !== undefined) {
    try {
      new URL(input.affiliateUrl);
    } catch {
      fail(`${ctx}: "affiliateUrl" must be a valid absolute URL (got "${input.affiliateUrl}")`);
    }
  }

  return input;
}

export function validateBonus(input: Bonus): Bonus {
  const ctx = `bonus "${input?.id ?? "?"}"`;
  assertNonEmptyString(input.id, "id", ctx);
  assertNonEmptyString(input.casinoId, "casinoId", ctx);
  assertNonEmptyString(input.title, "title", ctx);
  assertEnum<BonusType>(input.type, BONUS_TYPES, "type", ctx);
  if (typeof input.active !== "boolean") {
    fail(`${ctx}: "active" must be a boolean`);
  }
  if (input.validUntil !== undefined) {
    assertIsoDate(input.validUntil, "validUntil", ctx);
  }
  return input;
}

export function validateAuthor(input: Author): Author {
  const ctx = `author "${input?.id ?? "?"}"`;
  assertNonEmptyString(input.id, "id", ctx);
  assertNonEmptyString(input.slug, "slug", ctx);
  assertNonEmptyString(input.name, "name", ctx);
  return input;
}

export function validateReview(input: Review): Review {
  const ctx = `review "${input?.id ?? "?"}"`;
  assertNonEmptyString(input.id, "id", ctx);
  assertNonEmptyString(input.casinoId, "casinoId", ctx);
  assertNonEmptyString(input.authorId, "authorId", ctx);
  assertNonEmptyString(input.slug, "slug", ctx);
  assertNonEmptyString(input.title, "title", ctx);
  assertNonEmptyString(input.verdict, "verdict", ctx);
  assertNonEmptyString(input.body, "body", ctx);
  assertRating(input.rating, "rating", ctx);
  assertIsoDate(input.publishedAt, "publishedAt", ctx);
  if (input.updatedAt !== undefined) {
    assertIsoDate(input.updatedAt, "updatedAt", ctx);
  }
  if (input.locale !== undefined) {
    assertEnum<Locale>(input.locale, LOCALES, "locale", ctx);
  }
  if (!Array.isArray(input.pros) || input.pros.length === 0) {
    fail(`${ctx}: "pros" must be a non-empty array (balanced, honest content)`);
  }
  if (!Array.isArray(input.cons) || input.cons.length === 0) {
    fail(`${ctx}: "cons" must be a non-empty array (balanced, honest content)`);
  }
  if (input.relatedLinks !== undefined) {
    if (!Array.isArray(input.relatedLinks)) {
      fail(`${ctx}: "relatedLinks" must be an array`);
    }
    const kinds = ["website", "blog", "streaming", "community"] as const;
    for (const [index, link] of input.relatedLinks.entries()) {
      const linkCtx = `${ctx}: relatedLinks[${index}]`;
      assertNonEmptyString(link.label, "label", linkCtx);
      const url = assertNonEmptyString(link.url, "url", linkCtx);
      try {
        new URL(url);
      } catch {
        fail(`${linkCtx}: "url" must be a valid absolute URL (got "${url}")`);
      }
      if (link.kind !== undefined) {
        assertEnum(link.kind, kinds, "kind", linkCtx);
      }
      if (link.subtitle !== undefined) {
        assertNonEmptyString(link.subtitle, "subtitle", linkCtx);
      }
    }
  }
  return input;
}

export function validateArticle(input: Article): Article {
  const ctx = `article "${input?.id ?? "?"}"`;
  assertNonEmptyString(input.id, "id", ctx);
  assertNonEmptyString(input.slug, "slug", ctx);
  assertEnum<ArticleType>(input.type, ARTICLE_TYPES, "type", ctx);
  assertNonEmptyString(input.title, "title", ctx);
  assertNonEmptyString(input.summary, "summary", ctx);
  assertNonEmptyString(input.body, "body", ctx);
  assertNonEmptyString(input.authorId, "authorId", ctx);
  assertEnum<Locale>(input.locale, LOCALES, "locale", ctx);
  assertIsoDate(input.publishedAt, "publishedAt", ctx);
  if (input.updatedAt !== undefined) {
    assertIsoDate(input.updatedAt, "updatedAt", ctx);
  }
  return input;
}

export { ContentValidationError };
