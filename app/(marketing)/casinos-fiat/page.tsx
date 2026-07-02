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
import { FiatCasinoInfoSections } from "@/components/verticals/FiatCasinoInfoSections";

export const metadata: Metadata = buildMetadata({
  title: "Mejores Casinos Fiat en México",
  description:
    "Ranking de casinos fiat en México: bonos, métodos de pago locales (OXXO, SPEI, tarjetas) y evaluación editorial. Con divulgación de afiliados y juego responsable +18.",
  path: "/casinos-fiat",
});

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
  const casinos = getCasinosByVertical("fiat-casino");
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

      <FiatCasinoInfoSections paymentMethods={fiatPayments} />
    </Container>
  );
}
