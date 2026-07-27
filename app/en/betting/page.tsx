import type { Metadata } from "next";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { EnBettingPageHero } from "@/components/verticals/betting/en/EnBettingPageHero";
import { EnBettingPageTrustStrip } from "@/components/verticals/betting/en/EnBettingPageTrustStrip";
import { EnBettingQuickNav } from "@/components/verticals/betting/en/EnBettingQuickNav";
import { EnBettingPrimarySelection } from "@/components/verticals/betting/en/EnBettingPrimarySelection";
import { EnBettingSecondarySelection } from "@/components/verticals/betting/en/EnBettingSecondarySelection";
import { EnBettingComparison } from "@/components/verticals/betting/en/EnBettingComparison";
import { EnBettingLocalReference } from "@/components/verticals/betting/en/EnBettingLocalReference";
import { EnBettingEducation } from "@/components/verticals/betting/en/EnBettingEducation";
import { EnBettingRelatedRoutes } from "@/components/verticals/betting/en/EnBettingRelatedRoutes";
import { EN_BETTING_ACTIVE_SIX } from "@/components/verticals/betting/en/en-betting-page-config";
import { uniqueEnBettingPayments } from "@/components/verticals/betting/en/en-betting-data";

export const metadata: Metadata = buildEnMetadata({
  title: "Sports Betting Sites — Editorial Comparison",
  description:
    "Compare sportsbooks on markets, payments, promotions, KYC, withdrawals and editorial assessment. Always check live odds and terms. Adults 18+.",
  path: "/en/betting",
  languageAlternates: {
    "es-MX": "/apuestas",
    en: "/en/betting",
  },
});

/**
 * English Betting Page V2 — purpose-designed sportsbook category page.
 * Parity with Spanish /apuestas architecture; English copy and /en/reviews routes.
 */
export default function EnBettingPage() {
  const payments = uniqueEnBettingPayments(
    EN_BETTING_ACTIVE_SIX.map((entry) => entry.operatorId),
  );
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Betting", path: "/en/betting" },
  ]);

  return (
    <Container className="max-w-7xl py-4 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <EnBettingPageHero />
      <EnBettingPageTrustStrip />
      <EnBettingQuickNav />
      <EnBettingPrimarySelection />
      <EnBettingSecondarySelection />
      <EnBettingComparison />
      <EnBettingLocalReference />
      <EnBettingEducation paymentMethods={payments} />
      <EnBettingRelatedRoutes />
    </Container>
  );
}
