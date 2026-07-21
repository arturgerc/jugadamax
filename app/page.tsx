import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { SocialLinks } from "@/components/social/SocialLinks";
import { HomepageHeroV3 } from "@/components/home/HomepageHeroV3";
import { HomepageCasinoRanking } from "@/components/home/HomepageCasinoRanking";
import { QuickCategories } from "@/components/home/QuickCategories";
import { HomepageTrustStrip } from "@/components/home/HomepageTrustStrip";
import { HomepageLatestContent } from "@/components/home/HomepageLatestContent";
import { HomepageActivePromos } from "@/components/home/HomepageActivePromos";
import { HomepageMoreOptions } from "@/components/home/HomepageMoreOptions";
import { HomepageMethodology } from "@/components/home/HomepageMethodology";
import { HomepageFAQ } from "@/components/home/HomepageFAQ";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "JugadaMax — Casinos online, bonos y crypto casinos en México",
    description:
      "Compara casinos crypto, casinos fiat, bonos, slots y live casino para México y LATAM. Información editorial para mayores de 18 años con juego responsable.",
    path: "/",
    languageAlternates: {
      "es-MX": "/",
      en: "/en",
    },
  }),
  title: {
    absolute: "JugadaMax — Casinos online, bonos y crypto casinos en México",
  },
};

export default function Home() {
  return (
    <>
      <SocialLinks variant="floating" />
      <HomepageHeroV3 />
      <HomepageCasinoRanking />
      <QuickCategories />
      <HomepageTrustStrip />
      <HomepageLatestContent />
      <HomepageActivePromos />
      <HomepageMoreOptions />
      <HomepageMethodology />
      <HomepageFAQ />
    </>
  );
}
