import AboutCard from "@/components/about/about-card";
import AboutCardHeader from "@/components/about/about-card-header";
import TechStackItems from "@/components/common/tech-stack-items";
import BlurFade from "@/components/magicui/blur-fade";
import { hobbies, techStackItems } from "@/consts";
import Image from "next/image";
import bookImage from "../../../public/img/book-cover.png";
import mapImage from "../../../public/img/map.png";
import memoji from "../../../public/img/memoji-2.png";

export default function About() {
  return (
    <section id="about">
      <div className="py-32 px-4 mx-auto max-w-screen-xl lg:px-12">
        <div className="max-w-screen-sm lg:max-w-screen-md mx-auto text-center mb-16">
          <BlurFade inView>
            <span className="mb-4 inline-block font-semibold text-primary uppercase tracking-wider text-sm md:text-base">
              About Me
            </span>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <h2 className="mb-8 font-bold text-3xl md:text-4xl lg:text-5xl font-space_grotesk">
              A Glimpse Into My World
            </h2>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Learn more about who I am, what I do, and what inspires me.
            </p>
          </BlurFade>
        </div>

        <div className="max-w-screen-sm lg:max-w-screen-xl w-full mx-auto flex flex-col gap-8">
          <AboutCard className="h-80">
            <AboutCardHeader
              title="My Reads"
              description="Delve into the books that are shaping my insights and perspectives."
            />

            <div className="w-40 mx-auto">
              <Image src={bookImage} alt="Book cover" priority />
            </div>
          </AboutCard>

          <AboutCard className="h-80 p-0 flex flex-col">
            <AboutCardHeader
              title="My Tech Stack"
              description="Discover the cutting-edge technologies and tools I leverage to create outstanding digital experiences."
              className="px-4 pt-4"
            />

            <TechStackItems items={techStackItems} className="mt-4" />
            <TechStackItems
              items={techStackItems}
              className="mt-4"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </AboutCard>

          <AboutCard className="h-80 p-0 flex flex-col">
            <AboutCardHeader
              title="Beyond the Code"
              description="Discover more about my interests and hobbies outside the digital world."
              className="px-4 py-4"
            />

            <div className="relative flex-1">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-600 rounded-full absolute shadow"
                  style={{ left: hobby.left, top: hobby.top }}
                >
                  <span className="font-medium text-stone-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </AboutCard>

          <AboutCard className="h-80 p-0 relative">
            <Image
              src={mapImage}
              alt="Map"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-600 outline outline-2 outline-[#0c0a091a] dark:outline-[#fafaf91a] shadow">
              <Image src={memoji} alt="Smiling Memoji" className="size-20" />
            </div>
          </AboutCard>
        </div>
      </div>
    </section>
  );
}
