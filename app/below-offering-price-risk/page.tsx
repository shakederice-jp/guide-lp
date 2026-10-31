import type { Metadata } from "next";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { PrevNextNav } from "@/components/PrevNextNav";
import { pageMetadata } from "@/lib/seo";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "IPOの公募割れリスクとは?兆候と向き合い方を隠さず解説",
  description:
    "IPOの公募割れとは何が起きている状態か。兆候とリスクへの向き合い方を、煽らず断定せずに解説します。",
  path: "/below-offering-price-risk",
});

export default function BelowOfferingPriceRiskPage() {
  return (
    <article>
      <ArticleJsonLd
        title="IPOの公募割れリスクとは?兆候と向き合い方を隠さず解説"
        description="IPOの公募割れとは何が起きている状態か。兆候とリスクへの向き合い方を、煽らず断定せずに解説します。"
        path="/below-offering-price-risk"
      />
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        IPOの公募割れリスクとは?兆候と向き合い方を隠さず解説
      </h1>

      <P>
        IPOには「当選すれば儲かる」というイメージがあります。ただ、実際には公募価格を下回ってしまう銘柄もあります。
      </P>
      <P>
        「IPO企業情報AI分析レポート」では、こうした公募割れのリスクも隠さずお伝えする方針で分析しています。この記事では、その考え方をご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <H2>公募割れとは</H2>
      <P>
        公募割れとは、上場後の株価が公募価格を下回ることです。初値の時点で下回ることもあれば、しばらくしてから下回ることもあります。
      </P>

      <H2>兆候になりやすい要素</H2>
      <P>
        公募割れの兆候は、9軸の中でもいくつかの軸に表れやすいと考えています。
      </P>
      <UL>
        <li>需給の軽さ:流通する株数に対して、買いたい人がどれだけいるか</li>
        <li>ロックアップ:解除時期に、売却制限のある株がどれだけ出回るか</li>
        <li>VCや大株主の売り圧力:上場前からの株主が、売却に動きやすいか</li>
      </UL>
      <P>
        これらは、<InlineLink href="/9axis-method">IPOの9軸分析メソッド</InlineLink>の中でも読み解いている内容です。
      </P>

      <H2>リスクも隠さず伝える方針</H2>
      <P>
        良い面だけを強調すると、読み物としては魅力的に見えます。ただ、それでは判断材料として役に立ちません。
      </P>
      <P>
        当調査室九課は、懸念点が見つかった場合もそのまま掲載する方針で分析しています。「買うべき」といった断定的な表現も使いません。
      </P>

      <H2>答え合わせでも検証しています</H2>
      <P>
        事前の分析と実際の値動きを比べる「答え合わせ」企画は、公募割れした銘柄の結果も含めて公開しています。詳しくは<InlineLink href="/ai-accuracy-check">AIのIPO事前分析は当たった?</InlineLink>でご紹介しています。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>公募割れとは、上場後の株価が公募価格を下回ることです。</li>
        <li>需給の軽さやロックアップなど、9軸の分析の中で兆候を読み解いています。</li>
        <li>懸念点があれば隠さず掲載し、断定的な表現は使わない方針です。</li>
      </UL>

      <H2>リスクも含めた分析を見てみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <RelatedLinks
        links={[
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/lockup-countdown", label: "IPOのロックアップ解除とは?" },
          { href: "/ai-accuracy-check", label: "AIのIPO事前分析は当たった?" },
        ]}
      />

      <PrevNextNav current="/below-offering-price-risk" />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
