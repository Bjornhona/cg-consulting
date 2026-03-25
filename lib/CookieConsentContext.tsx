"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

export type ConsentState = "accepted" | "rejected" | "unset";

interface CookieConsentContextValue {
  consent: ConsentState;
  showBanner: boolean;
  acceptCookies: () => void;
  rejectCookies: () => void;
  openBanner: () => void;
}

const CookieConsentContext = createContext<
  CookieConsentContextValue | undefined
>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(() => {
    const saved = Cookies.get("cookie_consent") as ConsentState | undefined;
    return saved ?? "unset";
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (consent === "accepted") {
      window.dataLayer = window.dataLayer || [];

      const ric =
        window.requestIdleCallback || ((cb: () => void) => setTimeout(cb, 1));

      ric(() => {
        window.gtag?.("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
        });
      });
    }
  }, [consent]);

  function acceptCookies() {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setConsent("accepted");
    setShowBanner(false);
  }

  function rejectCookies() {
    Cookies.set("cookie_consent", "rejected", { expires: 365 });
    setConsent("rejected");
    setShowBanner(false);
  }

  function openBanner() {
    setShowBanner(true);
  }

  return (
    <CookieConsentContext.Provider
      value={{ consent, showBanner, acceptCookies, rejectCookies, openBanner }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsentContext() {
  const context = useContext(CookieConsentContext);
  if (!context)
    throw new Error(
      "useCookieConsentContext must be used within a CookieConsentProvider",
    );
  return context;
}
