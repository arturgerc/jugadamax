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
  title: "Mejores Casinos Crypto en México",
  description:
    "Ranking de los mejores casinos crypto en México: bonos, métodos de pago en criptomonedas y evaluación editorial. Con divulgación de afiliados y juego responsable +18.",
  path: "/casinos-crypto",
});

export default function CryptoCasinosPage() {
  const casinos = getCasinosByVertical("crypto-casino");
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Casinos Crypto", path: "/casinos-crypto" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Mejores Casinos Crypto en México
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Comparamos casinos crypto disponibles para jugadores en México según seguridad, métodos de
          pago en criptomonedas, licencias y experiencia de usuario.
        </p>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosure />
        <ResponsibleGamblingNotice />
      </div>

      <section aria-label="Ranking de casinos crypto" className="mb-10">
        <RankingList casinos={casinos} vertical="crypto-casino" />
      </section>

      <section aria-label="Comparativa de casinos crypto">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Comparativa</h2>
        <ComparisonTable casinos={casinos} vertical="crypto-casino" />
      </section>
    </Container>
  );
}
