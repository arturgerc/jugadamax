/**
 * Client-safe Spanish ↔ English path alternates for the language switcher.
 * Do not import server-only content modules here.
 */

/**
 * Exact intersection of Spanish (`content/reviews/index.ts`) and English
 * (`content/reviews/global.ts`) review slugs that share the same public path.
 *
 * Not paired (intentionally omitted):
 * - Spanish-only: betfury, 500-casino, rainbet, gamdom, bitcasino, mellstroy,
 *   roobet, vodka-bet
 * - English-only: xonbet, slotoro
 */
export const PAIRED_REVIEW_SLUGS = [
  "1xbet",
  "awintura",
  "bcgame",
  "betsson",
  "caliente",
  "codere",
  "cryptocasino",
  "ethcasino",
  "ltccasino",
  "melbet",
  "mostbet",
  "sportsbet-io",
  "stake",
] as const;

export type PairedReviewSlug = (typeof PAIRED_REVIEW_SLUGS)[number];

const PAIRED_REVIEW_SLUG_SET = new Set<string>(PAIRED_REVIEW_SLUGS);

/** Static marketing / legal page pairs (non-review). */
const STATIC_PAGE_LANGUAGE_ALTERNATES: Record<string, string> = {
  "/": "/en",
  "/en": "/",
  "/casinos-crypto": "/en/casinos-crypto",
  "/en/casinos-crypto": "/casinos-crypto",
  "/casinos-sin-kyc": "/en/casinos-no-kyc",
  "/en/casinos-no-kyc": "/casinos-sin-kyc",
  "/bonos": "/en/bonuses",
  "/en/bonuses": "/bonos",
  "/reviews": "/en/reviews",
  "/en/reviews": "/reviews",
  "/contacto": "/en/contact",
  "/en/contact": "/contacto",
  "/partners": "/en/partners",
  "/en/partners": "/partners",
  "/como-evaluamos": "/en/how-we-review",
  "/en/how-we-review": "/como-evaluamos",
  "/divulgacion-afiliados": "/en/affiliate-disclosure",
  "/en/affiliate-disclosure": "/divulgacion-afiliados",
  "/juego-responsable": "/en/responsible-gambling",
  "/en/responsible-gambling": "/juego-responsable",
  "/politica-de-privacidad": "/en/privacy-policy",
  "/en/privacy-policy": "/politica-de-privacidad",
  "/terminos-y-condiciones": "/en/terms-and-conditions",
  "/en/terms-and-conditions": "/terminos-y-condiciones",
  "/acerca-de": "/en/about",
  "/en/about": "/acerca-de",
  "/casinos-fiat": "/en/casinos-fiat",
  "/en/casinos-fiat": "/casinos-fiat",
  "/apuestas": "/en/betting",
  "/en/betting": "/apuestas",
  "/guias": "/en/guides",
  "/en/guides": "/guias",
  "/guias/casinos-con-bitcoin-mexico": "/en/guides/bitcoin-casinos-in-mexico",
  "/en/guides/bitcoin-casinos-in-mexico": "/guias/casinos-con-bitcoin-mexico",
  "/noticias": "/en/news",
  "/en/news": "/noticias",
};

function buildReviewLanguageAlternates(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const slug of PAIRED_REVIEW_SLUGS) {
    map[`/reviews/${slug}`] = `/en/reviews/${slug}`;
    map[`/en/reviews/${slug}`] = `/reviews/${slug}`;
  }
  return map;
}

/** Full path map used by the language switcher (static pages + paired reviews). */
export const PAGE_LANGUAGE_ALTERNATES: Record<string, string> = {
  ...STATIC_PAGE_LANGUAGE_ALTERNATES,
  ...buildReviewLanguageAlternates(),
};

/** Normalize pathname for lookup (trailing slash, query/hash stripped). */
export function normalizeLanguagePath(path: string): string {
  const withoutQuery = path.split("?")[0]?.split("#")[0] ?? path;
  if (withoutQuery.length > 1 && withoutQuery.endsWith("/")) {
    return withoutQuery.slice(0, -1);
  }
  return withoutQuery || "/";
}

export function isPairedReviewSlug(slug: string): boolean {
  return PAIRED_REVIEW_SLUG_SET.has(slug);
}

/**
 * SEO hreflang map for a review slug, or undefined when unpaired.
 */
export function getReviewLanguageAlternates(
  slug: string,
): { "es-MX": string; en: string } | undefined {
  if (!isPairedReviewSlug(slug)) return undefined;
  return {
    "es-MX": `/reviews/${slug}`,
    en: `/en/reviews/${slug}`,
  };
}

/**
 * Resolve the opposite-locale path for an exact alternate.
 * Returns undefined when no pair exists (caller may fall back to locale home).
 */
export function getLanguageAlternate(path: string): string | undefined {
  const normalized = normalizeLanguagePath(path);
  const direct = PAGE_LANGUAGE_ALTERNATES[normalized];
  if (direct) return direct;

  // Defensive: paired reviews even if the static map drifts.
  const reviewMatch = normalized.match(/^\/(en\/)?reviews\/([^/]+)$/);
  if (!reviewMatch) return undefined;
  const slug = reviewMatch[2];
  if (!isPairedReviewSlug(slug)) return undefined;
  return reviewMatch[1] ? `/reviews/${slug}` : `/en/reviews/${slug}`;
}
