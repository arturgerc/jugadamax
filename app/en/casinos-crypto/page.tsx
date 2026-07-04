import type { Metadata } from "next";
import { getGlobalCasinosByVertical, getGlobalReviews } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { RankingList } from "@/components/ranking/RankingList";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";

export const metadata: Metadata = buildEnMetadata({
  title: "Best Crypto Casinos — Global Reviews & Payment Guides",
  description:
    "Editorial ranking of global crypto casinos with jurisdiction-aware reviews, payment notes and responsible gambling information. Adults 18+.",
  path: "/en/casinos-crypto",
  languageAlternates: {
    "es-MX": "/casinos-crypto",
    en: "/en/casinos-crypto",
  },
});

function uniqueCryptoPayments(casinos: ReturnType<typeof getGlobalCasinosByVertical>) {
  const names = new Set<string>();
  for (const casino of casinos) {
    for (const p of casino.payments ?? []) {
      if (p.kind === "crypto") names.add(p.name);
    }
  }
  return [...names];
}

export default function EnCryptoCasinosPage() {
  const casinos = getGlobalCasinosByVertical("crypto-casino");
  const reviews = getGlobalReviews();
  const reviewSlugByCasinoId = Object.fromEntries(reviews.map((r) => [r.casinoId, r.slug]));
  const cryptoPayments = uniqueCryptoPayments(casinos);

  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Best Crypto Casinos — Global Reviews
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Editorial comparison of crypto casinos for international readers. We assess payments,
            licensing information published by operators, and user experience — without hype or
            guaranteed outcomes.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Page focus">
            <li className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Bitcoin · Ethereum · USDT
            </li>
            <li className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-xs font-medium text-accent">
              Editorial review
            </li>
          </ul>
        </div>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosureEn />
        <ResponsibleGamblingNoticeEn />
        <JurisdictionWarning>
          Availability varies by jurisdiction. Check local laws and official operator terms before
          registering. Do not use VPNs or false location data to access restricted services.
        </JurisdictionWarning>
      </div>

      <section aria-label="Global crypto casino ranking" className="mb-6">
        <RankingList
          casinos={casinos}
          vertical="crypto-casino"
          market="global"
          locale="en"
          reviewBasePath="/en/reviews"
          reviewSlugByCasinoId={reviewSlugByCasinoId}
          emptyMessage="Global operator coverage coming soon."
          reviewLabel="Read review"
          topRankLabel="Editorial pick"
        />
      </section>

      <section aria-labelledby="en-comparison-heading" className="mb-12">
        <h2 id="en-comparison-heading" className="text-xl font-bold text-foreground sm:text-2xl">
          Comparison table
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Summary of operators and payment methods. Affiliate CTAs appear only when approved links
          are configured.
        </p>
        <div className="mt-5 min-w-0 max-w-full">
          <ComparisonTable
            casinos={casinos}
            vertical="crypto-casino"
            market="global"
            locale="en"
            reviewBasePath="/en/reviews"
            reviewSlugByCasinoId={reviewSlugByCasinoId}
            reviewLabel="Read review"
            visitLabel="Visit"
            methodologyHref="/como-evaluamos"
            methodologyLabel="Editorial methodology (Spanish)"
          />
        </div>
      </section>

      {cryptoPayments.length > 0 ? (
        <section aria-labelledby="en-payments-heading" className="rounded-lg border border-border/60 bg-card p-4">
          <h2 id="en-payments-heading" className="text-lg font-semibold text-foreground">
            Payment methods in this ranking
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {cryptoPayments.join(", ")} — confirm networks, fees and limits on each operator&apos;s
            official site.
          </p>
        </section>
      ) : null}
    </Container>
  );
}
