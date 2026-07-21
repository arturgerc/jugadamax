"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { desktopNav, isSpanishNavActive } from "@/components/layout/nav-links";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/brand/Logo";
import { focusRing, cn } from "@/lib/utils";

/**
 * Site header. Sticky but reserves its height via the layout so it never covers
 * content (FR-032). Desktop shows the primary nav; mobile uses MobileNav.
 */
export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[var(--jm-navy)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--jm-navy)]/80">
      <Container className="relative flex h-16 max-w-7xl items-center justify-between gap-3 xl:gap-4">
        <Link
          href="/"
          aria-label="JugadaMax — Inicio"
          className={cn("inline-flex min-h-11 shrink-0 items-center rounded-md", focusRing)}
        >
          <Logo decorative />
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden min-w-0 items-center gap-4 lg:flex xl:gap-5"
        >
          {desktopNav.map((link) => {
            const active = isSpanishNavActive(pathname, link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-sm text-sm font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground",
                  focusRing,
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentPath={pathname} className="hidden sm:flex" />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
