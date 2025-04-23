"use client"

import * as React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiGoogletranslate } from "react-icons/si";
import { useCookies } from "react-cookie";
import { useLanguage } from "@/contexts/language-context";

const languages = [
  { code: "en-US", label: "English" },
  { code: "fa", label: "فارسی" },
];
export function LanguageSelector() {
  const [cookies, setCookie] = useCookies(["language"]);
  const { language, setLanguage } = useLanguage();

  const detectLanguage = () => {
    if (cookies.language) {
      return cookies.language;
    }
    const browserLang = navigator.language || navigator.languages[0];
    const supportedLang = languages.find((lang) =>
      browserLang.startsWith(lang.code)
    );
    return supportedLang?.code || "en-US";
  };

  useEffect(() => {
    const detectedLanguage = detectLanguage();
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, []);

  const handleLanguageChange = (langCode: any) => {
    setLanguage(langCode);
    setCookie("language", langCode, { path: "/", maxAge: 31536000 });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SiGoogletranslate className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {lang.label}
            </div>
            {language === lang.code && <span className="text-primary">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
