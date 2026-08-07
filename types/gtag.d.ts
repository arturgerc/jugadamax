export {};

type GtagConsentState = "granted" | "denied";

type GtagConsentParams = {
  analytics_storage?: GtagConsentState;
  ad_storage?: GtagConsentState;
  ad_user_data?: GtagConsentState;
  ad_personalization?: GtagConsentState;
  wait_for_update?: number;
};

type GtagConfigParams = Record<string, string | number | boolean | undefined>;

type GtagEventParams = Record<string, string | number | boolean | undefined>;

type GtagFunction = {
  (command: "js", date: Date): void;
  (command: "config", targetId: string, config?: GtagConfigParams): void;
  (command: "event", eventName: string, params?: GtagEventParams): void;
  (command: "consent", action: "default" | "update", params: GtagConsentParams): void;
  (command: "set", params: Record<string, unknown>): void;
  (...args: unknown[]): void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
  }
}
