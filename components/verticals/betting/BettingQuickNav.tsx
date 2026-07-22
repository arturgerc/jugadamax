import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  BETTING_QUICK_LINKS,
  BETTING_QUICK_LINKS_MOBILE,
} from "@/components/verticals/betting/betting-page-config";

/**
 * Compact in-page navigation for Betting Page V2.
 * Mobile shows a shorter subset; desktop keeps the full set.
 */
export function BettingQuickNav() {
  return (
    <nav
      aria-label="Navegación de la página de apuestas"
      className="mb-4 flex flex-wrap gap-1.5 sm:mb-10 sm:gap-2"
    >
      {BETTING_QUICK_LINKS_MOBILE.map((link) => (
        <TrackedLink
          key={`mobile-${link.href}`}
          href={link.href}
          event="betting_page_nav_click"
          section="quick-nav"
          destination={link.href}
          className="inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#111417]/70 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 sm:hidden"
        >
          {link.label}
        </TrackedLink>
      ))}
      {BETTING_QUICK_LINKS.map((link) => (
        <TrackedLink
          key={`desktop-${link.href}`}
          href={link.href}
          event="betting_page_nav_click"
          section="quick-nav"
          destination={link.href}
          className="hidden min-h-11 items-center rounded-full border border-white/12 bg-[#111417]/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 sm:inline-flex"
        >
          {link.label}
        </TrackedLink>
      ))}
    </nav>
  );
}
