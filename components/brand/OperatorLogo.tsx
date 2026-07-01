import Image from "next/image";
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

/**
 * Operator logo with monogram fallback.
 *
 * Decorative when the operator name is visible elsewhere on the card.
 */
export function OperatorLogo({
  name,
  logo,
  className,
}: {
  name: string;
  logo?: ImageRef;
  className?: string;
}) {
  if (logo?.src) {
    return (
      <Image
        src={logo.src}
        alt={logo.alt || name}
        width={logo.width ?? LOGO_SIZE}
        height={logo.height ?? LOGO_SIZE}
        className={cn(
          "size-12 shrink-0 rounded-xl object-contain ring-1 ring-white/10 bg-[#16233f]",
          className,
        )}
      />
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
