"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <nav className="text-contrast">
      <ul className="flex flex-row md:flex-col gap-5 md:gap-3 justify-center md:justify-start">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-base md:text-lg transition-colors ${
                pathname === href
                  ? "font-semibold text-white"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
