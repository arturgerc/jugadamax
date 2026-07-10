import type { Metadata } from "next";
import Link from "next/link";
import type { Casino } from "@/types/content";
import { getCasinosByVertical } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { RankingList } from "@/components/ranking/RankingList";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { BetssonFeaturedCard } from "@/components/affiliate/BetssonFeaturedCard";
import { BettingInfoSections } from "@/components/verticals/BettingInfoSections";
import {
  MELBET_AFFILIATE_URL,
  ONE_XBET_AFFILIATE_URL,
} from "@/lib/affiliate/constants";

export const metadata: Metadata = buildMetadata({
  title: "Apuestas deportivas en México",
  description:
    "Sección secundaria de JugadaMax para comparar apuestas deportivas y operadores mixtos. El foco principal del sitio sigue siendo casino online.",
  path: "/apuestas",
});

const affiliateSportsbooks: Casino[] = [
  {
    id: "1xbet",
    slug: "1xbet",
    name: "1xBet",
    verticals: ["sportsbook"],
    rankByVertical: { sportsbook: 4 },
    affiliateUrl: ONE_XBET_AFFILIATE_URL,
    summary:
      "Operador mixto con enfoque en apuestas deportivas y también casino online / live casino según los términos oficiales y el mercado. La disponibilidad, métodos de pago, bonos y verificación dependen de tu jurisdicción y de las condiciones vigentes del operador.",
    locale: "es-MX",
  },
  {
    id: "melbet",
    slug: "melbet",
    name: "Melbet",
    verticals: ["sportsbook"],
    rankByVertical: { sportsbook: 5 },
    affiliateUrl: MELBET_AFFILIATE_URL,
    summary:
      "Operador mixto con secciones de apuestas deportivas y también casino online / live casino según los términos oficiales. Antes de registrarte, revisa disponibilidad, métodos de pago, bonos, verificación y condiciones vigentes en el sitio oficial.",
    locale: "es-MX",
  },
];

function uniquePayments(casinos: Casino[]) {
  const names = new Set<string>();
  for (const casino of casinos) {
    for (const p of casino.payments ?? []) {
      names.add(p.name);
    }
  }
  return [...names];
}

export default function BettingSitesPage() {
  // Betsson and Codere are featured above; exclude placeholder editorial entries
  // from the ranking to avoid duplication and unapproved affiliate CTAs.
  const editorialSportsbooks = getCasinosByVertical("sportsbook").filter(
    (c) => c.id !== "betsson" && c.id !== "codere",
  );
  const casinos = [...editorialSportsbooks, ...affiliateSportsbooks];
  const payments = uniquePayments(casinos);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Apuestas", path: "/apuestas" },
  ]);

  return (
    <Container className="py-8 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Vertical intro */}
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Mejores Casas de Apuestas en México
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Comparamos casas de apuestas deportivas disponibles para jugadores en México según
            seguridad, mercados, métodos de pago, bonos informados por el operador y experiencia de
            usuario.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la página">
            <li className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Fútbol · Liga MX · Deportes
            </li>
            <li className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              México
            </li>
            <li className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-xs font-medium text-accent">
              Evaluación editorial
            </li>
          </ul>
        </div>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosure />
        <ResponsibleGamblingNotice />
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          La disponibilidad depende de tu jurisdicción y de los términos oficiales del operador.
          Métodos de pago, bonos y verificación pueden cambiar sin aviso. Revisa las leyes locales
          y los términos vigentes antes de registrarte.
        </p>
      </div>

      <section aria-labelledby="betsson-apuestas-heading" className="mb-8">
        <h2
          id="betsson-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Partner destacado para México
        </h2>
        <BetssonFeaturedCard context="sportsbook" />
      </section>

      <section aria-labelledby="codere-apuestas-heading" className="mb-8">
        <h2
          id="codere-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Operador local para México
        </h2>
        <article className="mt-4 rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">Codere</h3>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                  Operador mixto local
                </span>
                <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/8 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-amber-400">
                  Partner pendiente
                </span>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Codere es un operador con enfoque local para México que puede combinar apuestas
                deportivas y casino online. JugadaMax está esperando condiciones/tracking de partner;
                antes de registrarte revisa términos oficiales, bonos, pagos, verificación y límites.
              </p>
              <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2.5 py-1 text-xs font-medium text-emerald-400">
                18+ | Juega con responsabilidad
              </p>
            </div>
            <div className="shrink-0 lg:w-56">
              <Link
                href="/reviews/codere"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
              >
                Leer reseña
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section aria-label="Ranking de casas de apuestas" className="mb-6">
        <RankingList casinos={casinos} vertical="sportsbook" />
      </section>

      <div className="mb-10 rounded-lg border border-border/60 bg-card p-4 sm:p-5">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Algunos operadores de apuestas también pueden incluir casino, slots o live casino, pero
          JugadaMax mantiene esta página enfocada en apuestas deportivas. Para casino, revisa también
          las secciones de{" "}
          <Link
            href="/casinos-fiat"
            className="font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
          >
            casinos fiat
          </Link>{" "}
          y{" "}
          <Link
            href="/casinos-crypto"
            className="font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
          >
            casinos crypto
          </Link>
          .
        </p>
      </div>

      <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        El orden se basa en nuestra{" "}
        <Link
          href="/como-evaluamos"
          className="font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
        >
          metodología editorial
        </Link>
        . Las promociones, mercados, cuotas y condiciones pueden cambiar; verifica siempre la
        información vigente en el sitio del operador.
      </p>

      <section aria-labelledby="comparativa-apuestas-heading" className="mb-12 sm:mb-14">
        <h2
          id="comparativa-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Comparativa de casas de apuestas
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Resumen de operadores, bonos informados y métodos de pago disponibles.
        </p>
        <div className="mt-5 min-w-0 max-w-full">
          <ComparisonTable casinos={casinos} vertical="sportsbook" />
        </div>
      </section>

      <section aria-labelledby="apuestas-comparar-casinos-heading" className="mb-12">
        <h2
          id="apuestas-comparar-casinos-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          También puedes comparar casinos
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          JugadaMax tiene un enfoque principal en casino; esta página es para apuestas deportivas,
          pero muchos operadores mixtos también pueden incluir secciones de casino y live casino
          según sus términos oficiales.
        </p>
        <nav aria-label="Enlaces relacionados" className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/casinos-fiat"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Casinos fiat
          </Link>
          <Link
            href="/casinos-crypto"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Casinos crypto
          </Link>
          <Link
            href="/bonos"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Bonos de casino
          </Link>
        </nav>
      </section>

      <BettingInfoSections paymentMethods={payments} />
    </Container>
  );
}
