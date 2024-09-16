import BlurFade from "@/components/magicui/blur-fade";

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
      </div>
    </section>
  );
}
