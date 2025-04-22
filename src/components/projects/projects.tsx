import { Project } from "@/components/project/project";

export function Projects() {
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center justify-center mb-24">
      <h2 className="text-3xl font-semibold tracking-tight mb-5 text-center">
        Handful of projects I've collaborated on
      </h2>
      <p className="text-lg text-muted-foreground text-justify mb-10">
        This is not a complete list but rather a selection of projects I have contributed to.
      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
        <Project
          title="Alpha"
          link="[https://project1.com](https://project1.com)"
          tech={["React", "Next.js", "TypeScript"]}
          description="This is a brief description of Project 1"
          image=""
        />
        <Project
          title="Beta"
          link="[https://project2.com](https://project2.com)"
          tech={["Vue.js", "Nuxt.js", "JavaScript"]}
          description="This is a brief description of Project 2"
          image=""
        />
        {/* Add more projects here */}
      </div>
    </section>
  );
}