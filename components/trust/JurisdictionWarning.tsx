import { cn } from "@/lib/utils";

/** Restricted-jurisdiction / availability notice for English/global pages. */
export function JurisdictionWarning({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      role="note"
      className={cn(
        "rounded-md border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground",
        className,
      )}
    >
      {children}
    </aside>
  );
}
