"use client";

import { useEffect, useState } from "react";
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
  /** When set, the bar stays hidden until the user scrolls past this element. */
  showAfterId?: string;
  /** Shorter labels used only in the compact mobile sticky bar. */
  compactPrimaryLabel?: string;
  compactSecondaryLabel?: string;
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
  showAfterId,
  compactPrimaryLabel,
  compactSecondaryLabel,
}: MobileStickyOfferCtaProps) {
  const [pastOffer, setPastOffer] = useState(false);
  const showSecondary = Boolean(secondaryLabel && secondaryHref);
  const stickyPrimaryLabel = compactPrimaryLabel ?? primaryLabel;
  const stickySecondaryLabel = compactSecondaryLabel ?? secondaryLabel;
  const showBar = !showAfterId || pastOffer;

  useEffect(() => {
    if (!showAfterId) return;

    const target = document.getElementById(showAfterId);
    if (!target) return;

    const updateVisibility = () => {
      const rect = target.getBoundingClientRect();
      setPastOffer(rect.bottom < 0);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setPastOffer(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
      },
      { threshold: [0, 0.01, 1] },
    );

    observer.observe(target);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [showAfterId]);

  if (!showBar) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A1931]/95 px-3 py-2 backdrop-blur-sm md:hidden"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
      role="region"
      aria-label="Acciones de oferta"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-1">
        <div
          className={cn(
            "grid gap-2",
            showSecondary ? "grid-cols-[1.1fr_0.9fr]" : "grid-cols-1",
          )}
        >
          <a
            href={primaryHref}
            target="_blank"
            rel={AFFILIATE_REL}
            className={cn(
              "inline-flex min-h-12 items-center justify-center rounded-md px-2 py-1.5 text-center text-[0.78rem] font-semibold leading-tight sm:text-sm",
              "bg-primary text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
              focusRing,
            )}
          >
            {stickyPrimaryLabel}
          </a>
          {showSecondary && secondaryHref ? (
            isExternalHref(secondaryHref) ? (
              <a
                href={secondaryHref}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-12 items-center justify-center rounded-md border border-primary/40 px-2 py-1.5 text-center text-[0.78rem] font-semibold leading-tight text-primary transition-colors hover:bg-primary/10 sm:text-sm",
                  focusRing,
                )}
              >
                {stickySecondaryLabel}
              </a>
            ) : (
              <Link
                href={secondaryHref}
                className={cn(
                  "inline-flex min-h-12 items-center justify-center rounded-md border border-primary/40 px-2 py-1.5 text-center text-[0.78rem] font-semibold leading-tight text-primary transition-colors hover:bg-primary/10 sm:text-sm",
                  focusRing,
                )}
              >
                {stickySecondaryLabel}
              </Link>
            )
          ) : null}
        </div>
        {note ? (
          <p className="text-center text-[0.625rem] leading-tight text-muted-foreground">{note}</p>
        ) : null}
      </div>
    </div>
  );
}
