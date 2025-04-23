"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getDictionary } from "@/app/dictionaries";
import en from "@/dictionaries/en.json";
import fa from "@/dictionaries/fa.json";

const VALID_LANGUAGES = ["en-US", "fa"] as const;
type ValidLanguage = (typeof VALID_LANGUAGES)[number];

const isValidLanguage = (lang: string): lang is ValidLanguage =>
  VALID_LANGUAGES.includes(lang as ValidLanguage);

// Define the LanguageContextType interface
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
  const [cookies, setCookie] = useCookies(["language"]);
  const initialLang = isValidLanguage(cookies.language) ? cookies.language : "en-US";
  const [language, setLanguageState] = useState<ValidLanguage>(initialLang);
  const [dict, setDict] = useState(language === "fa" ? fa : en);

  const setLanguage = (lang: ValidLanguage) => {
    if (isValidLanguage(lang)) {
      setLanguageState(lang);
      setCookie("language", lang, { path: "/", maxAge: 31536000 });
    }
  };

  useEffect(() => {
    getDictionary(language === "en-US" ? "en" : language).then(setDict);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
