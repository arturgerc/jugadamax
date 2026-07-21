import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/** Wider homepage shell without changing the shared Container default. */
export function HomepageContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <Container className={cn("max-w-7xl", className)}>{children}</Container>;
}
