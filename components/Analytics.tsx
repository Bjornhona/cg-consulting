"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCookieConsentContext } from "@/lib/CookieConsentContext";

export default function Analytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { consent } = useCookieConsentContext();

  useEffect(() => {
    if (!measurementId) return;
    if (consent !== "accepted") return;
    if (typeof window.gtag !== "function") return;

    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    window.gtag("config", measurementId, {
      page_path: url,
    });

    // console.log("GA pageview sent:", url);
  }, [pathname, searchParams, consent, measurementId]);

  return null;
}
