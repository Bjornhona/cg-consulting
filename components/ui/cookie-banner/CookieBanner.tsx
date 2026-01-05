"use client";
import { useCookieConsentContext } from "@/lib/CookieConsentContext";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/Button";

export default function CookieBanner() {
  const { showBanner, acceptCookies, rejectCookies } = useCookieConsentContext();

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
            We use cookies for analytics to improve your experience. By clicking
            <strong> “Accept cookies”</strong>, you allow us to use Google Analytics
            or other analytics scripts.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={acceptCookies}
              variant="primary"
              size="sm"
            >
              Accept cookies
            </Button>

            <Button
              onClick={rejectCookies}
              variant="secondary"
              size="sm"
            >
              Reject cookies
            </Button>
          </div>

          <p>
            You can change consent anytime via the <strong>“Cookie Settings”</strong> link in the footer.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
