"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";

export default function SideMenu() {
  const pathname = usePathname();
  const { locale, messages } = useLocale();
  const navItems = messages.common.navigation;

  return (
    <nav className="text-contrast">
      <ul className="flex flex-row md:flex-col gap-5 md:gap-3 justify-center md:justify-start">
        {navItems.map(({ href, label }) => {
          const fullPath = `/${locale}${href}`;
          const isActive = pathname === fullPath;

          return (
            <li key={href} className="relative">
              <Link
                href={`/${locale}${href}`}
                className={`text-base md:text-lg transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "font-semibold text-white"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {/* Indicador visual - punto a la izquierda */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
