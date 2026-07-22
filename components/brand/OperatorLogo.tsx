import type { ImageRef } from "@/types/content";
import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_HEIGHT = 48;

export type OperatorLogoVariant = "default" | "compact-row";

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
  if (operatorId === "vodkabet") {
    return "border-blue-500/30 ring-violet-500/20 shadow-[0_0_18px_-6px_rgba(59,130,246,0.25)]";
  }
  if (operatorId === "awintura") {
    return "border-[#D49A00]/30 ring-[#537A28]/20 shadow-[0_0_18px_-6px_rgba(212,154,0,0.25)]";
  }
  if (operatorId === "slotoro") {
    return "border-fuchsia-500/30 ring-fuchsia-500/20 shadow-[0_0_18px_-6px_rgba(217,0,215,0.25)]";
  }
  if (operatorId === "roobet") {
    return "border-violet-500/30 ring-violet-500/20 shadow-[0_0_18px_-6px_rgba(109,40,217,0.25)]";
  }
  if (operatorId === "mostbet") {
    return "border-[#0A5A9C]/30 ring-[#34A5FF]/20 shadow-[0_0_18px_-6px_rgba(52,165,255,0.25)]";
  }
  if (operatorId === "sportsbetio") {
    return "border-[#36B958]/30 ring-[#45D067]/20 shadow-[0_0_18px_-6px_rgba(54,185,88,0.25)]";
  }
  if (operatorId === "bitcasino") {
    return "border-[#6519A8]/30 ring-[#7B22D3]/20 shadow-[0_0_18px_-6px_rgba(123,34,211,0.25)]";
  }
  if (operatorId === "ltccasino") {
    return "border-[#2156FF]/30 ring-[#4B6FFF]/20 shadow-[0_0_18px_-6px_rgba(33,86,255,0.25)]";
  }
  if (operatorId === "ethcasino") {
    return "border-[#10BBD7]/30 ring-[#21D6EB]/20 shadow-[0_0_18px_-6px_rgba(16,187,215,0.25)]";
  }
  if (operatorId === "cryptocasino") {
    return "border-[#E0001B]/35 ring-[#FF1C24]/20 shadow-[0_0_18px_-6px_rgba(224,0,27,0.25)]";
  }
  if (operatorId === "bcgame") {
    return "border-emerald-700/30 ring-emerald-600/15 shadow-[0_0_16px_-6px_rgba(32,184,100,0.2)]";
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
  if (operatorId === "vodkabet") {
    return "bg-gradient-to-br from-[#071225] via-[#091733] to-[#101B3D]";
  }
  if (operatorId === "awintura") {
    return "bg-gradient-to-br from-[#090704] via-[#120D05] to-[#272011]";
  }
  if (operatorId === "slotoro") {
    return "bg-gradient-to-br from-[#080014] via-[#130020] to-[#22002F]";
  }
  if (operatorId === "roobet") {
    return "bg-gradient-to-br from-[#070817] via-[#0B0B22] to-[#211C50]";
  }
  if (operatorId === "mostbet") {
    return "bg-gradient-to-br from-[#031A36] via-[#052B52] to-[#074477]";
  }
  if (operatorId === "sportsbetio") {
    return "bg-gradient-to-br from-[#11161C] via-[#171E25] to-[#202932]";
  }
  if (operatorId === "bitcasino") {
    return "bg-gradient-to-br from-[#12051F] via-[#210936] to-[#35105A]";
  }
  if (operatorId === "ltccasino") {
    return "bg-gradient-to-br from-[#171821] via-[#1D1F2A] to-[#252836]";
  }
  if (operatorId === "ethcasino") {
    return "bg-gradient-to-br from-[#080D18] via-[#0D1824] to-[#132535]";
  }
  if (operatorId === "cryptocasino") {
    return "bg-gradient-to-br from-[#050607] via-[#0B0D12] to-[#151820]";
  }
  if (operatorId === "bcgame") {
    return "bg-gradient-to-br from-[#07110D] via-[#0B1712] to-[#10251A]";
  }
  return "bg-[#16233f]";
}

