import { env } from "@/env.mjs";
import { Client } from "get-pinned-repos";

const GH_ACCESS_TOKEN = env.GH_ACCESS_TOKEN;
const GH_USERNAME = env.GH_USERNAME;

Client.setToken(GH_ACCESS_TOKEN);

// Fetch my pinned repository
export const getRepo = async () => {
  try {
    const pinned = Client.getPinnedRepos(GH_USERNAME);
    return pinned;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed fetching data" };
  }
};
