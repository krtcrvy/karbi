declare module "get-pinned-repos" {
  export type ILanguage = {
    name: string;
    color: string;
    id: string;
  };

  export type IPinnedRepo = {
    name: string;
    url: string;
    stargazerCount: string;
    primaryLanguage: ILanguage;
    description: string;
    createdAt: string;
    forkCount: number;
    homepageUrl: string;
    id: string;
    isArchived: boolean;
    isFork: boolean;
    isInOrganization: boolean;
    isTemplate: boolean;
    languages: ILanguage[];
  };

  export type IRes = {
    user: {
      pinnedItems: {
        nodes: IPinnedRepo[];
      };
    };
  };

  export class Client {
    static setToken(token: string): void;
    static getPinnedRepos(username: string): IPinnedRepo[];
  }
}
