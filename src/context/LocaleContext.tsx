"use client";

import { createContext, useContext, ReactNode } from "react";
import { Messages } from "@/lib/types";

type LocaleMessages = Messages;

interface LocaleContextType {
  locale: string;
  messages: LocaleMessages;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

interface LocaleProviderProps {
  children: ReactNode;
  locale: string;
  messages: LocaleMessages;
}

export function LocaleProvider({
  children,
  locale,
  messages,
}: LocaleProviderProps) {
  return (
    <LocaleContext.Provider
      value={{
        locale,
        messages,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale debe utilizarse dentro de LocaleProvider");
  }

  return context;
}
