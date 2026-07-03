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
metadataBase: new URL("https://porfolio-wine-delta.vercel.app"),

  title: "Matías Carini | Full Stack Developer",

  description:
    "Desarrollador Full Stack especializado en crear software para pequeñas empresas mediante Next.js, TypeScript y PostgreSQL.",

  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Portfolio",
    "Software Engineer",
    "Argentina",
  ],

  authors: [{ name: "Matías Carini" }],

  creator: "Matías Carini",

  openGraph: {
    title: "Matías Carini | Full Stack Developer",

    description:
      "Portfolio profesional con proyectos reales de desarrollo web, ERP y sistemas de gestión empresarial.",

    url: "https://porfolio-wine-delta.vercel.app",

    siteName: "Matías Carini Portfolio",

    locale: "es_AR",

    type: "website",

    images: [
      {
        url: "/src/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Matías Carini",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Matías Carini | Full Stack Developer",

    description:
      "Portfolio profesional de desarrollo Full Stack.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
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
