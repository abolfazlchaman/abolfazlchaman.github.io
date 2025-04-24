'use client'
import { useLanguage } from "@/contexts/language-context";
import { Skill } from "../skill/skill";
import {
  SiAmazonwebservices,
  SiCypress,
  SiGraphql,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "AWS", icon: <SiAmazonwebservices size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "GraphQL", icon: <SiGraphql size={40} /> },
  { name: "Redux", icon: <SiRedux size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Jest", icon: <SiJest size={40} /> },
  { name: "Cypress", icon: <SiCypress size={40} /> },
];

export function Skills() {
  const { dict } = useLanguage();

  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold tracking-tight mb-5 text-center">
        {dict.skills.title}
      </h2>
      <p className="text-lg text-muted-foreground text-justify mb-10 max-w-3xl">
        {dict.skills.sub}
      </p>
  <div className="w-full h-full place-items-center content-center items-center grid grid-cols-3 md:grid-cols-5 gap-10 min-h-[calc(2*80px+1.5rem)]">
    {skills.map((skill, index) => (
      <Skill key={index} name={skill.name} icon={skill.icon} />
    ))}
  </div>

    </section>
  );
}
