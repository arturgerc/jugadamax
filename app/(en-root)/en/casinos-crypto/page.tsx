import type { Metadata } from "next";
import Link from "next/link";
import { getCasinosByVertical } from "@/lib/content";
import { filterCasinosForSurface } from "@/content/operators/status";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { EnCryptoCasinoInfoSections } from "@/components/verticals/crypto/en/EnCryptoCasinoInfoSections";
import { EnCryptoPageHero } from "@/components/verticals/crypto/en/EnCryptoPageHero";
import { EnCryptoPageTrustStrip } from "@/components/verticals/crypto/en/EnCryptoPageTrustStrip";
import { EnCryptoTopRanking } from "@/components/verticals/crypto/en/EnCryptoTopRanking";
import { EnCryptoTopComparison } from "@/components/verticals/crypto/en/EnCryptoTopComparison";
import { EnCryptoNoKycCrossLink } from "@/components/verticals/crypto/en/EnCryptoNoKycCrossLink";
import { EnCryptoPromotionHighlights } from "@/components/verticals/crypto/en/EnCryptoPromotionHighlights";
import { EnCryptoSecondaryOperators } from "@/components/verticals/crypto/en/EnCryptoSecondaryOperators";
import {
  EN_CRYPTO_GUIDES,
  EN_CRYPTO_RELATED_LINKS,
} from "@/components/verticals/crypto/en/en-crypto-page-config";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  SourceReferenceBlock,
  type SourceReference,
} from "@/components/trust/SourceReferenceBlock";
import { cn, focusRing } from "@/lib/utils";
import type { Casino } from "@/types/content";

export const metadata: Metadata = buildEnMetadata({
  title: "Best Crypto Casinos — Global Reviews & Comparison",
  description:
    "Compare crypto casinos with Bitcoin, Ethereum, USDT and related payments. Editorial rankings, promotions and jurisdiction-aware notes. Adults 18+.",
  path: "/en/casinos-crypto",
  languageAlternates: {
    "es-MX": "/casinos-cripto",
    en: "/en/casinos-crypto",
  },
});

/** Payment names are stored once in Spanish; asset tickers are language-neutral. */
const EN_PAYMENT_LABELS: Record<string, string> = {
  Cripto: "Crypto",
};

function uniqueCryptoPayments(casinos: Casino[]) {
  const names = new Set<string>();
  for (const casino of casinos) {
    for (const p of casino.payments ?? []) {
      if (p.kind === "crypto") names.add(EN_PAYMENT_LABELS[p.name] ?? p.name);
    }
  }
  return [...names];
}

const cryptoCasinoSourceReferences: SourceReference[] = [
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  { label: "Affiliate disclosure", href: "/en/affiliate-disclosure" },
  { label: "Responsible gambling", href: "/en/responsible-gambling" },
  {
    label: "Operator-published terms, restricted-jurisdiction information and payment/cashier pages",
    note:
      "used where relevant; readers should verify live operator terms before registering.",
  },
];

export default function EnCryptoCasinosPage() {
  const editorialCasinos = filterCasinosForSurface(
    getCasinosByVertical("crypto-casino"),
    "casinos-crypto",
  );
  const cryptoPayments = uniqueCryptoPayments(editorialCasinos);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Crypto Casinos", path: "/en/casinos-crypto" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <EnCryptoPageHero />
      <EnCryptoPageTrustStrip />
      <EnCryptoTopRanking />
      <EnCryptoTopComparison />
      <EnCryptoNoKycCrossLink />
      <EnCryptoPromotionHighlights />
      <EnCryptoSecondaryOperators />

      <section
        id="guias-crypto-en"
        aria-labelledby="guias-crypto-en-heading"
        className="mb-8 scroll-mt-24 sm:mb-10 lg:mb-12"
      >
        <h2
          id="guias-crypto-en-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Crypto guides and related reading
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {EN_CRYPTO_GUIDES.map((guide) => (
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

      <section aria-labelledby="en-crypto-tambien-revisar-heading" className="mb-8 sm:mb-10 lg:mb-12">
        <h2
          id="en-crypto-tambien-revisar-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Related routes
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Related paths to compare payment methods, operators and promotions.
        </p>
        <nav aria-label="Related links" className="mt-4 flex flex-wrap gap-2">
          {EN_CRYPTO_RELATED_LINKS.map((link) => (
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

      <SourceReferenceBlock
        title="Sources and references"
        items={cryptoCasinoSourceReferences}
        className="mb-8 sm:mb-10 lg:mb-12"
      />

      <EnCryptoCasinoInfoSections paymentMethods={cryptoPayments} />
    </Container>
  );
}
