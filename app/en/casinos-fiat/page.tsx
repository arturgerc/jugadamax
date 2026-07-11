import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { XonbetFeaturedCard } from "@/components/affiliate/XonbetFeaturedCard";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
import { cn, focusRing } from "@/lib/utils";

export const metadata: Metadata = buildEnMetadata({
  title: "Fiat & Multi-Currency Online Casinos — Global Coverage",
  description:
    "Editorial coverage of online casinos supporting traditional currencies, cards, e-wallets and selected crypto methods. Availability and payment options vary by country.",
  path: "/en/casinos-fiat",
});

const CANADA_WARNING =
  "Partner availability includes Canada, but online gambling rules are provincial. JugadaMax does not present XON.BET as an Ontario-registered operator. Check applicable provincial rules and the operator's current terms before registering.";

const WELCOME_DEPOSITS = [
  { label: "1st deposit", value: "150%" },
  { label: "2nd deposit", value: "120%" },
  { label: "3rd deposit", value: "110%" },
  { label: "4th deposit", value: "120%" },
] as const;

const PAYMENT_ITEMS = [
  {
    title: "Cards",
    text: "Visa and Mastercard may appear where the cashier supports them. Limits and fees vary by country.",
  },
  {
    title: "E-wallets",
    text: "Skrill, Neteller and Jeton availability depends on region and account verification status.",
  },
  {
    title: "Interac",
    text: "Interac may be offered where available — not guaranteed in every market.",
  },
  {
    title: "Selected crypto",
    text: "Bitcoin, Ethereum, USDT and other assets where enabled. Networks and minimums differ.",
  },
] as const;

const PRODUCT_ITEMS = [
  { title: "Slots", text: "Broad slot lobby with multiple providers." },
  { title: "Live casino", text: "Live dealer tables subject to regional availability." },
  { title: "Table games", text: "RNG table and card formats alongside instant/crash titles." },
  { title: "Tournaments & loyalty", text: "Seasonal campaigns, loyalty tiers and leaderboard events." },
] as const;

const PARTNER_GEOS = ["PL", "DE", "CH", "SE", "HU", "GR", "BE", "DK", "CA", "NO"] as const;

function SectionCard({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-xl border border-border/60 bg-card p-4 sm:p-5", className)}>
      <h2 className="text-lg font-semibold text-foreground sm:text-xl">{title}</h2>
      {children}
    </section>
  );
}

export default function EnFiatCasinosPage() {
  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,217,255,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Fiat & Multi-Currency Online Casinos
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Editorial coverage of online casinos supporting traditional currencies, cards,
            e-wallets and selected crypto methods. Availability and payment options vary by
            country.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <JurisdictionWarning>{CANADA_WARNING}</JurisdictionWarning>

        <section aria-labelledby="en-fiat-featured-heading">
          <h2
            id="en-fiat-featured-heading"
            className="mb-4 text-lg font-semibold text-foreground sm:text-xl"
          >
            Featured international casino
          </h2>
          <XonbetFeaturedCard context="fiat" />
        </section>

        <SectionCard title="Welcome package">
          <p className="mt-2 text-sm text-muted-foreground">
            XON.BET markets up to 500% across the first four deposits. Currency caps and exact
            percentages vary by GEO and account — JugadaMax does not display a fixed universal cap.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {WELCOME_DEPOSITS.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-cyan-500/20 bg-[#070B1C]/60 p-3 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-bold text-cyan-300">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Offer, percentage and cap may differ by country, currency and account. Wagering applies.
          </p>
        </SectionCard>

        <SectionCard title="Payments">
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PAYMENT_ITEMS.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            KYC and method-matching rules apply before withdrawals. Payment routes are not guaranteed
            in every country — verify on the operator&apos;s official cashier before depositing.
          </p>
        </SectionCard>

        <SectionCard title="Games and product">
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PRODUCT_ITEMS.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Availability">
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Partner-reported availability includes{" "}
            {PARTNER_GEOS.join(", ")}. This is not a legal guarantee — local law and operator terms
            apply. JugadaMax does not provide VPN or false-location guidance.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            XON.BET holds a Curaçao Gaming Authority licence — not local authorisation in Canada,
            Germany, Sweden, Denmark or other partner-reported markets. Canada availability is
            provincial; see the jurisdiction notice above.
          </p>
        </SectionCard>

        <SectionCard title="How we review">
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            JugadaMax assessments reflect editorial judgement — not neutral facts or aggregated user
            scores. We evaluate licensing information, payments, product breadth, bonus clarity and
            responsible gambling messaging before recommending operators.
          </p>
          <Link
            href="/en/how-we-review"
            className={cn(
              "mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60",
              focusRing,
            )}
          >
            View full methodology
          </Link>
        </SectionCard>

        <div className="space-y-3">
          <AffiliateDisclosureEn />
          <ResponsibleGamblingNoticeEn />
        </div>
      </div>
    </Container>
  );
}
