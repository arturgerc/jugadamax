import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/utils";

const LOGO_SIZE = 48;

function monogramFromName(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0]![0] ?? ""}${words[1]![0] ?? ""}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

const logoTileBase =
  "inline-flex size-12 shrink-0 items-center justify-center rounded-xl p-1.5 ring-1 bg-[#16233f]";

/**
 * Operator logo with monogram fallback.
 *
 * Renders a real logo when provided; otherwise a monogram tile. Decorative when
 * the operator name is visible on the same card.
 */
export function OperatorLogo({
  name,
  logo,
  operatorId,
  className,
}: {
  name: string;
  logo?: ImageRef;
  operatorId?: string;
  className?: string;
}) {
  const isStake = operatorId === "stake";

  if (logo?.src) {
    return (
      <span
        className={cn(
          logoTileBase,
          isStake
            ? "ring-accent/25 shadow-[0_0_14px_-6px_rgba(0,168,107,0.35)]"
            : "ring-white/10",
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- local SVG; avoids Image SVG config */}
        <img
          src={logo.src}
          alt=""
          aria-hidden="true"
          width={logo.width ?? LOGO_SIZE}
          height={logo.height ?? LOGO_SIZE}
          className="max-h-full max-w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-xl",
        "bg-gradient-to-br from-[#16233f] to-[var(--jm-graphite)]",
        "text-sm font-bold tracking-tight text-primary",
        "ring-1 ring-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      )}
    >
      {monogramFromName(name)}
    </span>
  );
}
