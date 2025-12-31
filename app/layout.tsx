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

  return (
    <html lang="en">
      <body
        className={`${raleway.className} min-h-screen flex flex-col justify-between`}
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
