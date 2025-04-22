import { Navigation } from "@/components/navigation/navigation"
import { getDictionary } from "./dictionaries"

export default async function Page({ params }: { params: Promise<{ lang: "en" | "fa" }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main>
      <Navigation fullName={dict.developerInfo.fullName} />
    </main>
  )
}
