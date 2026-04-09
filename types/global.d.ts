export {};

declare global {
  interface Window {
    __analyticsMode: 'none' | 'ga4' | 'gtm';
    __cookieConsent: 'accepted' | 'rejected' | 'unset';
    dataLayer: unknown[];
    gtag: (
      command: 'config' | 'event' | 'js' | 'set' | 'consent',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}
