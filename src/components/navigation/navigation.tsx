"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggler/theme-toggler";
import { LanguageSelector } from "@/components/language-selector/language-selector";
import { useLanguage } from "@/contexts/language-context";
import { SiHomeadvisor, SiCircle, SiGithub, SiBloglovin } from "react-icons/si";
import { Menu, X } from "lucide-react";

const getNavigationItems = (dict: any) => [
  { label: dict.navigation.home, icon: SiHomeadvisor, href: "/" },
  { label: dict.navigation.about, icon: SiCircle, href: "/about" },
  { label: dict.navigation.projects, icon: SiGithub, href: "/projects" },
  { label: dict.navigation.blog, icon: SiBloglovin, href: "/blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { dict } = useLanguage();
  const navigationItems = getNavigationItems(dict);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container min-w-full flex h-16 items-center justify-between px-4 md:px-6">
        <div className="relative z-50">
          <h1 className={cn("font-semibold", isOpen && "text-foreground")}>{dict.developerInfo.fullName}</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
          <div className="flex items-center space-x-6 px-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                <item.icon className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Theme and Language Controls */}
        <div className="hidden md:flex md:items-center justify-end">
          <div className="flex items-center gap-4 border-l pl-6 rtl:border-r rtl:pr-6 rtl:pl-0 rtl:border-l-0">
            <ModeToggle />
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="relative z-50 block md:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          <Menu
            className={cn(
              "h-6 w-6 transition-all duration-200",
              isOpen ? "opacity-0" : "text-foreground opacity-100",
            )}
          />
          <X
            className={cn(
              "absolute right-0 top-0 h-6 w-6 transition-all duration-200",
              !isOpen ? "opacity-0" : "text-foreground opacity-100",
            )}
          />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 h-screen w-full bg-background",
          isOpen ? "block" : "hidden",
        )}>
        <div className="container h-full px-4 pt-20">
          <nav className="flex flex-col space-y-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center text-lg font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}>
                <item.icon className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-t pt-6">
              <ModeToggle />
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
