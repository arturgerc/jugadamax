import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export type MobileStickyOfferCtaProps = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: string;
};

/**
 * Mobile-only sticky affiliate CTA bar. Hidden from md breakpoint up.
 */
export function MobileStickyOfferCta({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  note = "18+ | T&C",
}: MobileStickyOfferCtaProps) {
  const showSecondary = Boolean(secondaryLabel && secondaryHref);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A1931]/95 px-4 py-3 backdrop-blur-sm md:hidden"
      role="region"
      aria-label="Acciones de oferta"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-1.5">
        <div className={cn("flex gap-2", showSecondary ? "flex-row" : "flex-col")}>
          <a
            href={primaryHref}
            target="_blank"
            rel={AFFILIATE_REL}
            className={cn(
              "inline-flex min-h-11 flex-1 items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold",
              "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
              focusRing,
            )}
          >
            {primaryLabel}
          </a>
          {showSecondary && secondaryHref ? (
            isExternalHref(secondaryHref) ? (
              <a
                href={secondaryHref}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-primary/40 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                {secondaryLabel}
              </a>
            ) : (
              <Link
                href={secondaryHref}
                className={cn(
                  "inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-primary/40 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
                  focusRing,
                )}
              >
                {secondaryLabel}
              </Link>
            )
          ) : null}
        </div>
        {note ? (
          <p className="text-center text-[0.65rem] leading-tight text-muted-foreground">{note}</p>
        ) : null}
      </div>
    </div>
  );
}
