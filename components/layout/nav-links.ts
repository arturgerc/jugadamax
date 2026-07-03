/**
 * Navigation link definitions (Navigation contract in
 * specs/001-v1-launch/contracts/ui-components.md). Labels are Spanish (es-MX).
 */

export interface NavLink {
  label: string;
  href: string;
}

/** Primary content destinations for SiteHeader + MobileNav. */
export const primaryNav: NavLink[] = [
  { label: "Casinos Crypto", href: "/casinos-crypto" },
  { label: "Casinos Fiat", href: "/casinos-fiat" },
  { label: "Apuestas", href: "/apuestas" },
  { label: "Guías", href: "/guias" },
  { label: "Noticias", href: "/noticias" },
];

/** Trust / legal destinations (footer). */
export const legalNav: NavLink[] = [
  { label: "Cómo evaluamos", href: "/como-evaluamos" },
  { label: "Divulgación de afiliados", href: "/divulgacion-afiliados" },
  { label: "Juego responsable (+18)", href: "/juego-responsable" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Partners / Media Kit", href: "/partners" },
  { label: "Acerca de", href: "/acerca-de" },
  { label: "Contacto", href: "/contacto" },
];
