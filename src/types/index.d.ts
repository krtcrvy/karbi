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
    email: string;
  };
};

export type Path = {
  name: string;
  link: string;
};

export type TechStackItems = {
  title: string;
  iconType: React.ElementType;
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
  image: string;
  forks: number;
  owner: string;
};
