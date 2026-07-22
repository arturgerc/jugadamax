/**
 * Site-wide configuration for JugadaMax (Mexico-first, Spanish-first).
 * Used by SEO metadata builders, JSON-LD generators, and the root layout.
 */

export const ARTURS_STOLIKS_LINKEDIN_URL =
  "https://www.linkedin.com/in/arturs-stoliks-953555280/";

/** Official JugadaMax company LinkedIn — use this exact URL (numeric company ID). */
export const JUGADAMAX_COMPANY_LINKEDIN_URL =
  "https://www.linkedin.com/company/135315172";

export const siteConfig = {
  name: "JugadaMax",
  /** Production domain; used as metadataBase and for canonical/JSON-LD URLs. */
  url: "https://www.jugadamax.com",
  locale: "es-MX",
  ogLocale: "es_MX",
  description:
    "JugadaMax: rankings y reseñas de casinos crypto, casinos fiat y apuestas deportivas en México. Información clara, con divulgación de afiliados y juego responsable +18.",
  /** Default social preview image (app/opengraph-image.tsx). */
  ogImage: "/opengraph-image",
  /** Brand icon for Organization/publisher JSON-LD (app/icon.svg). */
  logoUrl: "/icon.svg",
  /** Official organization profile URLs for Organization sameAs. */
  sameAs: [JUGADAMAX_COMPANY_LINKEDIN_URL] as const,
} as const;

export type SiteConfig = typeof siteConfig;
