// *Config*
export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    facebook: string;
    twitter: string;
    linkedin: string;
  };
};

export type Path = {
  name: string;
  link: string;
};

// *API*
// Github
export type Repo = {
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  link: string;
  website: string;
};
