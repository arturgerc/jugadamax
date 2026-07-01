import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/**
 * Homepage hero (FR-001).
 *
 * Static, lightweight, mobile-first. No autoplay video, no particle background,
 * no heavy 3D (FR-020). Includes the primary CTA into the crypto ranking and a
 * clear +18 responsible-play note.
 */
export function Hero({ className }: { className?: string }) {
  return (
    <section className={cn("border-b border-border/60 bg-[var(--jm-graphite)]", className)}>
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            México · Crypto-first
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Casinos crypto, casinos fiat y apuestas en México
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Rankings claros y reseñas honestas para elegir operadores con confianza. Evaluamos
            seguridad, pagos, licencias y experiencia de usuario.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/casinos-crypto"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
            >
              Ver casinos crypto
            </Link>
            <Link
              href="/como-evaluamos"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Cómo evaluamos
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Solo para mayores de 18 años. Juega de forma responsable.
          </p>
        </div>
      </Container>
    </section>
  );
}
