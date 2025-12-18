import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getNavigation, getSettings } from '@/sanity/queries'
import Header from '@/components/ui/navigation/header/Header'
import Footer from '@/components/ui/navigation/footer/Footer'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
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
  const [navigation, settings] = await Promise.all([
    getNavigation(),
    getSettings(),
  ])

  return (
    <html lang="en">
      <body className={inter.className}>
        {navigation && <Header navigation={navigation.items} logo={settings?.logo} siteTitle={settings?.siteTitle} />}
        {children}
        {navigation && <Footer navigation={navigation.items} logo={settings?.iconLogo} siteTitle={settings?.siteTitle} />}
      </body>
    </html>
  );
}
