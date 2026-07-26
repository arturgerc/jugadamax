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
 * Bonuses still point to a homepage anchor until a dedicated EN bonuses route exists.
 */
export const enDesktopNav: NavLink[] = [
  { label: "Crypto Casinos", href: "/en/casinos-crypto" },
  { label: "No-KYC", href: "/en/casinos-no-kyc" },
  { label: "Fiat Casinos", href: "/en/casinos-fiat" },
  { label: "Bonuses", href: "/en#active-promotions" },
  { label: "Guides", href: "/en/guides" },
  { label: "Betting", href: "/en/betting" },
  { label: "Reviews", href: "/en/reviews" },
  { label: "News", href: "/en/news" },
  { label: "Partners", href: "/en/partners" },
  { label: "Contact", href: "/en/contact" },
];

/** Mobile menu — same logical items as desktop (no legal/Spanish links). */
export const enMobileNav: NavLink[] = enDesktopNav;

/**
 * Footer — Sections column.
 * Mirrors Spanish primaryNav section order (Partners/Contact live in Information).
 */
export const enFooterSections: NavLink[] = [
  { label: "Crypto Casinos", href: "/en/casinos-crypto" },
  { label: "No-KYC", href: "/en/casinos-no-kyc" },
  { label: "Fiat Casinos", href: "/en/casinos-fiat" },
  { label: "Bonuses", href: "/en#active-promotions" },
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

/** Paths with exact Spanish ↔ English equivalents for the language switcher. */
export const PAGE_LANGUAGE_ALTERNATES: Record<string, string> = {
  "/": "/en",
  "/en": "/",
  "/casinos-crypto": "/en/casinos-crypto",
  "/en/casinos-crypto": "/casinos-crypto",
  "/casinos-sin-kyc": "/en/casinos-no-kyc",
  "/en/casinos-no-kyc": "/casinos-sin-kyc",
  "/bonos": "/en#active-promotions",
  "/en#active-promotions": "/bonos",
  "/reviews": "/en/reviews",
  "/en/reviews": "/reviews",
  "/reviews/stake": "/en/reviews/stake",
  "/en/reviews/stake": "/reviews/stake",
  "/reviews/cryptocasino": "/en/reviews/cryptocasino",
  "/en/reviews/cryptocasino": "/reviews/cryptocasino",
  "/reviews/ethcasino": "/en/reviews/ethcasino",
  "/en/reviews/ethcasino": "/reviews/ethcasino",
  "/reviews/ltccasino": "/en/reviews/ltccasino",
  "/en/reviews/ltccasino": "/reviews/ltccasino",
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
  "/noticias": "/en/news",
  "/en/news": "/noticias",
};

export function getLanguageAlternate(path: string): string | undefined {
  return PAGE_LANGUAGE_ALTERNATES[path];
}
