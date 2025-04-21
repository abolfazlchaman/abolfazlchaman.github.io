import { ModeToggle } from "@/components/theme-toggler/theme-toggler";
import { getDictionary } from "./dictionaries";
import { LanguageSelector } from "@/components/language-selector/language-selector";

export default async function Page({ params }: { params: Promise<{ lang: "en" | "fa" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en
  return (
    <nav className="flex row m-2 space-x-4 items-center p-2 border-b-2">
      <h1>{dict.developerInfo.fullName}</h1>
      <ModeToggle />
      <LanguageSelector />
    </nav>
  ); // Add to Cart
}
