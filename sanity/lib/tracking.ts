export const trackEvent = (event: string, data: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  // GTM (dataLayer)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...data,
  });

  // GA4 direct (optional fallback)
  if (typeof window.gtag === "function") {
    window.gtag("event", event, data);
  }
};
