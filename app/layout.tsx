import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getNavigation } from '@/sanity/queries'
import Navbar from '@/components/ui/Navbar'

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
  const navigation = await getNavigation()

  return (
    <html lang="en">
      <body className={inter.className}>
        {navigation && <Navbar items={navigation.items} />}
        {children}
      </body>
    </html>
  );
}
