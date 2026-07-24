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
 * No-KYC and Bonuses point to homepage anchors until dedicated EN routes exist.
 */
export const enDesktopNav: NavLink[] = [
  { label: "Crypto Casinos", href: "/en/casinos-crypto" },
  { label: "No-KYC", href: "/en#anonymous-casino" },
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
  { label: "No-KYC", href: "/en#anonymous-casino" },
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
  { label: "Partners / Media Kit", href: "/en/partners" },
  { label: "Contact", href: "/en/contact" },
];

/** Paths with exact Spanish ↔ English equivalents for the language switcher. */
export const PAGE_LANGUAGE_ALTERNATES: Record<string, string> = {
  "/": "/en",
  "/en": "/",
  "/casinos-crypto": "/en/casinos-crypto",
  "/en/casinos-crypto": "/casinos-crypto",
  "/casinos-sin-kyc": "/en#anonymous-casino",
  "/en#anonymous-casino": "/casinos-sin-kyc",
  "/bonos": "/en#active-promotions",
  "/en#active-promotions": "/bonos",
  "/reviews": "/en/reviews",
  "/en/reviews": "/reviews",
  "/reviews/stake": "/en/reviews/stake",
  "/en/reviews/stake": "/reviews/stake",
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
