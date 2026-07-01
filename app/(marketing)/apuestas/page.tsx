import type { Metadata } from "next";
import { getCasinosByVertical } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { RankingList } from "@/components/ranking/RankingList";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";

export const metadata: Metadata = buildMetadata({
  title: "Mejores Casas de Apuestas en México",
  description:
    "Ranking de casas de apuestas deportivas en México: mercados, métodos de pago locales y evaluación editorial. Con divulgación de afiliados y juego responsable +18.",
  path: "/apuestas",
});

export default function BettingSitesPage() {
  const casinos = getCasinosByVertical("sportsbook");
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Apuestas", path: "/apuestas" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Mejores Casas de Apuestas en México
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Comparamos casas de apuestas deportivas disponibles en México según seguridad, mercados,
          métodos de pago y experiencia de usuario.
        </p>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosure />
        <ResponsibleGamblingNotice />
      </div>

      <section aria-label="Ranking de casas de apuestas" className="mb-10">
        <RankingList casinos={casinos} vertical="sportsbook" />
      </section>

      <section aria-label="Comparativa de casas de apuestas">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Comparativa</h2>
        <ComparisonTable casinos={casinos} vertical="sportsbook" />
      </section>
    </Container>
  );
}
