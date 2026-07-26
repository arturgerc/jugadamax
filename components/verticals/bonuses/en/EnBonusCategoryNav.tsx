import { TrackedLink } from "@/components/analytics/TrackedLink";
import { NAV_LINK_ACCENTS } from "@/components/verticals/bonuses/bonus-visual";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Featured", href: "#featured-promotions" },
  { label: "Comparison", href: "#bonus-comparison" },
  { label: "Casino", href: "#bonuses-casino-fiat" },
  { label: "Crypto", href: "#bonuses-crypto-rewards" },
  { label: "Betting", href: "#bonuses-sports-mixed" },
  { label: "Guides & reviews", href: "#bonus-hub" },
  { label: "Terms", href: "#bonus-terms" },
] as const;

/**
 * Quick in-page category navigation for /en/bonuses.
 */
export function EnBonusCategoryNav() {
  return (
    <nav
      aria-label="Bonus category navigation"
      className="mb-7 rounded-xl border border-white/10 bg-[#111417]/55 p-2.5 sm:mb-10 sm:p-3"
    >
      <p className="mb-2 px-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Jump to section
      </p>
      <div className="flex flex-wrap gap-2">
        {NAV_LINKS.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            event="bonus_page_category_click"
            section="category-nav"
            destination={link.href}
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#0A1931]/55 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors duration-150 sm:text-sm",
              NAV_LINK_ACCENTS[link.href],
            )}
          >
            {link.label}
          </TrackedLink>
        ))}
      </div>
    </nav>
  );
}
