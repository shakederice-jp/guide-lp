import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "IPOのロックアップ解除とは?日程と株価への影響、カウントダウン機能|大手町調査室九課",
};

export default function LockupCountdownPage() {
  return (
    <article>
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        IPOのロックアップ解除とは?日程と株価への影響、カウントダウン機能
      </h1>

      <P>
        上場して間もない銘柄は、大株主やVCの保有株に一定期間の売却制限がかかっています。これを「ロックアップ」と呼びます。
      </P>
      <P>
        ロックアップが解除されると、市場に出回る株数が急に増えることがあります。「IPO企業情報AI分析レポート」では、解除日までの日数をカウントダウン表示しています。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <H2>ロックアップ解除で何が起きるか</H2>
      <P>
        売却制限が外れた株主が売却に動くと、株の供給が増えます。需要が変わらなければ、株価が下がりやすくなります。
      </P>
      <P>これは、IPO銘柄に特有の需給面のリスクです。</P>
      <div className="my-6 mx-auto overflow-hidden rounded-2xl border border-brand-pale" style={{ maxWidth: 714 }}>
        <Image
          src="/chapter2-lockup.png"
          alt="ロックアップ解除前後の典型的な株価推移を示すグラフ。公募価格を100として指数化し、解除時期にかけて株価が下がる傾向をサンプルデータで例示している"
          width={714}
          height={481}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

      <H2>解除日までの日数をカウントダウン表示</H2>
      <P>
        各銘柄の分析ページには、ロックアップ解除日までの残り日数を表示しています。解除が近づく銘柄ほど、需給の変化に備えやすくなります。
      </P>
      <P>解除の対象になる株主や発行済株式数に対する比率も、あわせて確認できます。</P>

      <H2>90日・180日という2つの節目</H2>
      <P>
        一般的な節目は、上場から90日後と180日後です。複数回に分けて解除されることが多くあります。
      </P>
      <P>条件の倍率(公募価格の何倍で解除が早まるか等)も、銘柄によって異なります。</P>

      <H2>答え合わせにも活用しています</H2>
      <P>
        ロックアップ解除の前後は、事前の分析と実際の値動きを比べる「答え合わせ」のタイミングのひとつにしています。詳しくは<InlineLink href="/ai-accuracy-check">AIのIPO事前分析は当たった?</InlineLink>でご紹介しています。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>ロックアップとは、大株主やVCの保有株にかかる一定期間の売却制限です。</li>
        <li>解除されると株の供給が増え、株価が下がりやすくなる場合があります。</li>
        <li>各銘柄の分析ページで、解除日までの残り日数を確認できます。</li>
        <li>解除の前後は、答え合わせのタイミングのひとつにしています。</li>
      </UL>

      <H2>ロックアップ解除のカウントダウンを見てみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <RelatedLinks
        links={[
          { href: "/ai-accuracy-check", label: "AIのIPO事前分析は当たった?" },
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/below-offering-price-risk", label: "IPOの公募割れリスクとは?" },
        ]}
      />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
