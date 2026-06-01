import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SideMenu from "@/components/client/SideMenu";
import Footer from "@/components/shared/Footer";
import BlobEffect from "@/components/client/BlobEffect";
import "@/app/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Matias Carini - Full Stack Developer",
  description: "Portafolio de Matias Carini, desarrollador full stack",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-montserrat bg-black text-white">
        <div className="min-h-screen flex flex-col relative">
          <div className="flex-1 flex flex-col md:flex-row md:items-center justify-center px-4 py-8 md:py-12">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
              <aside className="order-1 md:order-1 md:sticky md:top-8">
                <SideMenu />
              </aside>
              <main className="flex-1 order-2 md:order-2">{children}</main>
            </div>
          </div>
          <Footer />
          <BlobEffect />
        </div>
      </body>
    </html>
  );
}
