"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { EnMobileNav } from "@/components/layout/EnMobileNav";
import { enDesktopNav } from "@/components/layout/en-nav-links";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/brand/Logo";
import { focusRing, cn } from "@/lib/utils";

export function EnSiteHeader() {
  const pathname = usePathname() ?? "/en";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[var(--jm-navy)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--jm-navy)]/80">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link
          href="/en"
          aria-label="JugadaMax Global — Home"
          className={cn("inline-flex min-h-11 items-center rounded-md", focusRing)}
        >
          <Logo decorative />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {enDesktopNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                focusRing,
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentPath={pathname} className="hidden sm:flex" />
          <EnMobileNav currentPath={pathname} />
        </div>
      </Container>
    </header>
  );
}
