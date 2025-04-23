"use client";

import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiGmail, SiTelegram } from "react-icons/si";
import Image from "next/image";
import img from "../../../public/img.webp";
import { useLanguage } from "@/contexts/language-context";
import { IoLogoWhatsapp } from "react-icons/io";

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/abolfazlchaman", label: "GitHub" },
  { icon: SiGmail, href: "mailto:abolfazl.chaman@gmail.com", label: "Email" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/abolfazlchaman", label: "LinkedIn" },
  { icon: SiTelegram, href: "https://t.me/abolfazlchaman", label: "Telegram" },
  { icon: IoLogoWhatsapp, href: "https://wa.me/+989171234567", label: "WhatsApp" },
];

export function Hero() {
  const { dict } = useLanguage();

  const dictionary = dict as {
    developerInfo: {
      fullName: string;
      profession: string;
      experience: string;
      location: string;
    };
    theme: {
      toggle: string;
      light: string;
      dark: string;
      system: string;
    };
    navigation: {
      home: string;
      about: string;
      projects: string;
      blog: string;
      toggle_menu: string;
    };
  };

  const { fullName, profession, experience, location } = { ...dictionary.developerInfo };

  return (
    <div className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col md:flex-row items-center justify-center md:justify-around mt-16">
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0px_4px_30px_0px_rgba(0,0,0,0.20)] dark:shadow-[0px_4px_30px_0px_rgba(255,255,255,0.20)] rotate-[-30deg] transition-transform transform m-10">
        <Image
          src={img.src}
          alt={fullName}
          fill
          className="object-cover aspect-square rounded-full"
          priority
        />
      </div>
      <div className="space-y-2 flex flex-col justify-center items-center text-center">
        <div className="flex flex-wrap justify-center gap-2">
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
                rel="noopener noreferrer"
                aria-label={link.label}>
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight my-5 text-shadow">
          {fullName}
          <span className="animate-pulse [animation-duration:0.5s] [animation-iteration-count:infinite] [animation-timing-function:steps(1,start)]">
            {" "}
            _
          </span>
        </h1>
        <h2 className="text-xl text-muted-foreground">{profession}</h2>
        <p className="text-muted-foreground">{experience}</p>
        <p className="text-muted-foreground">{location}</p>
      </div>
    </div>
  );
}
