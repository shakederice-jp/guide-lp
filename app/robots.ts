import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// 方針(ipo-scout/ipo-scout-usと同一): 検索用ボット・AI回答時の参照ボットは許可し、
// AIの学習データ収集だけを目的とするボットは拒否する。会員ページ等、非公開にすべきパスはない。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "Google-Extended", "CCBot", "ClaudeBot", "anthropic-ai", "Bytespider"],
        disallow: "/",
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Claude-SearchBot", "Claude-User"],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
