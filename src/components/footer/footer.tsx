"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/abolfazlchaman", label: "GitHub" },
  { icon: SiGmail, href: "mailto:abolfazl.chaman@gmail.com", label: "Email" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/abolfazlchaman", label: "LinkedIn" },
  { icon: SiTelegram, href: "https://t.me/abolfazlchaman", label: "Telegram" },
  { icon: IoLogoWhatsapp, href: "https://wa.me/+989171234567", label: "WhatsApp" },
];

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

function getJalaliYear() {
  const date = new Date();
  const year = date.getFullYear() - 621;
  return year;
}

export function Footer() {
  const { dict } = useLanguage();
  return (
    <footer className="container mx-auto p-4 pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap justify-center mb-4">
        {footerLinks.map((link) => (
          <Button
            key={link.label}
            variant="link"
            size="sm"
            asChild
            className="gap-2">
            <a href={link.href}>{link.label}</a>
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mb-4 space-x-4">
        {socialLinks.map((link) => (
          <Button
            key={link.label}
            variant="outline"
            size="sm"
            asChild
            className="gap-2">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer">
              <link.icon className="w-4 h-4" />
              <span className="sr-only">{link.label}</span>
            </a>
          </Button>
        ))}
      </div>
      <br />
      <blockquote className="text-center text-sm text-gray-500 dark:text-gray-400">
        &ldquo;{dict.footer.quote}&rdquo; - {dict.footer.author}
      </blockquote>{" "}
      <p className="text-center text-sm text-gray-500 mt-4 dark:text-gray-400">
        &copy; {dict.language === "fa" ? getJalaliYear() : new Date().getFullYear()}{" "}
        {dict.developerInfo.fullName} | {dict.footer.copyrightText}
      </p>
    </footer>
  );
}
