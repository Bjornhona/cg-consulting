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
        {/* {settings?.enableAnalytics && */}
        {settings?.analyticsMode !== "none" &&
          settings?.analyticsMode === "ga4" &&
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
        {/* {settings?.enableAnalytics && */}
        {settings?.analyticsMode !== "none" &&
          settings?.analyticsMode === "gtm" &&
          settings?.gtmId &&
          consent === "accepted" && (
            <>
              <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${settings.gtmId}');
          `,
                }}
              />
            </>
          )}
      </head>
      <body
        className={`${raleway.className} min-h-screen flex flex-col justify-between`}
      >
        <CookieConsentProvider>
          <Analytics measurementId={settings?.gaMeasurementId} analyticsMode={settings?.analyticsMode} />
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
