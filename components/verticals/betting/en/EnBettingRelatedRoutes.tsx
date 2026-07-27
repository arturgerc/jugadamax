import { TrackedLink } from "@/components/analytics/TrackedLink";

const RELATED = [
  { href: "/en/casinos-fiat", label: "Fiat casinos" },
  { href: "/en/casinos-crypto", label: "Crypto casinos" },
  { href: "/en/bonuses", label: "Bonuses" },
  { href: "/en/guides", label: "Guides" },
  { href: "/en/reviews", label: "Reviews" },
  { href: "/en/how-we-review", label: "How we review" },
  { href: "/en/responsible-gambling", label: "Responsible gambling" },
] as const;

/**
 * Related commercial and editorial routes for /en/betting.
 */
export function EnBettingRelatedRoutes() {
  return (
    <section
      aria-labelledby="en-betting-related-heading"
      className="mb-8 mt-8 sm:mb-10 sm:mt-10 lg:mb-12 lg:mt-12"
    >
      <h2
        id="en-betting-related-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
      >
        You may also review
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Combine sportsbook with casino, bonuses, guides and reviews before deciding. JugadaMax
        remains primarily focused on online casino.
      </p>
      <nav aria-label="Related routes" className="mt-4 flex flex-wrap gap-2">
        {RELATED.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            event="betting_page_category_click"
            section="related-links"
            destination={link.href}
            className="inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#111417]/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
          >
            {link.label}
          </TrackedLink>
        ))}
      </nav>
    </section>
  );
}
