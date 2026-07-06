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
import { BettingInfoSections } from "@/components/verticals/BettingInfoSections";

export const metadata: Metadata = buildMetadata({
  title: "Mejores Casas de Apuestas en México",
  description:
    "Ranking de casas de apuestas deportivas en México: mercados, métodos de pago locales y evaluación editorial. Con divulgación de afiliados y juego responsable +18.",
  path: "/apuestas",
});

const affiliateSportsbooks: Casino[] = [
  {
    id: "1xbet",
    slug: "1xbet",
    name: "1xBet",
    verticals: ["sportsbook"],
    rankByVertical: { sportsbook: 4 },
    affiliateUrl: "https://reffpa.com/L?tag=d_5806070m_97c_&site=5806070&ad=97",
    summary:
      "Casa de apuestas internacional orientada a LATAM. La disponibilidad, métodos de pago, bonos y verificación dependen de tu jurisdicción y de los términos oficiales del operador.",
    locale: "es-MX",
  },
  {
    id: "melbet",
    slug: "melbet",
    name: "Melbet",
    verticals: ["sportsbook"],
    rankByVertical: { sportsbook: 5 },
    affiliateUrl: "https://refpa3665.com/L?tag=d_5806065m_2170c_&site=5806065&ad=2170",
    summary:
      "Operador internacional de apuestas deportivas con enfoque LATAM. Antes de registrarte, revisa disponibilidad, métodos de pago, bonos, verificación y condiciones vigentes en el sitio oficial.",
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
  const editorialSportsbooks = getCasinosByVertical("sportsbook");
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

      <section aria-label="Ranking de casas de apuestas" className="mb-6">
        <RankingList casinos={casinos} vertical="sportsbook" />
      </section>

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

      <BettingInfoSections paymentMethods={payments} />
    </Container>
  );
}
