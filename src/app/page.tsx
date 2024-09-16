import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import About from "@/components/about/about";
import Tape from "@/components/tape/tape";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Tape />
      <About />
    </main>
  );
}
