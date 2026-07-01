import { cn } from "@/lib/utils";

/**
 * Mobile-first centered content container with responsive horizontal padding.
 * Constrains line length on large screens without causing horizontal overflow.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
