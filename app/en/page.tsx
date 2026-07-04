import type { Metadata } from "next";
import Link from "next/link";
import { getGlobalCasinosByVertical, getGlobalReviews } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import {
  EnCoveragePlaceholder,
  EnGuidesPreview,
  EnHero,
  EnNewsPreview,
  EnQuickCategories,
} from "@/components/home/en";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
import { RankingList } from "@/components/ranking/RankingList";
import { SocialLinks } from "@/components/social/SocialLinks";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";

export const metadata: Metadata = {
  ...buildEnMetadata({
    title: "JugadaMax — Crypto Casinos, Fiat Casinos & Betting Guides",
    description:
      "Independent English editorial coverage of crypto casinos, fiat casinos and betting guides. Payment guides and responsible gambling for global 18+ audiences.",
    path: "/en",
    languageAlternates: {
      "es-MX": "/",
      en: "/en",
    },
  }),
  title: {
    absolute: "JugadaMax — Crypto Casinos, Fiat Casinos & Betting Guides",
  },
};

const PREVIEW_COUNT = 3;

const verticalCtas = [
  { label: "Crypto Casinos", href: "/en/casinos-crypto" },
  { label: "Fiat Casinos", href: "/en/casinos-fiat" },
  { label: "Betting", href: "/en/betting" },
] as const;

export default function EnHomePage() {
  const cryptoCasinos = getGlobalCasinosByVertical("crypto-casino").slice(0, PREVIEW_COUNT);
  const reviewSlugByCasinoId = Object.fromEntries(
    getGlobalReviews().map((r) => [r.casinoId, r.slug]),
  );

  const cryptoPayments = [
    ...new Set(
      cryptoCasinos.flatMap((c) => (c.payments ?? []).filter((p) => p.kind === "crypto").map((p) => p.name)),
    ),
  ];

  return (
    <>
      <SocialLinks variant="floating" />
      <EnHero />
      <EnQuickCategories />

      <section aria-labelledby="en-trust-heading" className="pt-4">
        <Container>
          <h2 id="en-trust-heading" className="sr-only">
            Transparency and responsible gambling
          </h2>
          <div className="space-y-3">
            <AffiliateDisclosureEn />
            <ResponsibleGamblingNoticeEn />
            <JurisdictionWarning>
              Availability depends on your jurisdiction and official operator terms. Do not use
              VPNs or false location information to access restricted services.
            </JurisdictionWarning>
          </div>
        </Container>
      </section>

      <section aria-labelledby="en-top-crypto-heading" className="py-10">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1">
              <h2
                id="en-top-crypto-heading"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Top Crypto Casinos
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Our editorial selection of global crypto casinos, ordered by safety, payments and
                user experience.
              </p>
            </div>
            <Link
              href="/en/casinos-crypto"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              View all crypto casinos
            </Link>
          </div>

          <div className="mt-6">
            <RankingList
              casinos={cryptoCasinos}
              vertical="crypto-casino"
              market="global"
              locale="en"
              reviewBasePath="/en/reviews"
              reviewSlugByCasinoId={reviewSlugByCasinoId}
              emptyMessage="Global crypto coverage is being expanded."
              reviewLabel="Read review"
              topRankLabel="Editorial pick"
            />
          </div>

          <nav aria-label="Explore categories" className="mt-6 flex flex-wrap gap-3">
            {verticalCtas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
              >
                {cta.label}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <section aria-labelledby="en-top-fiat-heading" className="py-10">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1">
              <h2
                id="en-top-fiat-heading"
                className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                Fiat Casinos
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Global fiat casino coverage and payment-method context for international readers.
              </p>
            </div>
            <Link
              href="/en/casinos-fiat"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              View fiat casinos
            </Link>
          </div>
          <div className="mt-6">
            <EnCoveragePlaceholder
              description="English fiat casino rankings are being expanded. Availability, licensing and payment methods depend on your jurisdiction and each operator's official terms."
              href="/en/casinos-fiat"
              linkLabel="Learn about fiat coverage"
            />
          </div>
        </Container>
      </section>

      <section aria-labelledby="en-top-betting-heading" className="py-10">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1">
              <h2
                id="en-top-betting-heading"
                className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                Sports Betting
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Editorial overview of sportsbooks and sports betting for global audiences.
              </p>
            </div>
            <Link
              href="/en/betting"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              View betting coverage
            </Link>
          </div>
          <div className="mt-6">
            <EnCoveragePlaceholder
              description="Global sportsbook reviews are being prepared. We do not list operators without editorial assessment. Check local laws before betting."
              href="/en/betting"
              linkLabel="Learn about betting coverage"
            />
          </div>
        </Container>
      </section>

      {cryptoPayments.length > 0 ? (
        <section aria-labelledby="en-payments-heading" className="py-10">
          <Container>
            <h2
              id="en-payments-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Payments & promotions
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Payment methods featured in our crypto coverage. Always verify promotions and terms on
              the operator&apos;s official site.
            </p>
            <div className="mt-6 rounded-lg border border-border/60 bg-card p-4">
              <PaymentBadges
                payments={cryptoPayments.map((name) => ({ name, kind: "crypto" as const }))}
              />
            </div>
          </Container>
        </section>
      ) : null}

      <section aria-labelledby="en-methodology-heading" className="py-10">
        <Container>
          <div className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
            <h2
              id="en-methodology-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              How we review
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Our rankings reflect editorial judgement — not neutral facts or aggregated user
              scores. We assess safety, licensing information, payments, user experience,
              transparency, bonuses and responsible gambling messaging.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>Safety and licensing information published by operators.</li>
              <li>Payment methods, limits and stated processing information.</li>
              <li>User experience, catalogue and support channels.</li>
              <li>Bonus clarity without fabricated urgency or guaranteed outcomes.</li>
            </ul>
            <Link
              href="/en/how-we-review"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              View full methodology
            </Link>
          </div>
        </Container>
      </section>

      <EnGuidesPreview />
      <EnNewsPreview />
    </>
  );
}
