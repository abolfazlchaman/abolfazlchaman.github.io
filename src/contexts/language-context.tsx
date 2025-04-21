"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getDictionary } from "@/app/[lang]/dictionaries";
import en  from "@/dictionaries/en.json";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  dict: Awaited<ReturnType<typeof getDictionary>>;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => null,
  dict: en, // Use imported English dictionary as default
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [cookies, setCookie] = useCookies(["language"]);
  const [language, setLanguageState] = useState(cookies.language || "en");
  const [dict, setDict] = useState<Awaited<ReturnType<typeof getDictionary>>>(en); // Initialize with en.json

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    setCookie("language", lang, { path: "/", maxAge: 31536000 });
  };

  useEffect(() => {
    document.documentElement.lang = language;
    getDictionary(language).then(setDict);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
