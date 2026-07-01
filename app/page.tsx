import type { Metadata } from "next";
import Link from "next/link";
import { getCasinosByVertical } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { QuickCategories } from "@/components/home/QuickCategories";
import { RankingList } from "@/components/ranking/RankingList";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "JugadaMax — Casinos Crypto, Casinos Fiat y Apuestas en México",
    description:
      "Rankings claros y reseñas honestas de casinos crypto, casinos fiat y casas de apuestas en México. Evaluamos seguridad, pagos, licencias y experiencia de usuario. +18 juego responsable.",
    path: "/",
  }),
  title: {
    absolute: "JugadaMax — Casinos Crypto, Casinos Fiat y Apuestas en México",
  },
};

// Homepage crypto preview shows the top few operators; the full ranking lives on
// /casinos-crypto. Renders only real, available entries (no fabricated filler).
const CRYPTO_PREVIEW_COUNT = 3;

const verticalCtas = [
  { label: "Casinos Crypto", href: "/casinos-crypto" },
  { label: "Casinos Fiat", href: "/casinos-fiat" },
  { label: "Apuestas", href: "/apuestas" },
] as const;

export default function Home() {
  const cryptoCasinos = getCasinosByVertical("crypto-casino").slice(0, CRYPTO_PREVIEW_COUNT);

  return (
    <>
      <Hero />

      <QuickCategories />

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

      <section aria-labelledby="trust-heading" className="py-10">
        <Container>
          <h2 id="trust-heading" className="mb-4 text-xl font-semibold text-foreground">
            Transparencia y juego responsable
          </h2>
          <div className="space-y-3">
            <AffiliateDisclosure />
            <ResponsibleGamblingNotice />
          </div>
        </Container>
      </section>
    </>
  );
}
