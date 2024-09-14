import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Socials() {
  return (
    <>
      <div className="fixed right-auto bottom-0 left-10 z-10 hidden w-10 lg:block">
        <ul className="vertical-line dark:vertical-link-dark my-4 flex flex-col items-center gap-4">
          <li>
            <Link href="https://github.com/krtcrvy" target="_blank">
              <Github className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-primary" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/kurtcarvey-cadenas/"
              target="_blank"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-primary" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="fixed right-10 bottom-0 left-auto z-10 hidden w-10 lg:block">
        <div className="vertical-line dark:vertical-link-dark my-4 flex flex-col items-center gap-4">
          <Link
            href="mailto:kurtcarvey.m.cadenas@gmail.com"
            className="text-sm text-muted-foreground tracking-widest transition-colors ease-in [writing-mode:vertical-rl] hover:text-primary"
          >
            kurtcarvey.m.cadenas@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}
