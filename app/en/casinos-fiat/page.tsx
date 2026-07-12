import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { XonbetFeaturedCard } from "@/components/affiliate/XonbetFeaturedCard";
import { SlotoroFeaturedCard } from "@/components/affiliate/SlotoroFeaturedCard";
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

const SLOTORO_RESTRICTED_WARNING =
  "Slotoro's current official terms restrict several major markets, including the UK, US, Australia, Belgium, France, Italy and Spain. This list can change. Verify live terms before registering.";

const XON_WELCOME_DEPOSITS = [
  { label: "1st deposit", value: "150%" },
  { label: "2nd deposit", value: "120%" },
  { label: "3rd deposit", value: "110%" },
  { label: "4th deposit", value: "120%" },
] as const;

const SLOTORO_WELCOME_CARDS = [
  {
    title: "First deposit",
    value: "100% up to 500 + 100 FS",
    note: "Minimum deposit 10",
  },
  {
    title: "Second deposit",
    value: "75% up to 500 + 50 FS",
    note: "Or 125% up to 1,000 + 75 FS with higher minimum",
  },
  {
    title: "Third deposit",
    value: "150% up to 1,000 + 75 FS",
    note: "Minimum deposit 25",
  },
  {
    title: "Bonus rules",
    value: "40x wagering · 5 days",
    note: "Maximum conversion and bet limits apply",
  },
] as const;

const XON_PAYMENT_ITEMS = [
  {
    title: "Cards",
    text: "Visa and Mastercard may appear where the XON.BET cashier supports them.",
  },
  {
    title: "E-wallets",
    text: "Skrill, Neteller and Jeton availability depends on region and account verification.",
  },
  {
    title: "Interac",
    text: "Interac may be offered where available — not guaranteed in every market.",
  },
  {
    title: "Selected crypto",
    text: "Bitcoin, Ethereum, USDT and other assets where enabled on XON.BET.",
  },
] as const;

const SLOTORO_PAYMENT_ITEMS = [
  {
    title: "Cards",
    text: "Visa and Mastercard where the Slotoro cashier supports them.",
  },
  {
    title: "E-wallets",
    text: "Skrill, Neteller, MiFinity, Jeton, MuchBetter and AstroPay where enabled.",
  },
  {
    title: "Interac",
    text: "Interac may appear in supported regions — not universal.",
  },
  {
    title: "Selected crypto",
    text: "Secondary crypto options such as BTC, ETH and USDT where the cashier enables them.",
  },
] as const;

const XON_PRODUCT_ITEMS = [
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
            Featured international casinos
          </h2>
          <div className="space-y-4">
            <XonbetFeaturedCard context="fiat" className="" />
            <SlotoroFeaturedCard context="fiat" className="" />
          </div>
        </section>

        <SectionCard title="XON.BET welcome package">
          <p className="mt-2 text-sm text-muted-foreground">
            XON.BET markets up to 500% across the first four deposits. Currency caps and exact
            percentages vary by GEO and account — JugadaMax does not display a fixed universal cap.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {XON_WELCOME_DEPOSITS.map((item) => (
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

        <SectionCard title="Slotoro welcome package">
          <p className="mt-2 text-sm text-muted-foreground">
            Slotoro markets up to 2,500 in bonus value plus up to 250 free spins across three
            deposits. Currency presentation varies by country and account.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SLOTORO_WELCOME_CARDS.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-fuchsia-500/20 bg-[#130020]/60 p-3"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-1 text-sm font-bold text-[#F4FF00]">{item.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Bonus value, currency, deposit thresholds, wagering, eligible games and availability vary
            by country, account and current terms.
          </p>
        </SectionCard>

        <SectionCard title="Royal Piggy wheel">
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The supplied promotional landing presents a variable reward wheel with free-spin prizes up
            to 250 FS. The actual reward and availability depend on landing, country, account and live
            terms.
          </p>
        </SectionCard>

        <SectionCard title="Compare reviewed fiat casinos">
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-cyan-500/20 bg-[#070B1C]/60 p-4">
              <h3 className="text-sm font-semibold text-cyan-200">XON.BET</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Multi-currency casino with four-deposit package</li>
                <li>Cards, e-wallets, Interac and selected crypto</li>
                <li>Main caution: mixed external safety signals</li>
              </ul>
            </div>
            <div className="rounded-lg border border-fuchsia-500/20 bg-[#130020]/60 p-4">
              <h3 className="text-sm font-semibold text-fuchsia-200">Slotoro</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Fiat-led multi-currency with three-deposit package and wheel landing</li>
                <li>Cards, e-wallets and Interac</li>
                <li>Main caution: wagering, conversion and withdrawal rules</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Payments">
          <h3 className="mt-4 text-sm font-semibold text-foreground">XON.BET</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {XON_PAYMENT_ITEMS.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-6 text-sm font-semibold text-foreground">Slotoro</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {SLOTORO_PAYMENT_ITEMS.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            KYC and method-matching rules apply before withdrawals. Payment routes are not guaranteed
            in every country — verify on each operator&apos;s official cashier before depositing.
          </p>
        </SectionCard>

        <SectionCard title="Games and product">
          <p className="mt-2 text-sm text-muted-foreground">
            XON.BET product overview — Slotoro adds Wheel of Fortune, VIP Space and sportsbook as an
            additional product. See the{" "}
            <Link href="/en/reviews/slotoro" className="text-primary underline-offset-2 hover:underline">
              Slotoro review
            </Link>{" "}
            for full product detail.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {XON_PRODUCT_ITEMS.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Availability">
          <h3 className="mt-4 text-sm font-semibold text-foreground">XON.BET</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Partner-reported availability includes{" "}
            {PARTNER_GEOS.join(", ")}. This is not a legal guarantee — local law and operator terms
            apply. XON.BET holds a Curaçao Gaming Authority licence — not local authorisation in
            Canada, Germany, Sweden, Denmark or other partner-reported markets.
          </p>
          <h3 className="mt-6 text-sm font-semibold text-foreground">Slotoro</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Slotoro&apos;s official general terms list multiple restricted jurisdictions. Do not infer
            availability from supported currencies or languages alone. JugadaMax does not provide VPN
            or false-location guidance.
          </p>
          <JurisdictionWarning className="mt-4">{SLOTORO_RESTRICTED_WARNING}</JurisdictionWarning>
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
