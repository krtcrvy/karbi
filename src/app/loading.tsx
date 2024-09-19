import BlurFade from "@/components/magicui/blur-fade";
import ProjectsSkeleton from "@/components/projects/projects-skeleton";

export default function Loading() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 lg:px-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto mb-16 max-w-screen-sm text-center lg:max-w-screen-md">
          <BlurFade inView>
            <span className="mb-4 inline-block font-semibold text-primary text-sm uppercase tracking-wider md:text-base">
              Some things I&apos;ve built
            </span>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <h2 className="mb-8 font-bold font-space_grotesk text-3xl md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
              Here are some of the projects that I have worked on recently. Each
              project showcases my skills in web development, including
              front-end design, back-end integration, and user experience
              optimization.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.75} className="flex flex-col gap-8" inView>
          <ProjectsSkeleton />
        </BlurFade>
      </div>
    </section>
  );
}
