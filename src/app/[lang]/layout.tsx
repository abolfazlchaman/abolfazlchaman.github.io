import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { CookiesProvider } from "react-cookie";
import { Providers } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // spell-checker: disable-next-line
  title: "Abolfazl Chaman",
  description: "My Next.js experimental portfolio",
};

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "fa" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en-US" | "fa" }>;
}>) {
  return (
    <html lang={(await params).lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
