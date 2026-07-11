import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested does not exist or is no longer available on JugadaMax.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function EnNotFoundPage() {
  return (
    <Container className="py-16 sm:py-20">
      <section className="mx-auto max-w-2xl rounded-xl border border-border/60 bg-card p-6 text-center sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Error 404</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          The page you requested does not exist or is no longer available. Return home to continue
          browsing JugadaMax guides and reviews.
        </p>
        <Link
          href="/en"
          className={cn(
            "mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
            focusRing,
          )}
        >
          Back to home
        </Link>
      </section>
    </Container>
  );
}
