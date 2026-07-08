import type { Metadata } from "next";
import Link from "next/link";
import type { Casino } from "@/types/content";
import { getCasinos, getCasinosByVertical } from "@/lib/content";
import {
  BETFURY_AFFILIATE_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { QuickCategories } from "@/components/home/QuickCategories";
import { BonusHighlights } from "@/components/home/BonusHighlights";
import { GuidesPreview } from "@/components/content/GuidesPreview";
import { NewsPreview } from "@/components/content/NewsPreview";
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

/** Editorial/rejected/hold operators excluded from homepage surfaces only. */
const HOMEPAGE_EXCLUDED_OPERATOR_IDS = new Set([
  "cryptocasino",
  "ethcasino",
  "ltccasino",
]);

/** Active Mexico/LATAM crypto partners for homepage preview (not stale seed registry). */
const HOMEPAGE_CRYPTO_PREVIEW: Casino[] = [
  {
    id: "500-casino",
    slug: "500-casino",
    name: "500 Casino",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 1 },
    affiliateUrl: FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
    summary:
      "Candidato de casino crypto para México/LATAM. Revisa términos, disponibilidad, verificación y métodos de pago antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "gamdom",
    slug: "gamdom",
    name: "Gamdom",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 2 },
    affiliateUrl: GAMDOM_GLOBAL_AFFILIATE_URL,
    summary:
      "Candidato de casino crypto internacional. Revisa disponibilidad, métodos de pago, límites y verificación antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "betfury",
    slug: "betfury",
    name: "BetFury",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 3 },
    affiliateUrl: BETFURY_AFFILIATE_URL,
    summary:
      "Candidato de casino crypto y casino gamificado. Revisa promociones, términos, requisitos de apuesta, verificación y jurisdicción antes de registrarte.",
    locale: "es-MX",
  },
];

const verticalCtas = [
  { label: "Casinos Crypto", href: "/casinos-crypto" },
  { label: "Casinos Fiat", href: "/casinos-fiat" },
  { label: "Apuestas", href: "/apuestas" },
] as const;

export default function Home() {
  const cryptoCasinos = HOMEPAGE_CRYPTO_PREVIEW.slice(0, PREVIEW_COUNT);
  const fiatCasinos = getCasinosByVertical("fiat-casino")
    .filter((casino) => !HOMEPAGE_EXCLUDED_OPERATOR_IDS.has(casino.id))
    .slice(0, PREVIEW_COUNT);
  const sportsbooks = getCasinosByVertical("sportsbook")
    .filter((casino) => !HOMEPAGE_EXCLUDED_OPERATOR_IDS.has(casino.id))
    .slice(0, PREVIEW_COUNT);
  const allCasinos = getCasinos().filter(
    (casino) => !HOMEPAGE_EXCLUDED_OPERATOR_IDS.has(casino.id),
  );

  return (
    <>
      <SocialLinks variant="floating" />
      <Hero />

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

          <div className="mt-6">
            <RankingList casinos={cryptoCasinos} vertical="crypto-casino" />
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
          <div className="mt-6">
            <RankingList casinos={fiatCasinos} vertical="fiat-casino" />
          </div>
        </Container>
      </section>

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

      <BonusHighlights casinos={allCasinos} />

      <section aria-labelledby="metodologia-heading" className="py-10">
        <Container>
          <div className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
            <h2
              id="metodologia-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Cómo evaluamos los casinos
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Nuestros rankings reflejan una evaluación editorial, no un hecho neutral. Analizamos
              cada operador con criterios claros y publicamos nuestra metodología para que sepas cómo
              ordenamos las listas.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>Seguridad y licencias informadas por el operador.</li>
              <li>Métodos de pago (criptomonedas o métodos locales en México).</li>
              <li>Experiencia de usuario, catálogo y soporte.</li>
              <li>Claridad de bonos y condiciones, sin urgencia falsa.</li>
            </ul>
            <Link
              href="/como-evaluamos"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Ver metodología completa
            </Link>
          </div>
        </Container>
      </section>

      <GuidesPreview />

      <NewsPreview />
    </>
  );
}
