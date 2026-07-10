import type { Metadata } from "next";
import Link from "next/link";
import { getCasinosByVertical } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { RankingList } from "@/components/ranking/RankingList";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { OperatorCta } from "@/components/trust/OperatorCta";
import { BetssonFeaturedCard } from "@/components/affiliate/BetssonFeaturedCard";
import { FiatCasinoInfoSections } from "@/components/verticals/FiatCasinoInfoSections";
import {
  MELBET_AFFILIATE_URL,
  ONE_XBET_AFFILIATE_URL,
} from "@/lib/affiliate/constants";

export const metadata: Metadata = buildMetadata({
  title: "Casinos fiat en México",
  description:
    "Compara casinos online fiat, slots, live casino, bonos y operadores mixtos para México. Revisa términos oficiales, pagos, verificación y límites.",
  path: "/casinos-fiat",
});

const mixedOperators = [
  {
    id: "1xbet",
    name: "1xBet",
    link: {
      market: "mx",
      url: ONE_XBET_AFFILIATE_URL,
      label: "Ver 1xBet",
      isAffiliate: true,
      rel: "sponsored nofollow noopener noreferrer",
    },
    description:
      "1xBet es un operador mixto que puede combinar apuestas deportivas, casino online, slots y live casino según el mercado y los términos oficiales. Antes de registrarte, revisa bonos, métodos de pago, verificación, límites y disponibilidad para tu jurisdicción.",
  },
  {
    id: "melbet",
    name: "Melbet",
    link: {
      market: "mx",
      url: MELBET_AFFILIATE_URL,
      label: "Ver Melbet",
      isAffiliate: true,
      rel: "sponsored nofollow noopener noreferrer",
    },
    description:
      "Melbet es un operador mixto con secciones de apuestas deportivas y casino online. La disponibilidad de juegos, bonos, pagos, verificación y límites depende de los términos oficiales del operador y de tu jurisdicción.",
  },
] as const;

function uniqueFiatPayments(casinos: ReturnType<typeof getCasinosByVertical>) {
  const names = new Set<string>();
  for (const casino of casinos) {
    for (const p of casino.payments ?? []) {
      if (p.kind === "fiat") names.add(p.name);
    }
  }
  return [...names];
}

export default function FiatCasinosPage() {
  // Betsson is featured as the primary Mexico fiat partner above; exclude the
  // placeholder editorial entry from the ranking to avoid duplication.
  const casinos = getCasinosByVertical("fiat-casino").filter((c) => c.id !== "betsson");
  const fiatPayments = uniqueFiatPayments(casinos);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Casinos Fiat", path: "/casinos-fiat" },
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
            Mejores Casinos Fiat en México
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Comparamos casinos con métodos de pago tradicionales para jugadores en México según
            seguridad, opciones de depósito, bonos informados por el operador y experiencia de
            usuario.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la página">
            <li className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              OXXO · SPEI · Tarjetas
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
      </div>

      <section aria-labelledby="betsson-fiat-heading" className="mb-8">
        <h2
          id="betsson-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Partner destacado para México
        </h2>
        <BetssonFeaturedCard context="fiat" />
      </section>

      <section aria-labelledby="operadores-mixtos-heading" className="mb-8">
        <h2
          id="operadores-mixtos-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Operadores mixtos: casino + apuestas
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Algunos operadores de México/LATAM combinan casino fiat, slots, live casino y apuestas
          deportivas en una sola cuenta. Betsson MX es nuestro partner fiat principal para México;
          1xBet y Melbet se presentan como operadores mixtos de casino y apuestas. Estos operadores
          pueden incluir secciones de casino, slots, live casino y apuestas deportivas según el
          mercado. Revisa siempre términos oficiales, disponibilidad, bonos, métodos de pago,
          verificación y límites antes de registrarte.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {mixedOperators.map((operator) => (
            <article
              key={operator.id}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{operator.name}</h3>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                  Operador mixto
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {operator.description}
              </p>
              <p className="inline-flex w-fit items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2.5 py-1 text-xs font-medium text-emerald-400">
                18+ | Juega con responsabilidad
              </p>
              <div className="mt-auto">
                <OperatorCta link={operator.link} className="w-full sm:w-auto" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="codere-fiat-heading" className="mb-8">
        <h2
          id="codere-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Operadores locales
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
                Codere puede ser relevante para usuarios que comparan casino fiat y operadores
                locales en México. Revisa términos oficiales, métodos de pago, bonos, verificación
                y límites.
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

      <section aria-label="Ranking de casinos fiat" className="mb-6">
        <RankingList casinos={casinos} vertical="fiat-casino" />
      </section>

      <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        El orden se basa en nuestra{" "}
        <Link
          href="/como-evaluamos"
          className="font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
        >
          metodología editorial
        </Link>
        . Las promociones, métodos de pago y condiciones pueden cambiar; verifica siempre la oferta
        vigente en el sitio del operador.
      </p>

      <section aria-labelledby="comparativa-fiat-heading" className="mb-12 sm:mb-14">
        <h2
          id="comparativa-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Comparativa de casinos fiat
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Resumen de operadores, bonos informados y métodos de pago tradicionales disponibles.
        </p>
        <div className="mt-5 min-w-0 max-w-full">
          <ComparisonTable casinos={casinos} vertical="fiat-casino" />
        </div>
      </section>

      <section aria-labelledby="fiat-rutas-relacionadas-heading" className="mb-12">
        <h2
          id="fiat-rutas-relacionadas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Rutas relacionadas
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Algunos usuarios comparan primero el casino fiat, mientras que otros prefieren el casino
          crypto o las guías de bonos. Las apuestas deportivas son una sección secundaria dentro de
          un sitio con enfoque principal en casino.
        </p>
        <nav aria-label="Enlaces relacionados" className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/bonos"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Bonos de casino
          </Link>
          <Link
            href="/casinos-crypto"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Casinos crypto
          </Link>
          <Link
            href="/guias/casinos-con-usdt-mexico"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Casinos con USDT en México
          </Link>
          <Link
            href="/apuestas"
            className="inline-flex min-h-11 items-center rounded-lg border border-dashed border-border/60 bg-card/40 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Apuestas deportivas (sección adicional)
          </Link>
        </nav>
      </section>

      <FiatCasinoInfoSections paymentMethods={fiatPayments} />
    </Container>
  );
}
