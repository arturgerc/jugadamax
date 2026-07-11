import type { ImageRef } from "@/types/content";
import Image from "next/image";
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
  if (operatorId === "rainbet") {
    return "border-emerald-500/30 ring-emerald-500/15 shadow-[0_0_18px_-6px_rgba(52,211,153,0.3)]";
  }
  if (operatorId === "stake") {
    return "ring-accent/25 shadow-[0_0_14px_-6px_rgba(0,168,107,0.35)]";
  }
  if (operatorId === "caliente" || operatorId === "codere") {
    return "ring-primary/15";
  }
  if (operatorId === "gamdom") {
    return "border-emerald-400/30 ring-emerald-500/20 shadow-[0_0_18px_-6px_rgba(0,245,138,0.25)]";
  }
  if (operatorId === "xonbet") {
    return "border-cyan-400/30 ring-cyan-400/20 shadow-[0_0_18px_-6px_rgba(0,217,255,0.25)]";
  }
  return "ring-white/10";
}

function logoTileBackground(operatorId?: string): string {
  if (operatorId === "500-casino") {
    return "bg-gradient-to-br from-[#120818] via-[#16121f] to-[#0A1931]";
  }
  if (operatorId === "rainbet") {
    return "bg-gradient-to-br from-[#030712] via-[#0A1628] to-[#061018]";
  }
  if (operatorId === "caliente" || operatorId === "codere") {
    return "bg-[#f5f5f0]";
  }
  if (operatorId === "gamdom") {
    return "bg-gradient-to-br from-[#061019] via-[#07131d] to-[#091722]";
  }
  if (operatorId === "xonbet") {
    return "bg-gradient-to-br from-[#070B1C] via-[#11133A] to-[#070B1C]";
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
    const isRainbet = operatorId === "rainbet";
    const isGamdom = operatorId === "gamdom";
    const isXonbet = operatorId === "xonbet";
    const isWideWordmark = isRainbet || isGamdom || isXonbet;
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-xl ring-1",
          isWideWordmark
            ? isGamdom || isXonbet
              ? "h-14 w-[7.5rem] border px-1 py-0.5"
              : "h-14 w-[5.75rem] border border-emerald-500/20 px-0.5 py-0.5 sm:w-24"
            : "h-12 w-[4.5rem] px-1 py-1 sm:w-20",
          logoTileBackground(operatorId),
          logoTileAccent(operatorId),
          isRainbet && "shadow-[inset_0_1px_0_rgba(52,211,153,0.1)]",
          isGamdom && "shadow-[inset_0_1px_0_rgba(0,245,138,0.1)]",
          isXonbet && "border-cyan-500/25 shadow-[inset_0_1px_0_rgba(0,217,255,0.1)]",
          className,
        )}
      >
        <Image
          src={logo.src}
          alt=""
          aria-hidden="true"
          width={logo.width ?? (isXonbet || isGamdom ? 120 : isRainbet ? 96 : 80)}
          height={logo.height ?? (isXonbet || isGamdom ? 48 : isRainbet ? 56 : LOGO_HEIGHT)}
          sizes={isXonbet || isGamdom ? "120px" : isRainbet ? "96px" : "80px"}
          className={cn(
            "max-w-full object-contain",
            isWideWordmark ? "max-h-[3.25rem] w-full" : "max-h-full",
          )}
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
