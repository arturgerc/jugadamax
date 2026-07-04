import type { OperatorLink } from "@/types/operator-links";
import { cn, focusRing } from "@/lib/utils";

/**
 * Market-aware outbound CTA.
 *
 * Uses affiliate rel only when `isAffiliate` is true. When no link is provided,
 * renders nothing — no disabled placeholder that implies a broken affiliate URL.
 */
export interface OperatorCtaProps {
  link?: OperatorLink;
  className?: string;
}

export function OperatorCta({ link, className }: OperatorCtaProps) {
  if (!link?.url) return null;

  const base = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
    "bg-primary text-primary-foreground transition-colors",
    focusRing,
    className,
  );

  return (
    <a
      href={link.url}
      target="_blank"
      rel={link.rel}
      className={cn(base, "hover:bg-[var(--jm-gold-strong)]")}
    >
      {link.label}
    </a>
  );
}
