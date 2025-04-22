import { Navigation } from "@/components/navigation/navigation"
import { Hero } from "@/components/hero/hero"
import { getDictionary } from "./dictionaries"

export default async function Page({ params }: { params: Promise<{ lang: "en" | "fa" }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main>
      <Navigation fullName={dict.developerInfo.fullName} />
      <Hero />
    </main>
  )
}
