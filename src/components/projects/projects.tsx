"use client";
import { Project } from "@/components/project/project";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export function Projects() {
  const { dict } = useLanguage();

  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center justify-center mb-24">
      <h2 className="text-3xl font-semibold tracking-tight text-center">
        {dict.projects.title}
      </h2>
      {/* TODO <div className="text-sm text-nowrap flex my-2 justify-center">
          <Link
            href={isFarsi ? '/fa/projects' : '/projects'}
            className="text-muted-foreground hover:underline mx-4"
          >
            {isFarsi ? 'مشاهده تمامی پروژه‌ها' : 'See all projects'}
          </Link>
        </div> */}
      <p className="text-lg text-muted-foreground text-justify mb-10">
      {dict.projects.subtitle}
      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 h-full">
        {dict.projects.projectsData.map((project, index) => (
          <div 
          key={project.link}
          className="flex flex-col justify-center items-center w-full md:w-1/2 xl:w-1/3 h-full">
            <Project
              key={project.title}
              title={project.title}
              link={project.link}
              tech={project.technologies}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}