import { cn } from "@/lib/utils";

/**
 * Affiliate call-to-action (FR-012/FR-013/FR-014).
 *
 * - Applies rel="sponsored nofollow" and target="_blank" on outbound links.
 * - Degrades gracefully to a disabled state when `href` is missing so a broken
 *   or misleading link is never shown (spec edge case).
 * - Must only be used on pages that also render AffiliateDisclosure +
 *   ResponsibleGamblingNotice (enforced by page composition).
 */
export interface AffiliateCtaProps {
  href?: string;
  label?: string;
  className?: string;
}

export function AffiliateCta({ href, label = "Visitar sitio", className }: AffiliateCtaProps) {
  const base = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
    "bg-primary text-primary-foreground transition-colors",
    className,
  );

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={cn(base, "cursor-not-allowed opacity-50")}
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={cn(base, "hover:bg-[var(--jm-gold-strong)]")}
    >
      {label}
    </a>
  );
}
