import BlurFade from "@/components/magicui/blur-fade";
import { siteConfig } from "@/config/site";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <BlurFade
        className="fixed right-auto bottom-0 left-10 z-10 hidden w-10 lg:block"
        delay={1.75}
      >
        <ul className="vertical-line dark:vertical-link-dark my-4 flex flex-col items-center gap-4">
          <li>
            <Link
              href={`${siteConfig.links.github}?tab=repositories`}
              target="_blank"
            >
              <GitHubLogoIcon className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
            </Link>
          </li>
          <li>
            <Link href={siteConfig.links.linkedin} target="_blank">
              <LinkedInLogoIcon className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
            </Link>
          </li>
        </ul>
      </BlurFade>

      <BlurFade
        className="fixed right-10 bottom-0 left-auto z-10 hidden w-10 lg:block"
        delay={1.75}
      >
        <div className="vertical-line dark:vertical-link-dark my-4 flex flex-col items-center gap-4">
          <Link
            href={`mailto:${siteConfig.links.email}`}
            className="text-muted-foreground text-sm tracking-widest transition-colors ease-in [writing-mode:vertical-rl] hover:text-foreground"
          >
            {siteConfig.links.email}
          </Link>
        </div>
      </BlurFade>
    </>
  );
}
