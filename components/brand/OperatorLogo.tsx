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
  if (operatorId === "500-casino") {
    return "border-pink-500/25 ring-pink-500/15 shadow-[0_0_16px_-6px_rgba(236,72,153,0.25)]";
  }
  if (operatorId === "stake") {
    return "ring-accent/25 shadow-[0_0_14px_-6px_rgba(0,168,107,0.35)]";
  }
  if (operatorId === "caliente" || operatorId === "codere") {
    return "ring-primary/15";
  }
  if (operatorId === "gamdom") {
    return "ring-white/8";
  }
  return "ring-white/10";
}

function logoTileBackground(operatorId?: string): string {
  if (operatorId === "500-casino") {
    return "bg-gradient-to-br from-[#120818] via-[#16121f] to-[#0A1931]";
  }
  if (operatorId === "caliente" || operatorId === "codere") {
    return "bg-[#f5f5f0]";
  }
  if (operatorId === "gamdom") {
    return "bg-[#111417]";
  }
  return "bg-[#16233f]";
}

function FiveHundredWordmark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-14 min-w-[5.75rem] shrink-0 flex-col items-center justify-center rounded-xl border px-3 py-2",
        logoTileBackground("500-casino"),
        logoTileAccent("500-casino"),
        "shadow-[inset_0_1px_0_rgba(236,72,153,0.12)]",
        className,
      )}
    >
      <span className="bg-gradient-to-r from-[#F472B6] via-[#E11D48] to-[#FB7185] bg-clip-text text-xl font-extrabold leading-none tracking-tight text-transparent">
        500
      </span>
      <span className="mt-0.5 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-pink-200/75">
        Casino
      </span>
    </span>
  );
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
  if (operatorId === "500-casino" && !logo?.src) {
    return <FiveHundredWordmark className={className} />;
  }

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
        "inline-flex shrink-0 items-center justify-center rounded-xl ring-1",
        operatorId === "gamdom" ? "size-11 text-xs" : "size-12 text-sm",
        operatorId === "gamdom"
          ? "bg-[#111417] font-semibold tracking-tight text-muted-foreground ring-white/8"
          : "bg-gradient-to-br from-[#16233f] to-[var(--jm-graphite)] font-bold tracking-tight text-primary ring-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      )}
    >
      {monogramFromName(name)}
    </span>
  );
}
