import type { Metadata } from "next";
import Link from "next/link";
import { getCasinosByVertical } from "@/lib/content";
import { filterCasinosForSurface } from "@/content/operators/status";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { CryptoCasinoInfoSections } from "@/components/verticals/CryptoCasinoInfoSections";
import { CryptoPageHero } from "@/components/verticals/crypto/CryptoPageHero";
import { CryptoPageTrustStrip } from "@/components/verticals/crypto/CryptoPageTrustStrip";
import { CryptoTopRanking } from "@/components/verticals/crypto/CryptoTopRanking";
import { CryptoTopComparison } from "@/components/verticals/crypto/CryptoTopComparison";
import { CryptoNoKycCrossLink } from "@/components/verticals/crypto/CryptoNoKycCrossLink";
import { CryptoPromotionHighlights } from "@/components/verticals/crypto/CryptoPromotionHighlights";
import { CryptoSecondaryOperators } from "@/components/verticals/crypto/CryptoSecondaryOperators";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { cn, focusRing } from "@/lib/utils";
import type { Casino } from "@/types/content";

export const metadata: Metadata = buildMetadata({
  title: "Mejores casinos crypto en México",
  description:
    "Compara casinos crypto, Bitcoin, Ethereum, USDT, privacidad, juegos, bonos, pagos y condiciones para México y LATAM. 18+.",
  path: "/casinos-crypto",
  languageAlternates: {
    "es-MX": "/casinos-crypto",
    en: "/en/casinos-crypto",
  },
});

function uniqueCryptoPayments(casinos: Casino[]) {
  const names = new Set<string>();
  for (const casino of casinos) {
    for (const p of casino.payments ?? []) {
      if (p.kind === "crypto") names.add(p.name);
    }
  }
  return [...names];
}

const GUIDES = [
  {
    href: "/guias/casinos-con-usdt-mexico",
    title: "Casinos con USDT en México",
    description: "Redes, riesgos de stablecoins y qué revisar antes de depositar.",
  },
  {
    href: "/guias/casinos-con-bitcoin-mexico",
    title: "Casinos con Bitcoin en México",
    description: "Wallets, confirmaciones, comisiones y volatilidad.",
  },
  {
    href: "/guias/casinos-no-kyc-mexico",
    title: "Casinos no KYC en México",
    description: "Qué significa, cuándo puede aplicar verificación y señales de alerta.",
  },
  {
    href: "/guias/como-elegir-casino-crypto-mexico",
    title: "Cómo elegir un casino crypto",
    description: "Checklist editorial: seguridad, pagos, términos y juego responsable.",
  },
] as const;

const RELATED_LINKS = [
  { label: "Casinos con USDT", href: "/guias/casinos-con-usdt-mexico" },
  { label: "Casinos con Bitcoin", href: "/guias/casinos-con-bitcoin-mexico" },
  { label: "Casinos sin KYC", href: "/casinos-sin-kyc" },
  { label: "Bonos de casino", href: "/bonos" },
  { label: "Casinos fiat", href: "/casinos-fiat" },
  { label: "Reseñas", href: "/reviews" },
] as const;

export default function CryptoCasinosPage() {
  const editorialCasinos = filterCasinosForSurface(
    getCasinosByVertical("crypto-casino"),
    "casinos-crypto",
  );
  const cryptoPayments = uniqueCryptoPayments(editorialCasinos);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Casinos Crypto", path: "/casinos-crypto" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <CryptoPageHero />
      <CryptoPageTrustStrip />
      <CryptoTopRanking />
      <CryptoTopComparison />
      <CryptoNoKycCrossLink />
      <CryptoPromotionHighlights />
      <CryptoSecondaryOperators />

      <section
        id="guias-crypto-mexico"
        aria-labelledby="guias-crypto-mexico-heading"
        className="mb-8 scroll-mt-24 sm:mb-10 lg:mb-12"
      >
        <h2
          id="guias-crypto-mexico-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Guías crypto para jugadores en México
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className={cn(
                "flex h-full flex-col rounded-lg border border-border/60 bg-card p-4 transition-colors hover:border-primary/60",
                focusRing,
              )}
            >
              <span className="font-semibold text-foreground">{guide.title}</span>
              <span className="mt-1.5 text-sm text-muted-foreground">{guide.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="crypto-tambien-revisar-heading" className="mb-8 sm:mb-10 lg:mb-12">
        <h2
          id="crypto-tambien-revisar-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          También puedes revisar
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Rutas relacionadas para comparar métodos de pago, operadores y bonos.
        </p>
        <nav aria-label="Enlaces relacionados" className="mt-4 flex flex-wrap gap-2">
          {RELATED_LINKS.map((link) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              event="crypto_page_category_click"
              section="related-links"
              destination={link.href}
              className="inline-flex min-h-11 items-center rounded-full border border-border/60 bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              {link.label}
            </TrackedLink>
          ))}
        </nav>
      </section>

      <CryptoCasinoInfoSections paymentMethods={cryptoPayments} />
    </Container>
  );
}
