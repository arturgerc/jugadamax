import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o ya no está disponible en JugadaMax.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <Container className="py-16 sm:py-20">
      <section className="mx-auto max-w-2xl rounded-xl border border-border/60 bg-card p-6 text-center sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Error 404</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Página no encontrada
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          La página que buscas no existe o ya no está disponible. Puedes volver al inicio para seguir
          explorando las guías y reseñas de JugadaMax.
        </p>
        <Link
          href="/"
          className={cn(
            "mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
            focusRing,
          )}
        >
          Volver al inicio
        </Link>
      </section>
    </Container>
  );
}
