import Link from "next/link";
import {
  EN_ABOUT_FAQ_ITEMS,
  EN_ABOUT_RELATED_ROUTES,
} from "@/components/verticals/about/en/en-about-config";
import { cn, focusRing } from "@/lib/utils";

export function EnAboutFaq() {
  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      <section aria-labelledby="en-about-faq-heading">
        <h2
          id="en-about-faq-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Frequently asked questions
        </h2>
        <div className="mt-4 max-w-3xl space-y-2">
          {EN_ABOUT_FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-white/10 bg-[#111417]/60 open:border-emerald-400/25"
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

      <section aria-labelledby="en-about-related-heading">
        <h2
          id="en-about-related-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          You may also review
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {EN_ABOUT_RELATED_ROUTES.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#0A1931]/55 px-3.5 text-sm font-medium text-foreground transition-colors hover:border-emerald-400/40",
                  focusRing,
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
