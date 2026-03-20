import { getNavigation, getFooterNavigation } from "@/sanity/queries";
import Header from "@/components/ui/navigation/header/Header";
import Footer from "@/components/ui/navigation/footer/Footer";
import CookieBanner from "@/components/ui/cookie-banner/CookieBanner";
import ClientOnly from "@/components/ClientOnly";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  const [navigation, footerNavigation] = await Promise.all([
    getNavigation(locale),
    getFooterNavigation(locale),
  ]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <main>
          {navigation && <Header navigation={navigation.items} />}
          {children}
          <ClientOnly>
            <CookieBanner />
          </ClientOnly>
        </main>
        {footerNavigation && <Footer navigation={footerNavigation.items} />}
      </NextIntlClientProvider>
    </div>
  );
}
