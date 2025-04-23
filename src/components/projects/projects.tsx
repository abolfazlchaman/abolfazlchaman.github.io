"use client"
import { Project } from "@/components/project/project";
import { useLanguage } from "@/contexts/language-context";

export function Projects() {
  const {dict} = useLanguage()
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center justify-center mb-24">
      <h2 className="text-3xl font-semibold tracking-tight mb-5 text-center">
        {dict.skills.title}
      </h2>
      <p className="text-lg text-muted-foreground text-justify mb-10">
      {dict.skills.sub}

      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
      {dict.projects.projectsData.map((project, index) => (
    <Project
      key={index} // Add a unique key for each element
      title={project.title}
      link={project.link}
      tech={project.technologies}
      description={project.description}
      image="" // Assuming you'll add an image URL later
    />
  ))}
        {/* Add more projects here */}
      </div>
    </section>
  );
}