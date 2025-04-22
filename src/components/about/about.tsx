"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import img from "../../../public/about.webp";
import { useLanguage } from "@/contexts/language-context";

interface AboutDict {
  title: string;
  description: string;
  buttonTextEn: string;
  buttonTextFa: string;
}

export function About() {
  const { dict } = useLanguage();
  const aboutDict = dict.about as AboutDict;
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex md:flex-row flex-col-reverse md:flex-row items-center justify-center">
      <div className="space-y-2 flex text-justify flex-col justify-center items-center md:mx-10 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{dict.about.title}</h2>
        <p className="text-lg mb-4">{dict.about.description}</p>
        <div className="flex flex-row justify-center gap-2 mt-5">
          <Button
            variant="outline"
            size="sm"
            asChild>
            <a
              href="https://example.com/english-cv.pdf"
              target="_blank"
              rel="noopener noreferrer">
              {aboutDict.buttonTextEn}
            </a>
          </Button>

          {dict.language === "fa" && (
            <Button
              variant="outline"
              size="sm"
              asChild>
              <a
                href="https://example.com/english-cv.pdf"
                target="_blank"
                rel="noopener noreferrer">
                {aboutDict.buttonTextFa}
              </a>
            </Button>
          )}
        </div>
        <Image
          src={img}
          alt="About Image"
        />
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
