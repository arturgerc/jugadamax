import type { Metadata } from "next";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { EnBonusPageHero } from "@/components/verticals/bonuses/en/EnBonusPageHero";
import { EnBonusPageTrustStrip } from "@/components/verticals/bonuses/en/EnBonusPageTrustStrip";
import { EnBonusFeaturedSection } from "@/components/verticals/bonuses/en/EnBonusFeaturedSection";
import { EnBonusCategoryNav } from "@/components/verticals/bonuses/en/EnBonusCategoryNav";
import { EnBonusComparison } from "@/components/verticals/bonuses/en/EnBonusComparison";
import { EnBonusDirectory } from "@/components/verticals/bonuses/en/EnBonusDirectory";
import { EnBonusContentHub } from "@/components/verticals/bonuses/en/EnBonusContentHub";
import { EnBonusEducationSections } from "@/components/verticals/bonuses/en/EnBonusEducationSections";
import { EN_BONUS_RELATED_LINKS } from "@/components/verticals/bonuses/en/en-bonus-page-config";

export const metadata: Metadata = buildEnMetadata({
  title: "Casino bonuses — promotions and key conditions",
  description:
    "Compare casino, crypto and sports promotions: minimum deposit, wagering, validity, promo codes and key terms. Includes English-only XON.BET and Slotoro. 18+.",
  path: "/en/bonuses",
  languageAlternates: {
    "es-MX": "/bonos",
    en: "/en/bonuses",
  },
});

export default function EnBonusesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Bonuses", path: "/en/bonuses" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <EnBonusPageHero />
      <EnBonusPageTrustStrip />
      <EnBonusFeaturedSection />
      <EnBonusCategoryNav />
      <EnBonusComparison />
      <EnBonusDirectory />
      <EnBonusContentHub />
      <EnBonusEducationSections />

      <section
        aria-labelledby="en-bonuses-also-review-heading"
        className="mb-2 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121820] to-[#0A1931]/40 p-4 sm:mb-4 sm:p-5"
      >
        <h2
          id="en-bonuses-also-review-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          You may also review
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Explore rankings, guides and reviews before registering.
        </p>
        <nav aria-label="Related links" className="mt-4 flex flex-wrap gap-2">
          {EN_BONUS_RELATED_LINKS.map((link) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              event="bonus_page_category_click"
              section="related-links"
              destination={link.href}
              className="inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#111417]/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary/50 hover:bg-primary/10"
            >
              {link.label}
            </TrackedLink>
          ))}
        </nav>
      </section>
    </Container>
  );
}