/** Extra inset glow used by many wordmark tiles (default variant only). */
function logoTileInset(operatorId?: string): string | false {
  if (operatorId === "rainbet") return "shadow-[inset_0_1px_0_rgba(52,211,153,0.1)]";
  if (operatorId === "gamdom") return "shadow-[inset_0_1px_0_rgba(0,245,138,0.1)]";
  if (operatorId === "xonbet") return "border-cyan-500/25 shadow-[inset_0_1px_0_rgba(0,217,255,0.1)]";
  if (operatorId === "vodkabet") return "border-blue-500/25 shadow-[inset_0_1px_0_rgba(59,130,246,0.1)]";
  if (operatorId === "awintura") return "border-[#D49A00]/25 shadow-[inset_0_1px_0_rgba(212,154,0,0.1)]";
  if (operatorId === "slotoro") return "border-fuchsia-500/25 shadow-[inset_0_1px_0_rgba(217,0,215,0.1)]";
  if (operatorId === "roobet") return "border-violet-500/25 shadow-[inset_0_1px_0_rgba(109,40,217,0.1)]";
  if (operatorId === "mostbet") return "border-[#0A5A9C]/25 shadow-[inset_0_1px_0_rgba(52,165,255,0.1)]";
  if (operatorId === "sportsbetio") return "border-[#36B958]/25 shadow-[inset_0_1px_0_rgba(54,185,88,0.1)]";
  if (operatorId === "bitcasino") return "border-[#6519A8]/25 shadow-[inset_0_1px_0_rgba(123,34,211,0.1)]";
  if (operatorId === "ltccasino") return "border-[#2156FF]/25 shadow-[inset_0_1px_0_rgba(33,86,255,0.1)]";
  if (operatorId === "ethcasino") return "border-[#10BBD7]/25 shadow-[inset_0_1px_0_rgba(16,187,215,0.1)]";
  if (operatorId === "cryptocasino") return "border-[#E0001B]/25 shadow-[inset_0_1px_0_rgba(224,0,27,0.1)]";
  return false;
}

/**
 * Optical fill tweaks for assets with large transparent padding.
 * Applied only inside the fixed compact-row tile — never changes layout width.
 */
function compactOpticalImageClass(operatorId?: string): string {
  if (operatorId === "rainbet") {
    return "max-h-[2.35rem] w-[4.85rem] sm:max-h-[2.55rem] sm:w-[5.35rem]";
  }
  if (operatorId === "1xbet") {
    return "max-h-[2.15rem] w-[4.55rem] sm:max-h-[2.35rem] sm:w-[5.1rem]";
  }
  if (operatorId === "melbet") {
    return "max-h-[2.05rem] w-[4.4rem] sm:max-h-[2.25rem] sm:w-[4.9rem]";
  }
  return "max-h-[1.9rem] w-auto max-w-[4.55rem] sm:max-h-[2.15rem] sm:max-w-[5.1rem]";
}

function FiveHundredWordmark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 flex-col items-center justify-center rounded-xl border",
        compact
          ? "h-10 w-[5.25rem] px-1.5 py-1 sm:h-11 sm:w-24"
          : "h-14 min-w-[5.75rem] px-3 py-2",
        logoTileBackground("500-casino"),
        logoTileAccent("500-casino"),
        "shadow-[inset_0_1px_0_rgba(236,72,153,0.12)]",
        className,
      )}
    >
      <span
        className={cn(
          "bg-gradient-to-r from-[#F472B6] via-[#E11D48] to-[#FB7185] bg-clip-text font-extrabold leading-none tracking-tight text-transparent",
          compact ? "text-base" : "text-xl",
        )}
      >
        500
      </span>
      <span
        className={cn(
          "font-bold uppercase tracking-[0.2em] text-pink-200/75",
          compact ? "mt-0.5 text-[0.45rem]" : "mt-0.5 text-[0.55rem]",
        )}
      >
        Casino
      </span>
    </span>
  );
}

function isWideWordmarkOperator(operatorId?: string): boolean {
  return (
    operatorId === "rainbet" ||
    operatorId === "gamdom" ||
    operatorId === "xonbet" ||
    operatorId === "vodkabet" ||
    operatorId === "awintura" ||
    operatorId === "slotoro" ||
    operatorId === "roobet" ||
    operatorId === "mostbet" ||
    operatorId === "sportsbetio" ||
    operatorId === "bitcasino" ||
    operatorId === "ltccasino" ||
    operatorId === "ethcasino" ||
    operatorId === "cryptocasino"
  );
}

