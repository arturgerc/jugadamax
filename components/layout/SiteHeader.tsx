import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { primaryNav } from "@/components/layout/nav-links";
import { Logo } from "@/components/brand/Logo";

/**
 * Site header. Sticky but reserves its height via the layout so it never covers
 * content (FR-032). Desktop shows the primary nav; mobile uses MobileNav.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[var(--jm-navy)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--jm-navy)]/80">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="JugadaMax — Inicio" className="inline-flex items-center">
          <Logo decorative />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 md:flex">
          {primaryNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
