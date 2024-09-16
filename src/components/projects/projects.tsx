import BlurFade from "@/components/magicui/blur-fade";
import ProjectCard from "@/components/projects/project-card";
import { getRepo } from "@/lib/api/github";
import { Repo } from "@/types";

type RepoData = Repo[] | { error: string };

export default async function Projects() {
  const data = (await getRepo()) as RepoData;

  return (
    <section id="projects">
      <div className="py-32 px-4 mx-auto max-w-screen-xl lg:px-12">
        <div className="max-w-screen-md mx-auto text-center mb-16">
          <BlurFade inView>
            <span className="mb-4 inline-block font-semibold text-primary uppercase tracking-wider text-sm md:text-base">
              Some things I&apos;ve built
            </span>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <h2 className="mb-8 font-bold text-3xl md:text-4xl lg:text-5xl font-space_grotesk">
              Featured Projects
            </h2>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Here are some of the projects that I have worked on recently. Each
              project showcases my skills in web development, including
              front-end design, back-end integration, and user experience
              optimization.
            </p>
          </BlurFade>
        </div>

        <div className="max-w-screen-xl w-full flex flex-col items-center mx-auto">
          <BlurFade delay={0.75} className="flex flex-col gap-16" inView>
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
      </div>
    </section>
  );
}
