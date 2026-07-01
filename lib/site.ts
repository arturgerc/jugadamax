/**
 * Site-wide configuration for JugadaMax (Mexico-first, Spanish-first).
 * Used by SEO metadata builders, JSON-LD generators, and the root layout.
 */

export const siteConfig = {
  name: "JugadaMax",
  /** Production domain; used as metadataBase and for canonical/JSON-LD URLs. */
  url: "https://www.jugadamax.com",
  locale: "es-MX",
  ogLocale: "es_MX",
  description:
    "JugadaMax: rankings y reseñas de casinos crypto, casinos fiat y apuestas deportivas en México. Información clara, con divulgación de afiliados y juego responsable +18.",
  // NOTE: no default social image or logo asset is referenced until a real brand
  // asset exists. Do not point metadata/JSON-LD at placeholder paths (authenticity;
  // avoids broken/fake asset references).
} as const;

export type SiteConfig = typeof siteConfig;
