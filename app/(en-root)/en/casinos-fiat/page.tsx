import type { Metadata } from "next";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { EnFiatCasinoInfoSections } from "@/components/verticals/fiat/en/EnFiatCasinoInfoSections";
import { EnFiatPageHero } from "@/components/verticals/fiat/en/EnFiatPageHero";
import { EnFiatPageTrustStrip } from "@/components/verticals/fiat/en/EnFiatPageTrustStrip";
import { EnFiatTopRanking } from "@/components/verticals/fiat/en/EnFiatTopRanking";
import { EnFiatTopComparison } from "@/components/verticals/fiat/en/EnFiatTopComparison";
import { EnFiatPaymentsPanel } from "@/components/verticals/fiat/en/EnFiatPaymentsPanel";
import { EnFiatLocalReferences } from "@/components/verticals/fiat/en/EnFiatLocalReferences";
import { EnFiatSportsbookCrossLink } from "@/components/verticals/fiat/en/EnFiatSportsbookCrossLink";
import {
  EN_FIAT_LOCAL_REFERENCE_IDS,
  EN_FIAT_RELATED_LINKS,
  EN_FIAT_TOP_SIX,
} from "@/components/verticals/fiat/en/en-fiat-page-config";
import { resolveEnFiatCasino } from "@/components/verticals/fiat/en/en-fiat-data";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { Casino } from "@/types/content";

export const metadata: Metadata = buildEnMetadata({
  title: "Best Fiat & Multi-Currency Casinos — Global Reviews",
  description:
    "Compare fiat and multi-currency online casinos with cards, e-wallets and traditional payments. Editorial rankings, Mexico-market references and jurisdiction-aware notes. Adults 18+.",
  path: "/en/casinos-fiat",
  languageAlternates: {
    "es-MX": "/casinos-fiat",
    en: "/en/casinos-fiat",
  },
});

function uniqueFiatPayments(casinos: Casino[]) {
  const names = new Set<string>();
  for (const casino of casinos) {
    for (const p of casino.payments ?? []) {
      if (p.kind === "fiat") names.add(p.name);
    }
  }
  return [...names];
}

export default function EnFiatCasinosPage() {
  const selectionIds = [
    ...EN_FIAT_TOP_SIX.map((e) => e.operatorId),
    ...EN_FIAT_LOCAL_REFERENCE_IDS,
  ];
  const selectionCasinos = selectionIds
    .map((id) => resolveEnFiatCasino(id))
    .filter((c): c is Casino => Boolean(c));
  const fiatPayments = uniqueFiatPayments(selectionCasinos);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Fiat Casinos", path: "/en/casinos-fiat" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <EnFiatPageHero />
      <EnFiatPageTrustStrip />
      <EnFiatTopRanking />
      <EnFiatTopComparison />
      <EnFiatPaymentsPanel paymentMethods={fiatPayments} />
      <EnFiatLocalReferences />
      <EnFiatSportsbookCrossLink />

      <section aria-labelledby="en-fiat-tambien-revisar-heading" className="mb-8 sm:mb-10 lg:mb-12">
        <h2
          id="en-fiat-tambien-revisar-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Related routes
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Explore other categories, guides and reviews before you register.
        </p>
        <nav aria-label="Related links" className="mt-4 flex flex-wrap gap-2">
          {EN_FIAT_RELATED_LINKS.map((link) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              event="fiat_page_category_click"
              section="related-links"
              destination={link.href}
              className="inline-flex min-h-11 items-center rounded-full border border-border/60 bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              {link.label}
            </TrackedLink>
          ))}
        </nav>
      </section>

      <EnFiatCasinoInfoSections paymentMethods={fiatPayments} />
    </Container>
  );
}
