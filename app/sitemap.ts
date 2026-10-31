import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { SEO_ROLLOUT_DATE, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SEO_ROLLOUT_DATE);

  const top: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE_URL}${a.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const other: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  return [...top, ...articles, ...other];
}
