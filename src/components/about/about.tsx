import AboutCard from "@/components/about/about-card";
import AboutCardHeader from "@/components/about/about-card-header";
import TechIcon from "@/components/common/tech-icon";
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

        <div className="max-w-screen-sm lg:max-w-screen-xl w-full mx-auto">
          <AboutCard className="h-80">
            <AboutCardHeader
              title="My Reads"
              description="Delve into the books that are shaping my insights and perspectives."
            />

            <div className="w-40 mx-auto">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </AboutCard>

          <AboutCard>
            <AboutCardHeader
              title="My Tech Stack"
              description="Discover the cutting-edge technologies and tools I leverage to create outstanding digital experiences."
            />

            <div>
              {techStackItems.map((tech, index) => (
                <div key={index}>
                  <TechIcon component={tech.iconType} />
                  <span>{tech.title}</span>
                </div>
              ))}
            </div>
          </AboutCard>

          <AboutCard>
            <AboutCardHeader
              title="Beyond the Code"
              description="Discover more about my interests and hobbies outside the digital world."
            />

            <div>
              {hobbies.map((hobby, index) => (
                <div key={index}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </AboutCard>

          <AboutCard>
            <Image src={mapImage} alt="Map" />
            <Image src={memoji} alt="Smiling Memoji" />
          </AboutCard>
        </div>
      </div>
    </section>
  );
}
