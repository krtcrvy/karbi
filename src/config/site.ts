import { SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "Karbi",
  author: "Kurt Carvey Cadenas",
  description: "My personal website built in Nextjs.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/logo.png`,
  links: {
    github: "https://github.com/krtcrvy",
    facebook: "https://facebook.com/krtcrvy",
    twitter: "https://x.com/krtcrvy",
    linkedin: "https://www.linkedin.com/in/kurtcarvey-cadenas",
  },
};
