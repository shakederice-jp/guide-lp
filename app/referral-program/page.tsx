import type { Metadata } from "next";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { PrevNextNav } from "@/components/PrevNextNav";
import { pageMetadata } from "@/lib/seo";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "友達紹介で2か月無料|IPO分析アプリの紹介プログラム",
  description:
    "友達紹介では紹介した方・された方の両方が2か月間どの銘柄も無料。IPO分析アプリの紹介プログラムをご紹介します。",
  path: "/referral-program",
});

export default function ReferralProgramPage() {
  return (
    <article>
      <ArticleJsonLd
        title="友達紹介で2か月無料|IPO分析アプリの紹介プログラム"
        description="友達紹介では紹介した方・された方の両方が2か月間どの銘柄も無料。IPO分析アプリの紹介プログラムをご紹介します。"
        path="/referral-program"
      />
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        友達紹介で2か月無料|IPO分析アプリの紹介プログラム
      </h1>

      <P>
        「IPO企業情報AI分析レポート」には、友達紹介プログラムがあります。紹介した人と紹介された人の、両方が特典を受けられます。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <H2>特典の内容</H2>
      <P>
        紹介した人・された人の両方に、有料分析と週刊ブリーフのPDFスライドが2ヶ月間読み放題になる特典が付きます。
      </P>
      <P>
        週刊ブリーフについては<InlineLink href="/features">既存のIPO情報サイトとどう違う?</InlineLink>の記事でもご紹介しています。
      </P>

      <H2>参加方法</H2>
      <UL>
        <li>無料会員登録後、マイページで自分専用の招待リンクを発行できます。</li>
        <li>招待リンクを友達に共有します。</li>
        <li>友達がリンクから登録すると、双方に2ヶ月の特典が付与されます。</li>
      </UL>
      <P>
        キャンペーンの申込みページからも、同じ特典で登録いただけます。
      </P>

      <H2>先着300名限定キャンペーン実施中</H2>
      <P>
        現在、先着300名限定のキャンペーンとして実施しています。予告なく終了する場合がありますので、気になる方はお早めにご登録ください。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>友達紹介で、紹介した人・された人の両方に特典が付きます。</li>
        <li>特典は、有料分析と週刊ブリーフのPDFスライドが2ヶ月間読み放題です。</li>
        <li>マイページの招待リンク、または申込みページから参加できます。</li>
      </UL>

      <H2>無料会員登録からはじめてみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <RelatedLinks
        links={[
          { href: "/features", label: "既存のIPO情報サイトとどう違う?" },
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/for-beginners-and-advanced", label: "IPO分析は初心者から中上級者まで" },
        ]}
      />

      <PrevNextNav current="/referral-program" />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
