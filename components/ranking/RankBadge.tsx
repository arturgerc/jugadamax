import { cn } from "@/lib/utils";

/** Rank position badge (gold). */
export function RankBadge({ rank, className }: { rank: number; className?: string }) {
  return (
    <span
      aria-label={`Posición ${rank}`}
      className={cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground",
        className,
      )}
    >
      {rank}
    </span>
  );
}
