/**
 * Public GA4 Measurement ID from env.
 * Undefined/empty when not configured — analytics must stay fully inert.
 */
export function getGaMeasurementId(): string | undefined {
  const value = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return value ? value : undefined;
}
