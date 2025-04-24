"use client"
import { Project } from "@/components/project/project";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Projects() {
  const {dict} = useLanguage()
    const pathname = usePathname();
    const isFarsi = pathname.startsWith('/fa');
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center justify-center mb-24">
      <h2 className="text-3xl font-semibold tracking-tight text-center">
        {dict.projects.title}
      </h2>
      <div className="text-sm text-nowrap flex my-2 justify-center">
          <Link
            href={isFarsi ? '/fa/projects' : '/projects'}
            className="text-muted-foreground hover:underline mx-4"
          >
            {isFarsi ? 'مشاهده تمامی پروژه‌ها' : 'See all projects'}
          </Link>
        </div>
      <p className="text-lg text-muted-foreground text-justify mb-10">
      {dict.projects.subtitle}
      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
      {dict.projects.projectsData.map((project, index) => (
    <Project
      key={index}
      title={project.title}
      link={project.link}
      tech={project.technologies}
      description={project.description}
      image=""
    />
  ))}
        {/* Add more projects here */}
      </div>
    </section>
  );
}