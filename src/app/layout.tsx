import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
          {children}
          <BlobEffect />
        </div>
      </body>
    </html>
  );
}
