import { getNavigation, getFooterNavigation } from "@/sanity/queries";
import Header from "@/components/ui/navigation/header/Header";
import Footer from "@/components/ui/navigation/footer/Footer";
import CookieBanner from "@/components/ui/cookie-banner/CookieBanner";
import ClientOnly from "@/components/ClientOnly";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const [navigation, footerNavigation] = await Promise.all([
    getNavigation(locale),
    getFooterNavigation(locale),
  ]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <main>
          <Header navigation={navigation?.items ?? []} />
          {children}
          <ClientOnly>
            <CookieBanner />
          </ClientOnly>
        </main>
        <Footer navigation={footerNavigation?.items ?? []} />
      </NextIntlClientProvider>
    </div>
  );
}
