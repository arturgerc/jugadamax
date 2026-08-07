/**
 * English navigation for /en pages.
 */

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Desktop header navigation — English routes only.
 * Section order matches Spanish desktopNav (casino-first).
 */
export const enDesktopNav: NavLink[] = [
  { label: "Crypto Casinos", href: "/en/casinos-crypto" },
  { label: "No-KYC", href: "/en/casinos-no-kyc" },
  { label: "Fiat Casinos", href: "/en/casinos-fiat" },
  { label: "Bonuses", href: "/en/bonuses" },
  { label: "Guides", href: "/en/guides" },
  { label: "Betting", href: "/en/betting" },
  { label: "Reviews", href: "/en/reviews" },
  { label: "News", href: "/en/news" },
  { label: "Partners", href: "/en/partners" },
  { label: "Contact", href: "/en/contact" },
];

/** Mobile menu — same logical items as desktop (no legal/Spanish links). */
export const enMobileNav: NavLink[] = enDesktopNav;

/** Returns true when the current pathname matches an English nav destination. */
export function isEnglishNavActive(pathname: string, href: string): boolean {
  if (href === "/en") return pathname === "/en";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Footer — Sections column.
 * Mirrors Spanish primaryNav section order (Partners/Contact live in Information).
 */
export const enFooterSections: NavLink[] = [
  { label: "Crypto Casinos", href: "/en/casinos-crypto" },
  { label: "No-KYC", href: "/en/casinos-no-kyc" },
  { label: "Fiat Casinos", href: "/en/casinos-fiat" },
  { label: "Bonuses", href: "/en/bonuses" },
  { label: "Guides", href: "/en/guides" },
  { label: "Betting", href: "/en/betting" },
  { label: "Reviews", href: "/en/reviews" },
  { label: "News", href: "/en/news" },
];

/** Footer — Information column. */
export const enFooterInfo: NavLink[] = [
  { label: "How We Review", href: "/en/how-we-review" },
  { label: "Affiliate Disclosure", href: "/en/affiliate-disclosure" },
  { label: "Responsible Gambling", href: "/en/responsible-gambling" },
  { label: "Privacy Policy", href: "/en/privacy-policy" },
  { label: "Terms & Conditions", href: "/en/terms-and-conditions" },
  { label: "Partners / Media Kit", href: "/en/partners" },
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" },
];

/**
 * Language alternates live in `lib/i18n/language-alternates.ts` (client-safe).
 * Re-exported here so existing nav imports keep working.
 */
export {
  PAGE_LANGUAGE_ALTERNATES,
  PAIRED_REVIEW_SLUGS,
  getLanguageAlternate,
  getReviewLanguageAlternates,
  isPairedReviewSlug,
} from "@/lib/i18n/language-alternates";
