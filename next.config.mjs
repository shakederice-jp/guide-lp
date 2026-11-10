/** @type {import('next').NextConfig} */
// 2026/11/10 サブディレクトリ化: このサイトは finance-tower.com/guide 配下で公開する。
// 実体は従来どおりこのプロジェクトのVercelデプロイで、finance-tower.com 側(finance-tower-corp)の
// rewrites から /guide/* として転送される(Next.js multi-zones構成)。
const nextConfig = {
  basePath: "/guide",
  async redirects() {
    return [
      // 旧サブドメイン guide.finance-tower.com へのアクセスを、新URLへ恒久転送(301)する。
      // 親サイト経由の転送ではHostが異なるため、この条件には一致せずループしない。
      {
        source: "/:path*",
        has: [{ type: "host", value: "guide.finance-tower.com" }],
        destination: "https://finance-tower.com/guide/:path*",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
