"use client"

import { CookiesProvider } from "react-cookie"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/language-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </CookiesProvider>
  )
}