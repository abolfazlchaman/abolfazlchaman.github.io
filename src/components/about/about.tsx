import Image from "next/image";
import { Button } from "../ui/button";
import img from "../../../public/about.webp";

export function About() {
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="space-y-2 flex text-justify flex-col justify-center items-center md:mx-10 md:w-1/2">
        <h2 className="text-3xl font-semibold tracking-tight mb-5 text-center">About me</h2>
        <p className="text-lg text-muted-foreground text-justify">
          Hi! I am always eager for projects that challenge me as a professional web developer.
        </p>
        <p className="text-lg text-muted-foreground text-justify">
          By paying attention to even small details, I always try to write highly readable,
          maintainable & performant code bases / applications. I am always searching for new
          standards and best practices to use with the latest technologies!
        </p>
        <p className="text-lg text-muted-foreground text-justify">
          In my free time, I Contribute to open source projects.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <Button
            variant="outline"
            size="sm"
            asChild>
            <a
              href="https://example.com/english-cv.pdf"
              target="_blank"
              rel="noopener noreferrer">
              English CV
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild>
            <a
              href="https://example.com/persian-cv.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Persian CV
            </a>
          </Button>
        </div>
      </div>
      {/* <div className="relative w-full h-[500px] md:w-1/2 rounded-[3px] overflow-hidden shadow-[0px_4px_30px_0px_rgba(0,0,0,0.20)] dark:shadow-[0px_4px_30px_0px_rgba(255,255,255,0.20)] transition-transform transform m-10">
        <Image
          src={img.src}
          alt="Abolfazl Chaman"
          layout="fill"
          className="object-cover"
          priority
        />
      </div> */}
    </section>
  );
}

export default About;

