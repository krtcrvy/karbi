import BlurFade from "@/components/magicui/blur-fade";
import ProjectCard from "@/components/projects/project-card";
import ProjectsSkeleton from "@/components/projects/projects-skeleton";
import { getRepo } from "@/lib/api/github";
import { Repo } from "@/types";

type RepoData = Repo[] | { error: string };

export default async function Projects() {
  const data = (await getRepo()) as RepoData;

  if ("error" in data) {
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
                Here are some of the projects that I have worked on recently.
                Each project showcases my skills in web development, including
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
              Take a look at some of my recent projects, where innovation meets
              impact. Each one tells a story of problem-solving, creativity, and
              technical expertise.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.75} className="flex flex-col gap-8" inView>
          {Array.isArray(data) &&
            data.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className="sticky"
                style={{
                  top: `calc(64px + ${index * 40}px)`,
                }}
              />
            ))}
        </BlurFade>
      </div>
    </section>
  );
}
