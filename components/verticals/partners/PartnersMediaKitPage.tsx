import { PartnersAudienceMarkets } from "@/components/verticals/partners/PartnersAudienceMarkets";
import { PartnersChannels } from "@/components/verticals/partners/PartnersChannels";
import { PartnersCollaborationFormats } from "@/components/verticals/partners/PartnersCollaborationFormats";
import { PartnersContactCTA } from "@/components/verticals/partners/PartnersContactCTA";
import { PartnersContentFormats } from "@/components/verticals/partners/PartnersContentFormats";
import { PartnersCoverageExamples } from "@/components/verticals/partners/PartnersCoverageExamples";
import { PartnersEditorialIdentity } from "@/components/verticals/partners/PartnersEditorialIdentity";
import { PartnersHero } from "@/components/verticals/partners/PartnersHero";
import { PartnersRequirements } from "@/components/verticals/partners/PartnersRequirements";
import { PartnersSnapshot } from "@/components/verticals/partners/PartnersSnapshot";
import { PartnersStandards } from "@/components/verticals/partners/PartnersStandards";
import { PartnersTrustStrip } from "@/components/verticals/partners/PartnersTrustStrip";
import type { PartnersLocale } from "@/components/verticals/partners/partners-config";
import {
  resolvePartnersAuthors,
  resolvePartnersCoverage,
  resolvePartnersSnapshot,
} from "@/components/verticals/partners/partners-data";

/**
 * Shared Partners / Media Kit V2 composition for ES and EN routes.
 */
export function PartnersMediaKitPage({ locale }: { locale: PartnersLocale }) {
  const snapshot = resolvePartnersSnapshot();
  const examples = resolvePartnersCoverage(locale);
  const authors = resolvePartnersAuthors();

  return (
    <>
      <PartnersHero locale={locale} />
      <PartnersTrustStrip locale={locale} />
      <PartnersSnapshot locale={locale} snapshot={snapshot} />
      <PartnersContentFormats locale={locale} />
      <PartnersAudienceMarkets locale={locale} />
      <PartnersChannels locale={locale} />
      <PartnersCollaborationFormats locale={locale} />
      <PartnersRequirements locale={locale} />
      <PartnersStandards locale={locale} />
      <PartnersCoverageExamples locale={locale} examples={examples} />
      <PartnersEditorialIdentity locale={locale} authors={authors} />
      <PartnersContactCTA locale={locale} />
    </>
  );
}
