export const trackEvent = (
  event: string,
  data: Record<string, unknown> = {}
) => {
  if (typeof window === "undefined") return;

  const mode = (window as Window).__analyticsMode || "gtm";
  if (mode === "none") return;

  // Run async to avoid blocking UI
  const run = () => {
    if (mode === "gtm") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        ...data,
      });
    }

    if (mode === "ga4" && typeof window.gtag === "function") {
      window.gtag("event", event, data);
    }
  };

  if ("requestIdleCallback" in window) {
    (window as Window).requestIdleCallback(run);
  } else {
    setTimeout(run, 0);
  }
};

export const EVENTS = {
  CTA_CLICK: "cta_click",
  NAVIGATION_CLICK: "navigation_click",
  FORM_SUBMIT: "form_submit",
  VIRTUAL_PAGEVIEW: "virtual_pageview",
};
