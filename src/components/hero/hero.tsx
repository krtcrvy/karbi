import { Heart } from "lucide-react";
import Image from "next/image";
import memoji from "../../../public/img/memoji-1.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Ripple from "@/components/magicui/ripple";

export default function Hero() {
  return (
    <section className="relative">
      <div className="py-32 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <div className="flex flex-col items-center">
          <Image
            src={memoji}
            alt="Person peeking from behind of a laptop."
            className="size-[100px] z-10"
          />
          <div className="border border-[#0000001a] dark:border-[#ffffff1a] px-4 py-1.5 inline-flex rounded-lg items-center gap-4 mb-8 z-10 bg-transparent backdrop-blur-2xl">
            <div className="bg-green-500 size-2.5 rounded-full animate-pulse" />
            <span className="text-muted-foreground">
              Available for new projects
            </span>
          </div>

          <div className="max-w-screen-md">
            <span className="mb-4 inline-block font-semibold text-primary uppercase tracking-wider">
              Hi, my name is
            </span>

            <h1 className="mb-4 font-bold text-5xl lg:text-6xl font-space_grotesk">
              Kurt Carvey Cadenas
            </h1>

            <p className="mb-8 font-bold text-4xl lg:text-5xl font-space_grotesk">
              I build things for the web
            </p>

            <p className="mb-12 text-lg lg:text-xl">
              I specialize in crafting and designing exceptional digital
              experiences. My mission is to create accessible and user-centric
              web applications that you and your audience will love
              <span className="-ml-[0.10rem] mb-2 inline-block rotate-[30deg]">
                <Heart className="h-3 w-3 text-primary" />
              </span>
              .
            </p>

            <Button asChild size="lg">
              <Link href="#projects">Check out my projects!</Link>
            </Button>
          </div>
        </div>
      </div>
      <Ripple mainCircleSize={300} />
    </section>
  );
}
