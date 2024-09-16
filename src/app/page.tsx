import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Tape from "@/components/tape/tape";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Tape />
      <About />
      <Contact />
    </main>
  );
}
