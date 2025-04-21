"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => null,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [cookies, setCookie] = useCookies(["language"]);
  const [language, setLanguageState] = useState(cookies.language || "en");

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    setCookie("language", lang, { path: "/", maxAge: 31536000 });
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
