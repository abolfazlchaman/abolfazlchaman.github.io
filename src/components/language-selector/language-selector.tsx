"use client"

import * as React from "react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useCookies } from "react-cookie"

const languages = [
  { code: "en-US", label: "English", path: "/" },
  { code: "fa", label: "فارسی", path: "/fa" },
]

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [cookies, setCookie] = useCookies(["language"])

  const detectLanguage = () => {
    // Check cookie first
    if (cookies.language) {
      return cookies.language
    }

    // Check browser language
    const browserLang = navigator.language || navigator.languages[0]
    const supportedLang = languages.find(lang => 
      browserLang.startsWith(lang.code)
    )
    return supportedLang?.code || "en-US"
  }

  const setLanguage = (lang: string) => {
    setCookie("language", lang, { path: "/", maxAge: 31536000 }) // 1 year
    const langPath = languages.find(l => l.code === lang)?.path || "/"
    router.push(langPath)
  }

  useEffect(() => {
    const detectedLang = detectLanguage()
    if (detectedLang !== cookies.language) {
      setLanguage(detectedLang)
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {lang.label}
            </div>
            {pathname === lang.path && <span className="text-primary">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}