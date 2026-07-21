import type { Metadata } from "next";
import { getCasinosByVertical } from "@/lib/content";
import { filterCasinosForSurface } from "@/content/operators/status";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { FiatCasinoInfoSections } from "@/components/verticals/FiatCasinoInfoSections";
import { FiatPageHero } from "@/components/verticals/fiat/FiatPageHero";
import { FiatPageTrustStrip } from "@/components/verticals/fiat/FiatPageTrustStrip";
import { FiatTopRanking } from "@/components/verticals/fiat/FiatTopRanking";
import { FiatTopComparison } from "@/components/verticals/fiat/FiatTopComparison";
import { FiatLocalPaymentsPanel } from "@/components/verticals/fiat/FiatLocalPaymentsPanel";
import { FiatLocalReferences } from "@/components/verticals/fiat/FiatLocalReferences";
import { FiatSportsbookCrossLink } from "@/components/verticals/fiat/FiatSportsbookCrossLink";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { Casino } from "@/types/content";

export const metadata: Metadata = buildMetadata({
  title: "Mejores casinos fiat en México",
  description:
    "Compara casinos fiat en México con OXXO, SPEI, tarjetas, casino online, live casino, bonos, pagos, verificación y condiciones. 18+.",
  path: "/casinos-fiat",
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

const RELATED_LINKS = [
  { label: "Bonos de casino", href: "/bonos" },
  { label: "Casinos crypto", href: "/casinos-crypto" },
  { label: "Casinos sin KYC", href: "/casinos-sin-kyc" },
  { label: "Guías", href: "/guias" },
  { label: "Reseñas", href: "/reviews" },
] as const;

export default function FiatCasinosPage() {
  const editorialFiatCasinos = filterCasinosForSurface(
    getCasinosByVertical("fiat-casino"),
    "casinos-fiat",
  );
  const fiatPayments = uniqueFiatPayments(editorialFiatCasinos);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Casinos Fiat", path: "/casinos-fiat" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <FiatPageHero />
      <FiatPageTrustStrip />
      <FiatTopRanking />
      <FiatTopComparison />
      <FiatLocalPaymentsPanel paymentMethods={fiatPayments} />
      <FiatLocalReferences />
      <FiatSportsbookCrossLink />

      <section aria-labelledby="fiat-tambien-revisar-heading" className="mb-8 sm:mb-10 lg:mb-12">
        <h2
          id="fiat-tambien-revisar-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          También puedes revisar
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Explora otras categorías, guías y reseñas antes de registrarte.
        </p>
        <nav aria-label="Enlaces relacionados" className="mt-4 flex flex-wrap gap-2">
          {RELATED_LINKS.map((link) => (
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

      <FiatCasinoInfoSections paymentMethods={fiatPayments} />
    </Container>
  );
}
