import type { Metadata } from "next";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";

export const metadata: Metadata = buildEnMetadata({
  title: "Sports Betting — Global Editorial Overview",
  description:
    "Sports betting and sportsbook editorial overview for global readers. Responsible gambling, jurisdiction notes and coverage expansion. Adults 18+.",
  path: "/en/betting",
  languageAlternates: {
    "es-MX": "/apuestas",
    en: "/en/betting",
  },
});

export default function EnBettingPage() {
  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,107,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Sports Betting — Editorial Overview
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            JugadaMax covers sports betting and sportsbooks as part of our editorial iGaming media
            project. We do not operate sportsbooks or process bets. Global sportsbook reviews are
            being prepared — we do not list operators without editorial assessment.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <JurisdictionWarning>
          Availability depends on your jurisdiction and official operator terms. Do not use VPNs or
          false location information to access restricted services. Check local laws before betting.
        </JurisdictionWarning>

        <section className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-foreground">What we assess</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>Licensing and terms published by the operator.</li>
            <li>Markets, odds presentation and bet settlement transparency.</li>
            <li>Payment methods, limits and stated withdrawal information.</li>
            <li>Responsible gambling tools and 18+ messaging.</li>
          </ul>
        </section>

        <section className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-foreground">Coverage status</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            English sportsbook rankings are not yet published. When we add reviews, each brand will
            receive balanced editorial coverage — not promotional copy or guaranteed-win claims.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            For Mexico-first sports betting content in Spanish, visit our{" "}
            <Link href="/apuestas" className="font-medium text-primary underline underline-offset-2">
              Spanish betting section
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
