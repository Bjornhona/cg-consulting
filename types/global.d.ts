export {};

declare global {
  interface Window {
    __analyticsMode: 'none' | 'ga4' | 'gtm';
    __cookieConsent: 'accepted' | 'rejected' | 'unset';
    dataLayer: unknown[];
    // gtag: (
    //   command: 'config' | 'event' | 'js' | 'set' | 'consent',
    //   targetId: string | Date,
    //   config?: Record<string, unknown>
    // ) => void;
    gtag: {
      (command: 'js', date: Date): void;
      (command: 'config', targetId: string, config?: Record<string, unknown>): void;
      (command: 'event', eventName: string, params?: Record<string, unknown>): void;
      (command: 'set', params: Record<string, unknown>): void;
      (command: 'consent', action: 'default' | 'update', params: Record<string, unknown>): void;    
    }
  }
}