function isExtraWideWordmark(operatorId?: string): boolean {
  return (
    operatorId === "gamdom" ||
    operatorId === "xonbet" ||
    operatorId === "vodkabet" ||
    operatorId === "awintura" ||
    operatorId === "slotoro" ||
    operatorId === "roobet" ||
    operatorId === "mostbet" ||
    operatorId === "sportsbetio" ||
    operatorId === "bitcasino" ||
    operatorId === "ltccasino" ||
    operatorId === "ethcasino" ||
    operatorId === "cryptocasino"
  );
}

/**
 * Operator logo with monogram fallback.
 *
 * - default: existing card/header sizing (variable tile widths by operator group)
 * - compact-row: fixed outer slot for list/comparison rows so names align
 */
export function OperatorLogo({
  name,
  logo,
  operatorId,
  className,
  variant = "default",
}: {
  name: string;
  logo?: ImageRef;
  operatorId?: string;
  className?: string;
  variant?: OperatorLogoVariant;
}) {
  const compact = variant === "compact-row";

  if (operatorId === "500-casino" && !logo?.src) {
    return <FiveHundredWordmark className={className} compact={compact} />;
  }

  if (logo?.src) {
    if (compact) {
      return (
        <span
          className={cn(
            "inline-flex h-10 w-[5.25rem] shrink-0 items-center justify-center overflow-hidden rounded-lg border px-1 py-0.5 ring-1 sm:h-11 sm:w-24 sm:rounded-xl",
            logoTileBackground(operatorId),
            logoTileAccent(operatorId),
            logoTileInset(operatorId),
            className,
          )}
        >
          <Image
            src={logo.src}
            alt=""
            aria-hidden="true"
            width={logo.width ?? 96}
            height={logo.height ?? 40}
            sizes="96px"
            className={cn("object-contain", compactOpticalImageClass(operatorId))}
          />
        </span>
      );
    }

    const isRainbet = operatorId === "rainbet";
    const isWideWordmark = isWideWordmarkOperator(operatorId);
    const isExtraWide = isExtraWideWordmark(operatorId);

    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-xl ring-1",
          isWideWordmark
            ? isExtraWide
              ? "h-14 w-[7.5rem] border px-1 py-0.5"
              : "h-14 w-[5.75rem] border border-emerald-500/20 px-0.5 py-0.5 sm:w-24"
            : "h-12 w-[4.5rem] px-1 py-1 sm:w-20",
          logoTileBackground(operatorId),
          logoTileAccent(operatorId),
          logoTileInset(operatorId),
          className,
        )}
      >
        <Image
          src={logo.src}
          alt=""
          aria-hidden="true"
          width={
            logo.width ??
            (isExtraWide
              ? operatorId === "cryptocasino"
                ? 180
                : operatorId === "ethcasino"
                  ? 140
                  : 120
              : isRainbet
                ? 96
                : 80)
          }
          height={
            logo.height ??
            (isExtraWide
              ? operatorId === "cryptocasino" || operatorId === "ethcasino"
                ? 56
                : 48
              : isRainbet
                ? 56
                : LOGO_HEIGHT)
          }
          sizes={
            isExtraWide
              ? operatorId === "cryptocasino"
                ? "180px"
                : operatorId === "ethcasino"
                  ? "140px"
                  : "120px"
              : isRainbet
                ? "96px"
                : "80px"
          }
          className={cn(
            "max-w-full object-contain",
            isWideWordmark ? "max-h-[3.25rem] w-full" : "max-h-full",
          )}
        />
      </span>
    );
  }

  if (compact) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-10 w-[5.25rem] shrink-0 items-center justify-center rounded-lg border text-xs font-bold tracking-tight ring-1 sm:h-11 sm:w-24 sm:rounded-xl sm:text-sm",
          logoTileBackground(operatorId),
          logoTileAccent(operatorId),
          operatorId === "bcgame"
            ? "text-[#47E887]"
            : "text-primary",
          className,
        )}
      >
        {monogramFromName(name)}
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
          : operatorId === "bcgame"
            ? "bg-gradient-to-br from-[#07110D] via-[#0B1712] to-[#143522] font-bold tracking-tight text-[#47E887] ring-emerald-700/25 shadow-[inset_0_1px_0_rgba(240,185,11,0.08)]"
            : "bg-gradient-to-br from-[#16233f] to-[var(--jm-graphite)] font-bold tracking-tight text-primary ring-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      )}
    >
      {monogramFromName(name)}
    </span>
  );
}
