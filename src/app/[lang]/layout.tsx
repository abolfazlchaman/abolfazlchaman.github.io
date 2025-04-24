import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import localFont from "next/font/local";

// Define the Geist_Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the Shabnam font with multiple weights
const shabnam = localFont({
  src: [
    {
      path: "../../../public/fonts/Shabnam-Light.woff2", // Ensure path is correct, fonts should be under public/fonts
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Shabnam.woff2", // Ensure path is correct
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Shabnam-Bold.woff2", // Ensure path is correct
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
  display: "swap", // Swap is good for preventing invisible text during font loading
});

// Metadata for the website
export const metadata: Metadata = {
  title: "Abolfazl Chaman",
  description: "My Next.js experimental portfolio",
  icons: {
    icon: '/favicon.ico', // Ensure favicon path is correct
  },
};

// Main layout component
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === "fa" ? "rtl" : "ltr"; // RTL for Farsi (fa), LTR for others

  return (
    <html lang={lang} dir={dir}>
      <body className={`${shabnam.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers> {/* Wrap children with your global providers */}
      </body>
    </html>
  );
}
