"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { EnMobileNav } from "@/components/layout/EnMobileNav";
import { enDesktopNav, isEnglishNavActive } from "@/components/layout/en-nav-links";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/brand/Logo";
import { focusRing, cn } from "@/lib/utils";

/**
 * English site header — layout parity with Spanish SiteHeader.
 * Nav items/hrefs come from enDesktopNav; labels must not wrap.
 */
export function EnSiteHeader() {
  const pathname = usePathname() ?? "/en";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[var(--jm-navy)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--jm-navy)]/80">
      <Container className="relative flex h-16 max-w-7xl items-center justify-between gap-3 xl:gap-4">
        <Link
          href="/en"
          aria-label="JugadaMax Global — Home"
          className={cn("inline-flex min-h-11 shrink-0 items-center rounded-md", focusRing)}
        >
          <Logo decorative />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-4"
        >
          {enDesktopNav.map((link) => {
            const active = isEnglishNavActive(pathname, link.href);
            return (
              <Link
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
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher currentPath={pathname} className="hidden sm:flex" />
          <EnMobileNav currentPath={pathname} />
        </div>
      </Container>
    </header>
  );
}
