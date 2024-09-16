"use client";

import Logo from "@/components/common/logo";
import ScrollLink from "@/components/common/scroll-link";
import BlurFade from "@/components/magicui/blur-fade";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { paths } from "@/consts";
import { useScroll } from "@/hooks/use-scroll";
import { Path } from "@/types";

export default function Header() {
  const scrolled = useScroll(50);

  return (
    <header
      className={`fixed top-0 flex w-full justify-center ${
        scrolled
          ? "bg-background/30 border border-b-[#0c0a091a] dark:border-b-[#fafaf91a] backdrop-blur-sm"
          : "bg-transparent"
      } z-30 transition-all ease-in`}
    >
      <BlurFade className="w-full">
        <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 lg:px-6 py-2.5 w-full">
          <Logo />

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto gap-8">
            <ul className="inline-flex space-x-8">
              {paths.map(({ name }: Path, index: number) => (
                <ScrollLink
                  id={name.toLowerCase()}
                  key={index}
                  className="text-muted-foreground transition-colors ease-in hover:text-primary"
                >
                  {name}
                </ScrollLink>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button>Resume</Button>
            </div>
          </div>
        </nav>
      </BlurFade>
    </header>
  );
}
