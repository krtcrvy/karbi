import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GH_ACCESS_TOKEN: z.string().startsWith("ghp_"),
    GH_USERNAME: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv: {
    GH_ACCESS_TOKEN: process.env.GH_ACCESS_TOKEN,
    GH_USERNAME: process.env.GH_USERNAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
