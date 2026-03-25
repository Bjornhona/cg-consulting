import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/lib/SettingsProvider";
import { ToastProvider } from "@/components/ui/toast/ToastContext";
import Script from "next/script";
import { cookies } from "next/headers";
import { CookieConsentProvider } from "@/lib/CookieConsentContext";
import Analytics from "@/components/Analytics";
import { getLocale } from "next-intl/server";
import { getSettings } from "@/sanity/queries";

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
  const locale = await getLocale();
  const settings = await getSettings(locale);

  const cookieConsent = (await cookies()).get("cookie_consent");
  const consent = cookieConsent?.value;

  const analyticsMode =
    settings?.analyticsMode === "none" ? undefined : settings?.analyticsMode;

  let isGA4 =
    settings?.analyticsMode === "ga4" &&
    settings?.gaMeasurementId &&
    consent === "accepted";

  const isGTM = settings?.analyticsMode === "gtm" && settings?.gtmId;

  if (isGTM) {
    isGA4 = false;
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {isGA4 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${settings.gaMeasurementId}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
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
        {isGTM && (
          <>
            <Script id="consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = function gtag(){window.dataLayer.push(arguments);}
                
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  analytics_storage: 'denied'
                });
              `}
            </Script>
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
      <body className={`${raleway.className}`}>
        <CookieConsentProvider>
          {isGTM && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${settings.gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          )}
          <Analytics
            measurementId={isGA4 ? settings?.gaMeasurementId : undefined}
            analyticsMode={analyticsMode}
          />
          <SettingsProvider settings={settings ?? null}>
            <ToastProvider>{children}</ToastProvider>
          </SettingsProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
