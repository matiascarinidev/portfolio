"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale } from "@/context/LocaleContext";
import Link from "next/link";
export default function ContactPage() {
  const { locale, messages } = useLocale();
  return (
    <div className="text-contrast">
      <SectionTitle description={messages.contact.description} />
      <address className="not-italic mt-8">
        <ul className="flex flex-col gap-5 text-base md:text-lg">
          <li>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-3 text-accent transition-colors duration-300">
                <IoIosMail className="text-2xl md:text-3xl text-accent transition-colors duration-300" />
                <code className="select-all bg-gray-800/50 px-2 py-1 rounded text-sm font-mono">
                  matiascarinidev@gmail.com
                </code>
              </div>
              <Link
                href="mailto:matiascarinidev@gmail.com"
                className="p-2 rounded text-accent text-sm hover:text-accent hover:font-semibold hover:border hover:border-accent transition-all duration-300"
              >
                {messages.contact.send} →
              </Link>
            </div>
          </li>
          <li className="flex items-center gap-3 text-accent transition-colors duration-300">
            <FaLinkedin className="text-2xl md:text-3xl  text-accent" />
            <Link
              href={messages.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              /in/matias-carini
            </Link>
          </li>
          <li className="flex items-center gap-3 text-accent transition-colors duration-300">
            <FaGithub className="text-2xl md:text-3xl text-accent" />
            <Link
              href={messages.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-colors "
            >
              /matiascarinidev
            </Link>
          </li>
        </ul>
      </address>
    </div>
  );
}
