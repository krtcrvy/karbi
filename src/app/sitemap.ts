import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://karbi.me",
      lastModified: new Date(),
    },
  ];
}
