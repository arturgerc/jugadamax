import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/utils";

const LOGO_HEIGHT = 48;

function monogramFromName(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0]![0] ?? ""}${words[1]![0] ?? ""}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function logoTileAccent(operatorId?: string): string {
  if (operatorId === "stake") {
    return "ring-accent/25 shadow-[0_0_14px_-6px_rgba(0,168,107,0.35)]";
  }
  if (operatorId === "caliente" || operatorId === "codere") {
    return "ring-primary/15";
  }
  return "ring-white/10";
}

function logoTileBackground(operatorId?: string): string {
  if (operatorId === "caliente" || operatorId === "codere") {
    return "bg-[#f5f5f0]";
  }
  return "bg-[#16233f]";
}

/**
 * Operator logo with monogram fallback.
 *
 * Real logos use a wider 72–80×48 tile; monograms stay square 48×48. Decorative
 * when the operator name is visible on the same card.
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
  if (logo?.src) {
    return (
      <span
        className={cn(
          "inline-flex h-12 w-[4.5rem] shrink-0 items-center justify-center rounded-xl px-1 py-1 ring-1 sm:w-20",
          logoTileBackground(operatorId),
          logoTileAccent(operatorId),
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- local operator asset */}
        <img
          src={logo.src}
          alt=""
          aria-hidden="true"
          width={logo.width ?? 80}
          height={logo.height ?? LOGO_HEIGHT}
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
