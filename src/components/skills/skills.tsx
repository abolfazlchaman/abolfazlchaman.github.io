import { Skill } from "../skill/skill";
import { SiAmazonwebservices, SiCypress, SiGraphql, SiJavascript, SiJest, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
export function Skills() {
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold tracking-tight mb-5 text-center">
        Some of the Technologies I've mastered
      </h2>
      <p className="text-lg text-muted-foreground text-justify mb-10">
        This is not an exhaustive list, but rather a selection of my favorites.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
      <Skill
          name="TypeScript"
          icon={<SiTypescript size={40} />}
        />
        <Skill
          name="AWS"
          icon={<SiAmazonwebservices size={40} />}
        />
        <Skill
          name="React"
          icon={<SiReact size={40} />}
        />
        <Skill
          name="Next.js"
          icon={<SiNextdotjs size={40} />}
        />
        <Skill
          name="Node.js"
          icon={<SiNodedotjs size={40} />}
        />
        <Skill
          name="GraphQL"
          icon={<SiGraphql size={40} />}
        />
        <Skill
          name="Redux"
          icon={<SiRedux size={40} />}
        />
        <Skill
          name="Tailwind CSS"
          icon={<SiTailwindcss size={40} />}
        />
        <Skill
          name="Jest"
          icon={<SiJest size={40} />}
        />
        <Skill
          name="Cypress"
          icon={<SiCypress size={40} />}
        />
        {/* Add more skills here */}
      </div>
    </section>
  );
}
