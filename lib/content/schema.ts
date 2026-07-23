/**
 * Dependency-free runtime validation for JugadaMax content records.
 *
 * Validators throw a descriptive error on the first invalid field so the build
 * fails loudly (per contracts/content-model.md). Referential integrity across
 * collections is enforced separately in lib/content/index.ts.
 */

import {
  ARTICLE_TYPES,
  AUTHOR_KINDS,
  BONUS_DIRECTORY_GROUPS,
  BONUS_MARKETS,
  BONUS_PRODUCTS,
  BONUS_STATUSES,
  BONUS_TYPES,
  LOCALES,
  NEWS_CATEGORIES,
  NEWS_KINDS,
  PAYMENT_KINDS,
  VERTICALS,
  type Article,
  type ArticleType,
  type Author,
  type AuthorKind,
  type Bonus,
  type BonusDirectoryGroup,
  type BonusMarket,
  type BonusProduct,
  type BonusStatus,
  type BonusType,
  type Casino,
  type Locale,
  type NewsCategory,
  type NewsKind,
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
  if (input.product !== undefined) {
    assertEnum<BonusProduct>(input.product, BONUS_PRODUCTS, "product", ctx);
  }
  if (input.market !== undefined) {
    assertEnum<BonusMarket>(input.market, BONUS_MARKETS, "market", ctx);
  }
  if (input.status !== undefined) {
    assertEnum<BonusStatus>(input.status, BONUS_STATUSES, "status", ctx);
  }
  if (input.directoryGroup !== undefined) {
    assertEnum<BonusDirectoryGroup>(
      input.directoryGroup,
      BONUS_DIRECTORY_GROUPS,
      "directoryGroup",
      ctx,
    );
  }
  if (input.featuredPosition !== undefined) {
    if (
      typeof input.featuredPosition !== "number" ||
      !Number.isInteger(input.featuredPosition) ||
      input.featuredPosition < 1
    ) {
      fail(`${ctx}: "featuredPosition" must be a positive integer`);
    }
  }
  if (input.offerLabel !== undefined) {
    assertNonEmptyString(input.offerLabel, "offerLabel", ctx);
  }
  if (input.minDeposit !== undefined) {
    assertNonEmptyString(input.minDeposit, "minDeposit", ctx);
  }
  if (input.productLabel !== undefined) {
    assertNonEmptyString(input.productLabel, "productLabel", ctx);
  }
  return input;
}

export function validateAuthor(input: Author): Author {
  const ctx = `author "${input?.id ?? "?"}"`;
  assertNonEmptyString(input.id, "id", ctx);
  assertNonEmptyString(input.slug, "slug", ctx);
  assertNonEmptyString(input.name, "name", ctx);
  if (input.kind !== undefined) {
    assertEnum<AuthorKind>(input.kind, AUTHOR_KINDS, "kind", ctx);
  }
  if (input.specialties !== undefined) {
    if (!Array.isArray(input.specialties)) {
      fail(`${ctx}: "specialties" must be an array`);
    }
    for (const [index, specialty] of input.specialties.entries()) {
      assertNonEmptyString(specialty, `specialties[${index}]`, ctx);
    }
  }
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
  if (input.newsKind !== undefined) {
    assertEnum<NewsKind>(input.newsKind, NEWS_KINDS, "newsKind", ctx);
  }
  if (input.newsCategory !== undefined) {
    assertEnum<NewsCategory>(
      input.newsCategory,
      NEWS_CATEGORIES,
      "newsCategory",
      ctx,
    );
  }
  if (input.keyPoints !== undefined) {
    if (!Array.isArray(input.keyPoints)) {
      fail(`${ctx}: "keyPoints" must be an array`);
    }
    for (const [index, point] of input.keyPoints.entries()) {
      assertNonEmptyString(point, `keyPoints[${index}]`, ctx);
    }
  }
  if (input.sources !== undefined) {
    if (!Array.isArray(input.sources)) {
      fail(`${ctx}: "sources" must be an array`);
    }
    for (const [index, source] of input.sources.entries()) {
      const sourceCtx = `${ctx}: sources[${index}]`;
      assertNonEmptyString(source.label, "label", sourceCtx);
      const url = assertNonEmptyString(source.url, "url", sourceCtx);
      try {
        new URL(url);
      } catch {
        fail(`${sourceCtx}: "url" must be a valid absolute URL (got "${url}")`);
      }
      if (source.publisher !== undefined) {
        assertNonEmptyString(source.publisher, "publisher", sourceCtx);
      }
      if (source.publishedAt !== undefined) {
        assertIsoDate(source.publishedAt, "publishedAt", sourceCtx);
      }
      if (source.note !== undefined) {
        assertNonEmptyString(source.note, "note", sourceCtx);
      }
    }
  }
  if (input.relatedLinks !== undefined) {
    if (!Array.isArray(input.relatedLinks)) {
      fail(`${ctx}: "relatedLinks" must be an array`);
    }
    for (const [index, link] of input.relatedLinks.entries()) {
      const linkCtx = `${ctx}: relatedLinks[${index}]`;
      assertNonEmptyString(link.label, "label", linkCtx);
      assertNonEmptyString(link.href, "href", linkCtx);
    }
  }
  if (input.authorComment !== undefined) {
    assertNonEmptyString(input.authorComment.heading, "authorComment.heading", ctx);
    assertNonEmptyString(input.authorComment.body, "authorComment.body", ctx);
  }
  if (input.factLabel !== undefined) {
    assertNonEmptyString(input.factLabel, "factLabel", ctx);
  }
  if (input.opinionLabel !== undefined) {
    assertNonEmptyString(input.opinionLabel, "opinionLabel", ctx);
  }
  if (input.featured !== undefined && typeof input.featured !== "boolean") {
    fail(`${ctx}: "featured" must be a boolean`);
  }
  return input;
}

export { ContentValidationError };
