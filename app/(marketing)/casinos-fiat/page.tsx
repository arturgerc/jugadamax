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
  title: "Mejores Casinos Fiat en México",
  description:
    "Ranking de casinos fiat en México: bonos, métodos de pago locales (OXXO, SPEI, tarjetas) y evaluación editorial. Con divulgación de afiliados y juego responsable +18.",
  path: "/casinos-fiat",
});

export default function FiatCasinosPage() {
  const casinos = getCasinosByVertical("fiat-casino");
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Casinos Fiat", path: "/casinos-fiat" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Mejores Casinos Fiat en México
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Comparamos casinos con métodos de pago locales en México según seguridad, opciones de pago,
          licencias y experiencia de usuario.
        </p>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosure />
        <ResponsibleGamblingNotice />
      </div>

      <section aria-label="Ranking de casinos fiat" className="mb-10">
        <RankingList casinos={casinos} vertical="fiat-casino" />
      </section>

      <section aria-label="Comparativa de casinos fiat">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Comparativa</h2>
        <ComparisonTable casinos={casinos} vertical="fiat-casino" />
      </section>
    </Container>
  );
}
