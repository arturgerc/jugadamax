import type { Metadata } from "next";
import Link from "next/link";
import type { Casino } from "@/types/content";
import { getCasinosByVertical } from "@/lib/content";
import { filterCasinosForSurface } from "@/content/operators/status";
import {
  BETFURY_AFFILIATE_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { OfferCard } from "@/components/affiliate/OfferCard";
import { BetssonFeaturedCard } from "@/components/affiliate/BetssonFeaturedCard";
import { HomepageActionGrid } from "@/components/home/HomepageActionGrid";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { QuickCategories } from "@/components/home/QuickCategories";
import { BonusHighlights } from "@/components/home/BonusHighlights";
import { HomepageMethodology } from "@/components/home/HomepageMethodology";
import { HomepageLatestContent } from "@/components/home/HomepageLatestContent";
import { HomepageFAQ } from "@/components/home/HomepageFAQ";
import { RankingList } from "@/components/ranking/RankingList";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { SocialLinks } from "@/components/social/SocialLinks";

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

// Homepage previews show the top few operators per vertical; the full rankings
// live on the vertical pages. Renders only real, available entries (no filler).
const PREVIEW_COUNT = 3;

/** Editorial hero recommendation — BetFury as #1 crypto partner. */
const HOMEPAGE_HERO_FEATURED_CRYPTO: Casino = {
  id: "betfury",
  slug: "betfury",
  name: "BetFury",
  verticals: ["crypto-casino"],
  rankByVertical: { "crypto-casino": 1 },
  affiliateUrl: BETFURY_AFFILIATE_URL,
  logo: {
    src: "/operators/betfury.svg",
    alt: "BetFury",
    width: 80,
    height: 40,
  },
  payments: [
    { name: "BFG", kind: "crypto" },
    { name: "Bitcoin", kind: "crypto" },
    { name: "USDT", kind: "crypto" },
  ],
  licensing: {
    licenseName: "Licencia no verificada por JugadaMax",
    notes:
      "Licencia, disponibilidad, verificación, límites, bonos y retiros deben revisarse en los términos oficiales del operador.",
  },
  summary:
    "Partner crypto destacado con Bonus Cabinet, Free Spins, cashback y promociones por nivel. Revisa términos, disponibilidad, verificación y métodos de pago antes de registrarte.",
  locale: "es-MX",
};

const verticalCtas = [
  { label: "Casinos Crypto", href: "/casinos-crypto" },
  { label: "Casinos Fiat", href: "/casinos-fiat" },
  { label: "Apuestas", href: "/apuestas" },
] as const;

export default function Home() {
  const homepageCasinos = (casinos: Casino[]) =>
    filterCasinosForSurface(casinos, "homepage").filter((c) => c.id !== "betsson");
  const fiatCasinos = homepageCasinos(getCasinosByVertical("fiat-casino")).slice(0, PREVIEW_COUNT);
  const sportsbooks = homepageCasinos(getCasinosByVertical("sportsbook")).slice(
    0,
    PREVIEW_COUNT,
  );

  return (
    <>
      <SocialLinks variant="floating" />
      <Hero
        featuredCasino={HOMEPAGE_HERO_FEATURED_CRYPTO}
        featuredEyebrow="Crypto destacado"
        featuredTopBadge="Top crypto JugadaMax"
        affiliateCtaLabel="Registrarse en BetFury"
        affiliateCtaHref={BETFURY_AFFILIATE_URL}
      />

      <QuickCategories />

      {/* Disclosure + 18+ notice appear BEFORE the first affiliate CTA (ranking). */}
      <section aria-labelledby="trust-heading" className="pt-4">
        <Container>
          <h2 id="trust-heading" className="sr-only">
            Transparencia y juego responsable
          </h2>
          <div className="space-y-3">
            <AffiliateDisclosure />
            <ResponsibleGamblingNotice />
          </div>
        </Container>
      </section>

      <section aria-labelledby="top-crypto-heading" className="py-10">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1">
              <h2
                id="top-crypto-heading"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Top Casinos Crypto en México
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Nuestra selección editorial de casinos con criptomonedas, ordenada por seguridad,
                pagos y experiencia de usuario.
              </p>
            </div>
            <Link
              href="/casinos-crypto"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Ver todos los casinos crypto
            </Link>
          </div>

          <OfferCard
            operatorName="BetFury"
            operatorId="betfury"
            badge="Crypto destacado"
            headline="BetFury: casino crypto con Bonus Cabinet"
            subheadline="Bonos, Free Spins, cashback y promociones por nivel"
            offerText="Hasta 590% + Free Spins según términos oficiales"
            promoCode="d9lksw0db"
            paymentBadges={["BFG", "Crypto", "Free Spins", "Cashback"]}
            featureBullets={[
              "Bonus Cabinet con depósitos escalonados",
              "Free Fury Wheel, cashback y rakeback según nivel",
              "Promociones semanales y mensuales visibles en el operador",
            ]}
            mobileMaxBullets={3}
            primaryCtaLabel="Ver bonos BetFury"
            primaryCtaHref={BETFURY_AFFILIATE_URL}
            secondaryCtaLabel="Leer reseña"
            secondaryCtaHref="/reviews/betfury"
            termsNote="Promociones, free spins, cashback, retiros y verificación dependen de los términos oficiales de BetFury y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Bonus Cabinet",
              title: "Hasta 590% + Free Spins",
              subtitle: "Hasta $10,500 según términos oficiales",
              chips: ["BFG", "Free Spins", "Cashback"],
              variant: "betfury",
              compact: true,
            }}
            visualVariant="crypto"
            logo={{
              src: "/operators/betfury.svg",
              alt: "BetFury",
              width: 80,
              height: 40,
            }}
            className="mt-6"
          />

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              También puedes comparar
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <OfferCard
                operatorName="500 Casino"
                operatorId="500-casino"
                badge="Crypto candidato"
                headline="500 Casino"
                subheadline="Casino crypto, slots y sportsbook"
                offerText="Promociones visibles según términos oficiales"
                paymentBadges={["Crypto", "Slots", "Sportsbook"]}
                featureBullets={[
                  "Casino crypto para comparar",
                  "Slots, live casino y sportsbook",
                  "Revisa términos, pagos y verificación",
                ]}
                primaryCtaLabel="Visitar 500 Casino"
                primaryCtaHref={FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL}
                secondaryCtaLabel="Leer reseña"
                secondaryCtaHref="/reviews/500-casino"
                termsNote="Promociones, pagos, retiros y disponibilidad dependen de términos oficiales y jurisdicción."
                responsibleNote="18+ | Juega con responsabilidad"
                visualVariant="crypto"
                emphasis="comparison-primary"
                visual={{
                  eyebrow: "Crypto casino",
                  title: "500 Casino",
                  subtitle: "Slots y sportsbook",
                  chips: ["Crypto", "Slots", "Sportsbook"],
                  variant: "fivehundred",
                  compact: true,
                }}
                mobileMaxBullets={2}
              />
              <OfferCard
                operatorName="Gamdom"
                operatorId="gamdom"
                badge="Comparar"
                headline="Gamdom"
                subheadline="Alternativa crypto internacional"
                offerText="Disponibilidad y promociones según términos oficiales"
                paymentBadges={["Crypto"]}
                featureBullets={[
                  "Casino crypto internacional para comparar",
                  "Revisa límites, pagos y verificación antes de registrarte",
                ]}
                primaryCtaLabel="Visitar Gamdom"
                primaryCtaHref={GAMDOM_GLOBAL_AFFILIATE_URL}
                secondaryCtaLabel="Ver ranking crypto"
                secondaryCtaHref="/casinos-crypto"
                termsNote="Disponibilidad, bonos, pagos y retiros dependen de términos oficiales y jurisdicción."
                responsibleNote="18+ | Juega con responsabilidad"
                visualVariant="dark"
                emphasis="comparison-secondary"
                mobileMaxBullets={2}
                className="lg:p-4"
              />
            </div>
          </div>

          <nav aria-label="Explorar categorías" className="mt-6 flex flex-wrap gap-3">
            {verticalCtas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
              >
                {cta.label}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <section aria-labelledby="top-fiat-heading" className="py-10">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1">
              <h2
                id="top-fiat-heading"
                className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                Top Casinos Fiat en México
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Casinos con métodos de pago locales en México, evaluados por nuestro equipo
                editorial.
              </p>
            </div>
            <Link
              href="/casinos-fiat"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Ver todos los casinos fiat
            </Link>
          </div>
          <BetssonFeaturedCard context="homepage" />
          {fiatCasinos.length > 0 ? (
            <div className="mt-6">
              <RankingList casinos={fiatCasinos} vertical="fiat-casino" />
            </div>
          ) : null}
        </Container>
      </section>

      <BonusHighlights />

      <HomepageActionGrid />

      {sportsbooks.length > 0 ? (
        <section aria-labelledby="top-betting-heading" className="py-10">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="max-w-2xl space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2
                    id="top-betting-heading"
                    className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                  >
                    Top Casas de Apuestas en México
                  </h2>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                    Sección adicional
                  </span>
                </div>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Sección adicional para comparar operadores con sportsbook. JugadaMax mantiene su
                  enfoque principal en casino; para casino revisa casinos crypto y casinos fiat.
                </p>
              </div>
              <Link
                href="/apuestas"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
              >
                Ver todas las apuestas
              </Link>
            </div>
            <div className="mt-6">
              <RankingList casinos={sportsbooks} vertical="sportsbook" />
            </div>
          </Container>
        </section>
      ) : null}

      <HomepageMethodology />

      <HomepageLatestContent />

      <HomepageFAQ />
    </>
  );
}
