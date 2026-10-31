import { SITE_NAME, SITE_TAGLINE, SITE_URL, SEO_ROLLOUT_DATE } from "@/lib/seo";

// JSON-LDの<script>タグを安全に埋め込むための小さなヘルパー。
function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringifyした構造化データを埋め込むだけで、ユーザー入力は含まない
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// サイト全体で1回だけ出す、組織・サイトの基本情報(layout.tsxで使用)
export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "IPO銘柄をAIが目論見書から多角的に分析するWebサービス「IPO企業情報AI分析レポート」を運営。",
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: SITE_TAGLINE,
    url: SITE_URL,
    inLanguage: "ja",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={website} />
    </>
  );
}

// 記事ページ1本につき1回出す、Article + パンくず(BreadcrumbList)
export function ArticleJsonLd({
  title,
  description,
  path,
  dateModified = SEO_ROLLOUT_DATE,
}: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    inLanguage: "ja",
    dateModified,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: title, item: url },
    ],
  };
  return (
    <>
      <JsonLdScript data={article} />
      <JsonLdScript data={breadcrumb} />
    </>
  );
}

// パンくずのみ(about・privacyなど、記事扱いしないページ用)
export function BreadcrumbJsonLd({ title, path }: { title: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: title, item: url },
    ],
  };
  return <JsonLdScript data={breadcrumb} />;
}

// 任意ページに差し込むFAQPage(トップページで使用)
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <JsonLdScript data={faq} />;
}

// 記事一覧(ItemList)。トップページの「記事一覧」で使用
export function ItemListJsonLd({ items }: { items: { href: string; label: string }[] }) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      url: `${SITE_URL}${item.href}`,
    })),
  };
  return <JsonLdScript data={itemList} />;
}
