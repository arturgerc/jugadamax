import type { TrustInfo } from "@/types/content";
import { cn } from "@/lib/utils";
import { TrustBadge } from "@/components/trust/TrustBadge";

/**
 * License / trust display with honest sourcing (Constitution Principle IV/V).
 *
 * A license claim is only shown with the emerald "trust" styling when the record
 * includes a verifiable source reference (`licenseRef`). Without a source we do
 * NOT present it as independently verified: we use neutral, cautious wording
 * ("según el operador") so we never imply a verification we have not performed.
 */
export function LicenseInfo({
  licensing,
  className,
}: {
  licensing?: TrustInfo;
  className?: string;
}) {
  const name = licensing?.licenseName;
  if (!name) return null;

  if (licensing?.licenseRef) {
    return (
      <a
        href={licensing.licenseRef}
        target="_blank"
        rel="noopener nofollow"
        className={cn("inline-flex", className)}
      >
        <TrustBadge label={`Licencia: ${name}`} />
      </a>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/60 bg-card/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      Licencia informada por el operador: {name}
    </span>
  );
}
