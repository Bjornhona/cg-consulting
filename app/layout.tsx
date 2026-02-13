import type { Metadata } from "next";
import {
  Raleway,
  // Oswald,
  // Lora,
  // Playfair Display,
  // Montserrat,
  // Roboto,
  // Open Sans,
  // Inter,
  // Fira Sans,
  // Noto Sans,
  // Nunito,
  // Poppins,
} from "next/font/google";
import "./globals.css";
import {
  getNavigation,
  getFooterNavigation,
  getSettings,
} from "@/sanity/queries";
import Header from "@/components/ui/navigation/header/Header";
import Footer from "@/components/ui/navigation/footer/Footer";
import { SettingsProvider } from "@/lib/SettingsProvider";
import { ToastProvider } from "@/components/ui/toast/ToastContext";
import CookieBanner from "@/components/ui/cookie-banner/CookieBanner";
import ClientOnly from "@/components/ClientOnly";
import Script from "next/script";
import { cookies } from "next/headers";
import { CookieConsentProvider } from "@/lib/CookieConsentContext";
import Analytics from "@/components/Analytics";
// import Background from "@/components/ui/background/Background";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CG Consulting",
  description: "Boutique recruitment consultancy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, footerNavigation, settings] = await Promise.all([
    getNavigation(),
    getFooterNavigation(),
    getSettings(),
  ]);

  const cookieConsent = (await cookies()).get("cookie_consent");
  const consent = cookieConsent?.value;

  return (
    <html lang="en">
      <head>
        {settings?.enableAnalytics &&
          settings?.gaMeasurementId &&
          consent === "accepted" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${settings.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.gaMeasurementId}', {
                  anonymize_ip: true,
                  send_page_view: false
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${raleway.className} min-h-screen flex flex-col justify-between`}
      >
        {settings?.enableAnalytics &&
        settings?.gaMeasurementId &&
        consent === "accepted" && (
          <Analytics measurementId={settings.gaMeasurementId} />
        )}
        <CookieConsentProvider>
          <SettingsProvider settings={settings}>
            <ToastProvider>
              <main>
                {navigation && <Header navigation={navigation.items} />}
                {/* <Background /> */}
                {children}
                <ClientOnly>
                  <CookieBanner />
                </ClientOnly>
              </main>
              {footerNavigation && (
                <Footer navigation={footerNavigation.items} />
              )}
            </ToastProvider>
          </SettingsProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
