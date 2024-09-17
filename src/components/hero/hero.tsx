import Available from "@/components/common/available";
import ScrollLink from "@/components/common/scroll-link";
import BlurFade from "@/components/magicui/blur-fade";
import Ripple from "@/components/magicui/ripple";
import SparklesText from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import memoji from "../../../public/img/memoji-1.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-10 lg:px-12 lg:pt-32 lg:pb-20">
        <div className="flex flex-col items-center">
          <BlurFade delay={0.25}>
            <Image
              src={memoji}
              alt="Person peeking from behind of a laptop."
              className="z-10 size-[100px]"
              priority
            />
          </BlurFade>

          <BlurFade delay={0.25}>
            <Available />
          </BlurFade>

          <div className="flex max-w-screen-md flex-col items-center justify-center text-center">
            <BlurFade delay={0.5}>
              <span className="mb-4 inline-block font-semibold text-primary text-sm uppercase tracking-wider md:text-base">
                Hi, my name is
              </span>
            </BlurFade>

            <BlurFade delay={0.75}>
              <h1 className="mb-4 font-bold font-space_grotesk text-4xl md:text-5xl lg:text-6xl">
                Kurt Carvey Cadenas
              </h1>
            </BlurFade>

            <BlurFade delay={1}>
              <SparklesText
                text="I build things for the web"
                colors={{ first: "#f97316", second: "#eab308" }}
                className="mb-8 font-bold font-space_grotesk text-3xl md:text-4xl lg:text-5xl"
              />
            </BlurFade>

            <BlurFade delay={1.25}>
              <p className="mb-12 max-w-sm text-base text-muted-foreground md:text-lg lg:text-xl">
                My mission is to create accessible and user-centric web
                applications that you and your audience will love
                <span className="-ml-[0.10rem] mb-2 inline-block rotate-[30deg]">
                  <Heart className="h-3 w-3 text-primary" />
                </span>
                .
              </p>
            </BlurFade>

            <BlurFade delay={1.5}>
              <Button asChild size="lg">
                <ScrollLink id="projects">Check out my projects!</ScrollLink>
              </Button>
            </BlurFade>
          </div>
        </div>
      </div>
      <Ripple mainCircleSize={432} className="-z-10" />
    </section>
  );
}
