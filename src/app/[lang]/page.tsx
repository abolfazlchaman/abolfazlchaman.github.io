import { Navigation } from "@/components/navigation/navigation";
import { Hero } from "@/components/hero/hero";
import { getDictionary } from "./dictionaries";
import About from "@/components/about/about";
import { Footer } from "@/components/footer/footer";

export default async function Page({ params }: { params: Promise<{ lang: "en" | "fa" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <Navigation fullName={dict.developerInfo.fullName} />
      <div className="container md:px-40 lg:px-60 xl:px-80 px-10 min-w-full">
        <Hero />
        <About />
      </div>
      <Footer />
    </main>
  );
}
