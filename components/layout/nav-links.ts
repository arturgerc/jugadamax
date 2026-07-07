/**
 * Navigation link definitions (Navigation contract in
 * specs/001-v1-launch/contracts/ui-components.md). Labels are Spanish (es-MX).
 */

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Desktop header destinations (SiteHeader only). Casino-first: casino categories,
 * bonuses and guides come before the secondary sportsbook section (/apuestas).
 */
export const desktopNav: NavLink[] = [
  { label: "Casinos Crypto", href: "/casinos-crypto" },
  { label: "Casinos Fiat", href: "/casinos-fiat" },
  { label: "Bonos", href: "/bonos" },
  { label: "Guías", href: "/guias" },
  { label: "Apuestas", href: "/apuestas" },
  { label: "Reseñas", href: "/reviews" },
  { label: "Noticias", href: "/noticias" },
  { label: "Socios", href: "/partners" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Primary content destinations for MobileNav + footer Secciones. Casino-first
 * ordering; the sportsbook section (/apuestas) stays secondary.
 */
export const primaryNav: NavLink[] = [
  { label: "Casinos Crypto", href: "/casinos-crypto" },
  { label: "Casinos Fiat", href: "/casinos-fiat" },
  { label: "Bonos", href: "/bonos" },
  { label: "Guías", href: "/guias" },
  { label: "Apuestas", href: "/apuestas" },
  { label: "Noticias", href: "/noticias" },
];

/** Trust / legal destinations (footer + mobile). */
export const legalNav: NavLink[] = [
  { label: "Cómo evaluamos", href: "/como-evaluamos" },
  { label: "Divulgación de afiliados", href: "/divulgacion-afiliados" },
  { label: "Juego responsable (+18)", href: "/juego-responsable" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Socios / Media Kit", href: "/partners" },
  { label: "Acerca de", href: "/acerca-de" },
  { label: "Contacto", href: "/contacto" },
];
