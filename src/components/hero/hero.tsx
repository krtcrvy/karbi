import Available from "@/components/common/available";
import BlurFade from "@/components/magicui/blur-fade";
import Ripple from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import memoji from "../../../public/img/memoji-1.png";
import SparklesText from "@/components/magicui/sparkles-text";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-32 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <div className="flex flex-col items-center">
          <BlurFade delay={0.25} className="z-10">
            <Image
              src={memoji}
              alt="Person peeking from behind of a laptop."
              className="size-[100px] z-10"
              priority
            />
          </BlurFade>

          <BlurFade className="z-10 bg-transparent backdrop-blur-2xl mb-8">
            <Available />
          </BlurFade>

          <div className="max-w-screen-md flex flex-col items-center justify-center">
            <BlurFade delay={0.5} className="z-10">
              <span className="mb-4 inline-block font-semibold text-primary uppercase tracking-wider">
                Hi, my name is
              </span>
            </BlurFade>

            <BlurFade delay={0.75} className="z-10">
              <h1 className="mb-4 font-bold text-5xl lg:text-6xl font-space_grotesk">
                Kurt Carvey Cadenas
              </h1>
            </BlurFade>

            <BlurFade delay={1} className="z-10">
              <SparklesText
                text="I build things for the web"
                colors={{ first: "#f97316", second: "#eab308" }}
                className="mb-8 font-bold text-4xl lg:text-5xl font-space_grotesk"
              />
            </BlurFade>

            <BlurFade delay={1.25} className="z-10">
              <p className="mb-12 text-lg lg:text-xl">
                I specialize in crafting and designing exceptional digital
                experiences. My mission is to create accessible and user-centric
                web applications that you and your audience will love
                <span className="-ml-[0.10rem] mb-2 inline-block rotate-[30deg]">
                  <Heart className="h-3 w-3 text-primary" />
                </span>
                .
              </p>
            </BlurFade>

            <BlurFade delay={1.5} className="z-10">
              <Button asChild size="lg">
                <Link href="#projects">Check out my projects!</Link>
              </Button>
            </BlurFade>
          </div>
        </div>
      </div>
      <Ripple mainCircleSize={432} />
    </section>
  );
}
