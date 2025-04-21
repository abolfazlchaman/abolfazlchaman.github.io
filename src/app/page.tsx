import { ModeToggle } from "@/components/theme-toggler/theme-toggler";

export default function Home() {
  return (
    <div>
      <main className="h-full w-full items-center text-center select-none cursor-crosshair">
        <p>hi i am a paragraph</p>
        <ModeToggle/>
      </main>
    </div>
  );
}
