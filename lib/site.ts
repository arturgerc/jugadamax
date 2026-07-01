/**
 * Site-wide configuration for JugadaMax (Mexico-first, Spanish-first).
 * Used by SEO metadata builders, JSON-LD generators, and the root layout.
 */

export const siteConfig = {
  name: "JugadaMax",
  /** Production domain; used as metadataBase and for canonical/JSON-LD URLs. */
  url: "https://jugadamax.com",
  locale: "es-MX",
  ogLocale: "es_MX",
  description:
    "JugadaMax: rankings y reseñas de casinos crypto, casinos fiat y apuestas deportivas en México. Información clara, con divulgación de afiliados y juego responsable +18.",
  /** Default social share image (added as an asset in a later phase). */
  defaultOgImage: "/opengraph-image.png",
} as const;

export type SiteConfig = typeof siteConfig;
