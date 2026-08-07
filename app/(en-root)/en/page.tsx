import type { Metadata } from "next";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { SocialLinks } from "@/components/social/SocialLinks";
import { EnHomepageHeroV2 } from "@/components/home/en-v2/EnHomepageHeroV2";
import { EnHomepageCasinoRanking } from "@/components/home/en-v2/EnHomepageCasinoRanking";
import { EnHomepageQuickCategories } from "@/components/home/en-v2/EnHomepageQuickCategories";
import { EnHomepageTrustStrip } from "@/components/home/en-v2/EnHomepageTrustStrip";
import { EnHomepageLatestContent } from "@/components/home/en-v2/EnHomepageLatestContent";
import { EnHomepageActivePromos } from "@/components/home/en-v2/EnHomepageActivePromos";
import { EnHomepageMoreOptions } from "@/components/home/en-v2/EnHomepageMoreOptions";
import { EnHomepageMethodology } from "@/components/home/en-v2/EnHomepageMethodology";
import { EnHomepageFAQ } from "@/components/home/en-v2/EnHomepageFAQ";

export const metadata: Metadata = {
  ...buildEnMetadata({
    title: "JugadaMax — Crypto Casinos, Fiat Casinos & Betting Guides",
    description:
      "Independent English editorial coverage of selected crypto casinos, Mexico-facing fiat options and betting guides. Jurisdiction-aware reviews with affiliate disclosure and responsible gambling for adults 18+.",
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

export default function EnHomePage() {
  return (
    <>
      <SocialLinks variant="floating" />
      <EnHomepageHeroV2 />
      <EnHomepageCasinoRanking />
      <EnHomepageQuickCategories />
      <EnHomepageTrustStrip />
      <EnHomepageLatestContent />
      <EnHomepageActivePromos />
      <EnHomepageMoreOptions />
      <EnHomepageMethodology />
      <EnHomepageFAQ />
    </>
  );
}
