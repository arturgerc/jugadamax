import Link from "next/link";
import {
  EN_REVIEW_FAQ_ITEMS,
  EN_REVIEW_RELATED_ROUTES,
} from "@/components/verticals/reviews/en/en-reviews-config";
import { cn, focusRing } from "@/lib/utils";

/**
 * English Reviews FAQ accordion.
 */
export function EnReviewsFaq() {
  return (
    <section aria-labelledby="en-reviews-faq-heading" className="mb-8 sm:mb-10">
      <h2
        id="en-reviews-faq-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Frequently asked questions about reviews
      </h2>
      <div className="mt-4 max-w-3xl space-y-2">
        {EN_REVIEW_FAQ_ITEMS.map((item) => (
          <details
            key={item.q}
            className="group rounded-lg border border-white/10 bg-[#111417]/60 open:border-primary/25"
          >
            <summary
              className={cn(
                "cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-foreground",
                "[&::-webkit-details-marker]:hidden",
                focusRing,
              )}
            >
              <span className="flex items-center justify-between gap-3">
                {item.q}
                <span
                  aria-hidden="true"
                  className="text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="border-t border-white/8 px-3.5 py-3 text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/**
 * Related English commercial and trust routes.
 */
export function EnReviewsRelatedRoutes() {
  return (
    <section aria-labelledby="en-related-routes-heading" className="mb-2 sm:mb-4">
      <h2
        id="en-related-routes-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Related sections
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
        Continue with rankings, bonuses, guides and trust pages. Affiliate CTAs live on commercial
        surfaces, not in this directory.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {EN_REVIEW_RELATED_ROUTES.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#0A1931]/55 px-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40",
                focusRing,
              )}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
