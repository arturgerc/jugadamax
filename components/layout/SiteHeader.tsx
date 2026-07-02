import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { primaryNav } from "@/components/layout/nav-links";
import { Logo } from "@/components/brand/Logo";
import { focusRing, cn } from "@/lib/utils";

/**
 * Site header. Sticky but reserves its height via the layout so it never covers
 * content (FR-032). Desktop shows the primary nav; mobile uses MobileNav.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[var(--jm-navy)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--jm-navy)]/80">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="JugadaMax — Inicio" className={cn("inline-flex items-center rounded-md", focusRing)}>
          <Logo decorative />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 md:flex">
          {primaryNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                focusRing,
              )}
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
