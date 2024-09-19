import { siteConfig } from "@/config/site";
import Link from "next/link";
import BlurFade from "../magicui/blur-fade";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <BlurFade delay={1} inView>
      <footer className="p-4 sm:p-6">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex items-center justify-center">
            <span className="text-center text-muted-foreground text-sm">
              &copy; {year}{" "}
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className="hover:underline"
              >
                Kurt Carvey Cadenas
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </BlurFade>
  );
}
