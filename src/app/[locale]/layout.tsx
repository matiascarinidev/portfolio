import { notFound } from "next/navigation";
import { ReactNode } from "react";
import SideMenu from "@/components/client/SideMenu";
import Footer from "@/components/shared/Footer";
import { locales, Locale } from "@/config/i18n";
import { getMessages } from "@/messages/getMessages";
import { LocaleProvider } from "@/context/LocaleContext";
import LanguageSwitcher from "@/components/client/LanguageSwitcher";
interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  console.log("Locale recibido:", locale);
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = getMessages(locale);
  return (
    <LocaleProvider locale={locale} messages={messages}>
      <LanguageSwitcher />
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-12 md:px-12 ">
          <aside className="order-1 md:order-1 md:sticky md:top-8 ">
            <SideMenu />
          </aside>
          <main className="flex-1 order-2 md:order-2">{children}</main>
        </div>
      </div>
      <Footer />
    </LocaleProvider>
  );
}
