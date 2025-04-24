// src/components/project/project.tsx
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectProps {
  title: string;
  link: string;
  tech: string[];
  description: string;
  image?: string; // Make image optional
}

export function Project({ title, link, tech, description, image }: ProjectProps) {
  const imageSrc = image || "";

  return (
    <div className="flex flex-col space-x-3 items-center justify-center w-full md:w-1/2 xl:w-1/3">
      <h3 className="text-2xl font-semibold tracking-tight mb-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-lg text-foreground hover:text-muted-foreground underline underline-offset-4">
        <FiExternalLink size={20} className="mx-1"/>
        {title}
      </a>
      </h3>
      <div className="container bg-white dark:bg-black/10 p-6 rounded-2xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.20)] dark:shadow-[0px_4px_30px_0px_rgba(255,255,255,0.10)]">

      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          className="object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-foreground rounded-sm" />
      )}
      </div>
      <div className="flex flex-nowrap justify-center my-4">
        {tech.map((tech) => (
          <span
            key={tech}
            className="text-lg text-muted-foreground mr-2">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-lg text-muted-foreground text-justify mb-4">{description}</p>
    </div>
  );
}
