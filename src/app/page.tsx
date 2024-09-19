import Loading from "@/app/loading";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Tape from "@/components/tape/tape";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
      <Tape />
      <About />
      <Contact />
    </main>
  );
}
