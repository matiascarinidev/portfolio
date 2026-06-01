import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-2 text-sm md:text-base font-medium rounded-md transition-all duration-200";

  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "border border-white/30 text-white hover:bg-white/10",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
