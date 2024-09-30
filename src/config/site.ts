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
    email: "kurtcarvey.m.cadenas@gmail.com",
    resume:
      "https://docs.google.com/document/d/1eWRRSzfpO4p3WMTAK3uyUJ6hutCA57gX/edit?usp=sharing&ouid=101917230904487688185&rtpof=true&sd=true",
  },
};
