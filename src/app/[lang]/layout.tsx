import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import localFont from "next/font/local";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shabnam = localFont({
  src: [
    {
      path: "../../../public/fonts/Shabnam-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Shabnam.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Shabnam-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
  display: "swap",
});

export const metadata: Metadata = {
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
  const resolvedParams = await params;
  const dir = resolvedParams.lang === "fa" ? "rtl" : "ltr";

  return (
    <html
      lang={resolvedParams.lang}
      dir={dir}>
      <body className={`${shabnam.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
