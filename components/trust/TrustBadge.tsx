import { cn } from "@/lib/utils";

/**
 * Trust badge (emerald). MUST represent only real, verifiable trust signals
 * (e.g. a real license authority). No fake certifications (Constitution
 * Principle V).
 */
export function TrustBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-accent/50 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent",
        className,
      )}
    >
      {label}
    </span>
  );
}
