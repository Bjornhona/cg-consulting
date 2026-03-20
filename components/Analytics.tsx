"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCookieConsentContext } from "@/lib/CookieConsentContext";

type Props = {
  measurementId?: string;
  analyticsMode?: "ga4" | "gtm" | "none";
};

export default function Analytics({ measurementId, analyticsMode }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { consent } = useCookieConsentContext();

  useEffect(() => {
    if (consent !== "accepted") return;

    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    // ✅ GA4 direct tracking
    if (
      analyticsMode === "ga4" &&
      measurementId &&
      typeof window.gtag === "function"
    ) {
      window.gtag("config", measurementId, {
        page_path: url,
      });
    }

    // ✅ GTM tracking (dataLayer push)
    if (analyticsMode === "gtm" && typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page_path: url,
      });
    }
  }, [pathname, searchParams, consent, measurementId, analyticsMode]);

  return null;
}
