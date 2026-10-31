import type { Metadata } from "next";

export const SITE_URL = "https://guide.finance-tower.com";
export const SITE_NAME = "大手町調査室九課";
export const SITE_TAGLINE = "IPO銘柄徹底分析の専門調査室";
// このSEO一式を整備した日。各ページのJSON-LD dateModifiedの既定値に使う。
// 以後、記事の内容を実質的に書き換えた際は、そのページ呼び出し側で上書きすること。
export const SEO_ROLLOUT_DATE = "2026-10-27";

/**
 * 各ページで共通して必要なmetadata(title・description・canonical・OGP・Twitter Card)を
 * まとめて組み立てるヘルパー。pathはドメインより後ろの部分("/"始まり、トップは"/")。
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title}|${SITE_NAME}`;
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME}|${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}
