"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getDictionary } from "@/app/[lang]/dictionaries";
import en from "@/dictionaries/en.json";
import fa from "@/dictionaries/fa.json";
import { usePathname } from "next/navigation";

const VALID_LANGUAGES = ["en-US", "fa"] as const;
type ValidLanguage = (typeof VALID_LANGUAGES)[number];

const isValidLanguage = (lang: string): lang is ValidLanguage =>
  VALID_LANGUAGES.includes(lang as ValidLanguage);

export interface LanguageContextType {
  language: ValidLanguage;
  setLanguage: (lang: ValidLanguage) => void;
  dict: typeof en | typeof fa;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en-US",
  setLanguage: () => null,
  dict: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [_cookies, setCookie] = useCookies(["language"]);

  const pathLang = pathname?.split("/")[1] || "en"; // Get language from the pathname, default to "en"
  const urlLang = pathLang === "fa" ? "fa" : "en-US"; // Adjust for "fa" or "en-US"

  const [language, setLanguageState] = useState<ValidLanguage>(urlLang);
  const [dict, setDict] = useState<typeof en | typeof fa>(language === "fa" ? fa : en);

  const setLanguage = (lang: ValidLanguage) => {
    if (isValidLanguage(lang)) {
      setLanguageState(lang);
      setCookie("language", lang, { path: "/", maxAge: 31536000 }); // Save in cookie
    }
  };

  useEffect(() => {
    if (language !== urlLang) {
      setLanguage(urlLang);
    }
  }, [urlLang, language, setLanguage]);

  useEffect(() => {
    getDictionary(language === "en-US" ? "en" : language).then(setDict); // Fetch the dictionary
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
