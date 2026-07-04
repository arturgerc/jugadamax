/**
 * English navigation for /en pages.
 */

export interface NavLink {
  label: string;
  href: string;
}

/** Desktop header navigation — English routes only. */
export const enDesktopNav: NavLink[] = [
  { label: "Crypto Casinos", href: "/en/casinos-crypto" },
  { label: "Reviews", href: "/en/reviews" },
  { label: "Partners", href: "/en/partners" },
  { label: "Contact", href: "/en/contact" },
];

/** Mobile menu — same logical items as desktop (no legal/Spanish links). */
export const enMobileNav: NavLink[] = enDesktopNav;

/** Footer — Sections column. */
export const enFooterSections: NavLink[] = [
  { label: "Crypto Casinos", href: "/en/casinos-crypto" },
  { label: "Reviews", href: "/en/reviews" },
];

/** Footer — Information column. Spanish trust pages labeled clearly when linked. */
export const enFooterInfo: NavLink[] = [
  { label: "Partners", href: "/en/partners" },
  { label: "Contact", href: "/en/contact" },
  { label: "Affiliate Disclosure (Spanish)", href: "/divulgacion-afiliados" },
  { label: "Responsible Gambling (Spanish)", href: "/juego-responsable" },
];

/** Paths with Spanish ↔ English equivalents for the language switcher. */
export const PAGE_LANGUAGE_ALTERNATES: Record<string, string> = {
  "/": "/en",
  "/en": "/",
  "/casinos-crypto": "/en/casinos-crypto",
  "/en/casinos-crypto": "/casinos-crypto",
  "/reviews": "/en/reviews",
  "/en/reviews": "/reviews",
  "/reviews/stake": "/en/reviews/stake",
  "/en/reviews/stake": "/reviews/stake",
  "/en/reviews/bcgame": "/reviews",
  "/en/guides/best-crypto-casinos": "/guias",
  "/contacto": "/en/contact",
  "/en/contact": "/contacto",
  "/partners": "/en/partners",
  "/en/partners": "/partners",
};

export function getLanguageAlternate(path: string): string | undefined {
  return PAGE_LANGUAGE_ALTERNATES[path];
}
