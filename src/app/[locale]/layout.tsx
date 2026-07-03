import { notFound } from "next/navigation";
import { ReactNode } from "react";
import SideMenu from "@/components/client/SideMenu";
import Footer from "@/components/shared/Footer";
import { locales, Locale } from "@/config/i18n";
import { getMessages } from "@/messages/getMessages";
import { LocaleProvider } from "@/context/LocaleContext";
import LanguageSwitcher from "@/components/client/LanguageSwitcher";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const messages = getMessages(locale);

  return {
    metadataBase: new URL("https://porfolio-wine-delta.vercel.app"),

    title: messages.metadata.title,

    description: messages.metadata.description,

    keywords: messages.metadata.keywords,

    authors: [
      {
        name: "Matias Carini",
      },
    ],

    creator: "Matias Carini",

    openGraph: {
      title: messages.metadata.title,

      description: messages.metadata.description,

      siteName: messages.metadata.siteName,

      locale: messages.metadata.locale,

      url: `https://porfolio-wine-delta.vercel.app/${locale}`,

      type: "website",

      images: [
        {
          url: "/public/og-image.png",

          width: 1200,

          height: 630,

          alt: messages.metadata.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: messages.metadata.title,

      description: messages.metadata.description,

      images: ["/public/og-image.png"],
    },

    alternates: {
      canonical: `https://porfolio-wine-delta.vercel.app/${locale}`,

      languages: {
        es: "https://porfolio-wine-delta.vercel.app/es",

        en: "https://porfolio-wine-delta.vercel.app/en",
      },
    },
  };
}
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

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
    <html lang="es" className={montserrat.variable}>
      <body className="font-montserrat bg-black text-white">
        <div className="min-h-screen flex flex-col relative">
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
        </div>
      </body>
    </html>
  );
}
