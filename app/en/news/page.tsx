import type { Metadata } from "next";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  ...buildEnMetadata({
    title: "News & Updates",
    description:
      "JugadaMax English news and updates on crypto casinos, payments and iGaming editorial coverage.",
    path: "/en/news",
    languageAlternates: {
      "es-MX": "/noticias",
      en: "/en/news",
    },
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function EnNewsIndexPage() {
  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            News & Updates
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Editorial updates on crypto casinos, payments and iGaming coverage from JugadaMax.
          </p>
        </div>
      </header>

      <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
        <p className="text-base leading-relaxed text-muted-foreground">
          English updates are being prepared. For current Spanish updates, visit the{" "}
          <Link href="/noticias" className="font-medium text-primary underline underline-offset-2">
            Spanish news section
          </Link>
          .
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Adults 18+ only. Gambling involves risk. Availability varies by jurisdiction.
        </p>
      </div>
    </Container>
  );
}
