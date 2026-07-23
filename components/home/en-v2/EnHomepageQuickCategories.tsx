import { HomepageContainer } from "@/components/home/HomepageContainer";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  EN_HOME_CATEGORIES,
  EN_HOME_SECONDARY_LINKS,
} from "@/components/home/en-v2/en-home-config";
import { cn } from "@/lib/utils";

function CategoryIcon({
  kind,
}: {
  kind: (typeof EN_HOME_CATEGORIES)[number]["icon"];
}) {
  const className = "size-4 shrink-0 text-primary";

  switch (kind) {
    case "crypto":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M12 3.5 5.5 6.2v5.1c0 4.2 2.8 7.9 6.5 9.2 3.7-1.3 6.5-5 6.5-9.2V6.2L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "fiat":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <rect x="4" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "bonus":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M12 4l1.8 3.6L18 8.4l-3 2.9.7 4.1L12 13.8 8.3 15.4 9 11.3 6 8.4l4.2-.8L12 4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

/**
 * English homepage category navigation — existing /en routes only.
 */
export function EnHomepageQuickCategories({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="en-explore-category-heading"
      className={cn("py-6 sm:py-8", className)}
    >
      <HomepageContainer>
        <div className="max-w-2xl space-y-1">
          <h2
            id="en-explore-category-heading"
            className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
          >
            Explore by category
          </h2>
          <p className="text-sm text-muted-foreground">
            Jump to the section you need without scrolling the full page.
          </p>
        </div>

        <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {EN_HOME_CATEGORIES.map((cat, index) => (
            <li key={cat.href} className="min-w-0">
              <TrackedLink
                href={cat.href}
                event="homepage_category_click"
                section="categories"
                position={index + 1}
                destination={cat.href}
                className="flex h-full min-h-[105px] flex-col rounded-lg border border-border/60 bg-card p-3.5 transition-colors hover:border-primary/60 sm:min-h-[115px] sm:p-4"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-md border border-primary/20 bg-primary/8">
                  <CategoryIcon kind={cat.icon} />
                </span>
                <span className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                  {cat.label}
                </span>
                <span className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                  {cat.description}
                </span>
              </TrackedLink>
            </li>
          ))}
        </ul>

        <nav aria-label="Secondary English links" className="mt-4 flex flex-wrap gap-2">
          {EN_HOME_SECONDARY_LINKS.map((link, index) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              event="homepage_category_click"
              section="categories"
              position={`secondary-${index + 1}`}
              destination={link.href}
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-[#16233f]/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {link.label}
            </TrackedLink>
          ))}
        </nav>
      </HomepageContainer>
    </section>
  );
}
