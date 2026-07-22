import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { BonusPageHero } from "@/components/verticals/bonuses/BonusPageHero";
import { BonusPageTrustStrip } from "@/components/verticals/bonuses/BonusPageTrustStrip";
import { BonusFeaturedSection } from "@/components/verticals/bonuses/BonusFeaturedSection";
import { BonusCategoryNav } from "@/components/verticals/bonuses/BonusCategoryNav";
import { BonusComparison } from "@/components/verticals/bonuses/BonusComparison";
import { BonusDirectory } from "@/components/verticals/bonuses/BonusDirectory";
import { BonusContentHub } from "@/components/verticals/bonuses/BonusContentHub";
import { BonusEducationSections } from "@/components/verticals/bonuses/BonusEducationSections";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export const metadata: Metadata = buildMetadata({
  title: "Bonos de casino en México",
  description:
    "Compara promociones de casino, crypto y apuestas en México: depósito mínimo, wagering, vigencia, códigos y condiciones clave. 18+.",
  path: "/bonos",
});

const RELATED_LINKS = [
  { label: "Casinos crypto", href: "/casinos-crypto" },
  { label: "Casinos fiat", href: "/casinos-fiat" },
  { label: "Casinos sin KYC", href: "/casinos-sin-kyc" },
  { label: "Apuestas", href: "/apuestas" },
  { label: "Reseñas", href: "/reviews" },
  { label: "Guías", href: "/guias" },
] as const;

export default function BonosPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Bonos", path: "/bonos" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <BonusPageHero />
      <BonusPageTrustStrip />
      <BonusFeaturedSection />
      <BonusCategoryNav />
      <BonusComparison />
      <BonusDirectory />
      <BonusContentHub />
      <BonusEducationSections />

      <section
        aria-labelledby="bonos-tambien-revisar-heading"
        className="mb-2 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121820] to-[#0A1931]/40 p-4 sm:mb-4 sm:p-5"
      >
        <h2
          id="bonos-tambien-revisar-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          También puedes revisar
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Explora rankings, guías y reseñas antes de registrarte.
        </p>
        <nav aria-label="Enlaces relacionados" className="mt-4 flex flex-wrap gap-2">
          {RELATED_LINKS.map((link) => (
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
