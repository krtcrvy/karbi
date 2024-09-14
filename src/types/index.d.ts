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

// *API*
// Github
type Repo = {
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  link: string;
  website: string;
};
