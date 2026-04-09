"use client";
import { useEffect, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { useCookieConsentContext } from "@/lib/CookieConsentContext";
import { EVENTS } from "@/lib/tracking";

type Props = {
  measurementId?: string;
  analyticsMode?: "ga4" | "gtm";
  debug?: boolean;
};

export default function Analytics({ measurementId, analyticsMode, debug }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { consent } = useCookieConsentContext();
  const lastUrlRef = useRef("");

  // ✅ Handle consent properly (GTM + GA4)
  useEffect(() => {
    if (consent !== "accepted") return;

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "consent_update",
    //   analytics_storage: "granted",
    //   ad_storage: "granted",
    // });

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });

      window.gtag("set", "debug_mode", { value: debug });
    }
  }, [consent, debug]);

  // ✅ Track page views (SPA navigation)
  useEffect(() => {
    if (consent !== "accepted") return;
    if (!analyticsMode) return;

    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    if (url === lastUrlRef.current) return;
    lastUrlRef.current = url;

    if (
      analyticsMode === "ga4" &&
      measurementId &&
      typeof window.gtag === "function"
    ) {
      window.gtag("config", measurementId, {
        page_path: url,
      });
    }

    if (analyticsMode === "gtm") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: EVENTS.VIRTUAL_PAGEVIEW,
        page_path: url,
      });
    }
  }, [pathname, searchParams, consent, measurementId, analyticsMode]);

  return null;
}
