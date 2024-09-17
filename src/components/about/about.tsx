import AboutCard from "@/components/about/about-card";
import AboutCardHeader from "@/components/about/about-card-header";
import TechStackItems from "@/components/common/tech-stack-items";
import BlurFade from "@/components/magicui/blur-fade";
import { CardContent } from "@/components/ui/card";
import { hobbies, techStackItems } from "@/consts";
import Image from "next/image";
import bookImage from "../../../public/img/book-cover.png";
import mapImage from "../../../public/img/map.png";
import memoji from "../../../public/img/memoji-2.png";

export default function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 lg:px-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto mb-16 max-w-screen-sm text-center lg:max-w-screen-md">
          <BlurFade inView>
            <span className="mb-4 inline-block font-semibold text-primary text-sm uppercase tracking-wider md:text-base">
              About Me
            </span>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <h2 className="mb-8 font-bold font-space_grotesk text-3xl md:text-4xl lg:text-5xl">
              A Glimpse Into My World
            </h2>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
              Learn more about who I am, what I do, and what inspires me to keep
              pushing the boundaries of what&apos;s possible.
            </p>
          </BlurFade>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <BlurFade
              delay={0.75}
              className="md:col-span-2 lg:col-span-1"
              inView
            >
              <AboutCard className="h-80">
                <AboutCardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />
                <CardContent>
                  <div className="mx-auto w-40">
                    <Image src={bookImage} alt="Book cover" priority />
                  </div>
                </CardContent>
              </AboutCard>
            </BlurFade>

            <BlurFade delay={1} className="md:col-span-3 lg:col-span-2" inView>
              <AboutCard className="h-80">
                <AboutCardHeader
                  title="My Tech Stack"
                  description=" Explore the technologies and tools I use to craft exceptional digital experiences."
                />
                <CardContent>
                  <TechStackItems items={techStackItems} className="mb-6" />
                  <TechStackItems
                    items={techStackItems}
                    itemsWrapperClassName="-translate-x-1/2"
                  />
                </CardContent>
              </AboutCard>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <BlurFade
              delay={0.25}
              className="md:col-span-3 lg:col-span-2"
              inView
            >
              <AboutCard className="flex h-80 flex-col">
                <AboutCardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm."
                />

                <CardContent className="relative flex-1 pt-6">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-1.5 shadow dark:from-orange-500 dark:to-orange-600"
                      style={{ left: hobby.left, top: hobby.top }}
                    >
                      <span className="font-medium text-stone-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </div>
                  ))}
                </CardContent>
              </AboutCard>
            </BlurFade>

            <BlurFade
              delay={0.5}
              className="md:col-span-2 lg:col-span-1"
              inView
            >
              <AboutCard className="relative h-80">
                <Image
                  src={mapImage}
                  alt="Map"
                  className="h-full w-full rounded-xl object-cover object-left-top"
                />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 shadow outline outline-2 outline-[#0c0a091a] dark:from-orange-500 dark:to-orange-600 dark:outline-[#fafaf91a]">
                  <Image
                    src={memoji}
                    alt="Smiling Memoji"
                    className="size-20"
                  />
                </div>
              </AboutCard>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
