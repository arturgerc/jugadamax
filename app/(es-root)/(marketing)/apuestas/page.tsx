import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { BettingPageHero } from "@/components/verticals/betting/BettingPageHero";
import { BettingPageTrustStrip } from "@/components/verticals/betting/BettingPageTrustStrip";
import { BettingQuickNav } from "@/components/verticals/betting/BettingQuickNav";
import { BettingPrimarySelection } from "@/components/verticals/betting/BettingPrimarySelection";
import { BettingSecondarySelection } from "@/components/verticals/betting/BettingSecondarySelection";
import { BettingComparison } from "@/components/verticals/betting/BettingComparison";
import { BettingLocalReference } from "@/components/verticals/betting/BettingLocalReference";
import { BettingEducation } from "@/components/verticals/betting/BettingEducation";
import { BettingRelatedRoutes } from "@/components/verticals/betting/BettingRelatedRoutes";
import {
  BETTING_ACTIVE_SIX,
} from "@/components/verticals/betting/betting-page-config";
import { uniqueBettingPayments } from "@/components/verticals/betting/betting-data";

export const metadata: Metadata = buildMetadata({
  title: "Casas de apuestas en México",
  description:
    "Compara casas de apuestas en México según mercados, pagos, promociones, KYC, retiros y evaluación editorial. Revisa siempre cuotas y términos vigentes. 18+.",
  path: "/apuestas",
  languageAlternates: {
    "es-MX": "/apuestas",
    en: "/en/betting",
  },
});

/**
 * Betting Page V2 — purpose-designed sportsbook category page.
 * Does not use generic RankingList / ComparisonTable or FeaturedCard wall.
 */
export default function BettingSitesPage() {
  const payments = uniqueBettingPayments(
    BETTING_ACTIVE_SIX.map((entry) => entry.operatorId),
  );
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Apuestas", path: "/apuestas" },
  ]);

  return (
    <Container className="max-w-7xl py-4 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <BettingPageHero />
      <BettingPageTrustStrip />
      <BettingQuickNav />
      <BettingPrimarySelection />
      <BettingSecondarySelection />
      <BettingComparison />
      <BettingLocalReference />
      <BettingEducation paymentMethods={payments} />
      <BettingRelatedRoutes />
    </Container>
  );
}
