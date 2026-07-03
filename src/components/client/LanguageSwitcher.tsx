"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useLocale();

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 text-sm p-8 ">
      <button
        onClick={() => switchLanguage("es")}
        className={`px-2 py-1 rounded transition-all duration-200 ${
          locale === "es"
            ? "text-white font-bold"
            : "text-white/40 hover:text-white/60"
        }`}
        aria-label="Cambiar a español"
      >
        Es
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 rounded transition-all duration-200 ${
          locale === "en"
            ? "text-white-500 font-bold"
            : "text-white/40 hover:text-white/60"
        }`}
        aria-label="Switch to English"
      >
        En
      </button>
    </div>
  );
}
