"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale } from "@/context/LocaleContext";
export default function ContactPage() {
  const { locale, messages } = useLocale();
  return (
    <div className="text-contrast">
      <SectionTitle description={messages.contact.description} />
      <address className="not-italic mt-8">
        <ul className="flex flex-col gap-5 text-base md:text-lg">
          <li className="flex items-center gap-3">
            <IoIosMail className="text-2xl md:text-3xl shrink-0 text-accent" />
            <div className="flex flex-wrap items-center gap-2">
              <code className="select-all bg-gray-800/50 px-2 py-1 rounded text-sm font-mono">
                matiascarinidev@gmail.com
              </code>
              <a
                href="mailto:matiascarinidev@gmail.com"
                className="text-accent text-sm hover:text-accent-dark transition-colors"
              >
                Enviar mail →
              </a>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <FaLinkedin className="text-2xl md:text-3xl shrink-0 text-accent" />
            <a
              href="https://www.linkedin.com/in/matias-carini/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              /in/matias-carini
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGithub className="text-2xl md:text-3xl shrink-0 text-accent" />
            <a
              href="https://github.com/matiascarinidev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              /matiascarinidev
            </a>
          </li>
        </ul>
      </address>
    </div>
  );
}
