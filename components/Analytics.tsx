"use client";
import { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { useCookieConsentContext } from "@/lib/CookieConsentContext";

type Props = {
  measurementId?: string;
  analyticsMode?: "ga4" | "gtm";
};

export default function Analytics({ measurementId, analyticsMode }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { consent } = useCookieConsentContext();

  useEffect(() => {
    if (consent !== "accepted") return;
    if (!analyticsMode) return;

    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    let lastUrl = "";
    if (url === lastUrl) return;
    lastUrl = url;

    const track = () => {
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
          event: "virtual_pageview",
          page_path: url,
        });
      }
    };

    if ("requestIdleCallback" in window) {
      (window as Window).requestIdleCallback(track);
    } else {
      setTimeout(track, 0);
    }
  }, [pathname, searchParams, consent, measurementId, analyticsMode]);

  return null;
}
