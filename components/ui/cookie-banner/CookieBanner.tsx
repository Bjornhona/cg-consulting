"use client";
import { useCookieConsentContext } from "@/lib/CookieConsentContext";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/Button";
import { useTranslations } from "next-intl";

export default function CookieBanner() {
  const t = useTranslations("footer.cookieSettings");
  const { showBanner, acceptCookies, rejectCookies } =
    useCookieConsentContext();

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-6 z-50 rounded-t-lg border-t border-gray-200 gap-4 flex flex-col"
        >
          <p>
            {t.rich("weUseCookies", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button onClick={acceptCookies} variant="primary" size="sm">
              {t("acceptCookies")}
            </Button>

            <Button onClick={rejectCookies} variant="secondary" size="sm">
              {t("rejectCookies")}
            </Button>
          </div>

          <p>
            {t.rich("changeOrWithdrawConsent", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
