import type { Metadata } from "next";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";

export const metadata: Metadata = {
  ...buildEnMetadata({
    title: "Fiat Casinos — Global Coverage & Payment Guides",
    description:
      "Editorial overview of fiat online casinos for global readers. Payment-method context, jurisdiction notes and responsible gambling. Coverage is being expanded.",
    path: "/en/casinos-fiat",
    languageAlternates: {
      "es-MX": "/casinos-fiat",
      en: "/en/casinos-fiat",
    },
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function EnFiatCasinosPage() {
  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Fiat Casinos — Global Coverage
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            JugadaMax provides editorial coverage of fiat online casinos for international readers.
            We explain payment methods, licensing context and what to verify before registering —
            without fabricated rankings or guaranteed outcomes.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <JurisdictionWarning>
          Availability depends on your jurisdiction and official operator terms. Do not use VPNs or
          false location information to access restricted services.
        </JurisdictionWarning>

        <section className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-foreground">What we cover</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Fiat casino reviews and comparison pages for global audiences are being expanded. When
            we publish rankings, each operator is assessed on safety, published licensing information,
            payment options, user experience and responsible gambling messaging.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Availability of specific brands, currencies and payment methods depends on each
            operator&apos;s official terms — not on affiliate marketing claims.
          </p>
        </section>

        <section className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-foreground">Payment-method context</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>Cards, e-wallets and bank transfers vary by operator and region.</li>
            <li>Deposit and withdrawal limits, fees and processing times are set by each brand.</li>
            <li>Verification (KYC) requirements depend on jurisdiction and operator policy.</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            For Mexico-first fiat coverage in Spanish, see our{" "}
            <Link href="/casinos-fiat" className="font-medium text-primary underline underline-offset-2">
              Spanish fiat casinos section
            </Link>
            .
          </p>
        </section>

        <div className="space-y-3">
          <AffiliateDisclosureEn />
          <ResponsibleGamblingNoticeEn />
        </div>
      </div>
    </Container>
  );
}
