import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col justify-between`}
      >
        <SettingsProvider settings={settings}>
          <ToastProvider>
            <main>
              {navigation && <Header navigation={navigation.items} />}
              {children}
            </main>
            {footerNavigation && <Footer navigation={footerNavigation.items} />}
          </ToastProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
