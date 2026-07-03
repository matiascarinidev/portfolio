"use client";
import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale } from "@/context/LocaleContext";
export default function HomePage() {
  const { locale, messages } = useLocale();
  return (
    <div className="text-contrast ">
      <SectionTitle description={messages.home.description} />
      <div className="flex flex-wrap gap-4 mt-2">
        <Button href={`/${locale}/contact`}>{messages.contact.cta}</Button>
        <Button href={`/${locale}/projects`} variant="secondary">
          {messages.projects.cta}
        </Button>
      </div>
    </div>
  );
}
