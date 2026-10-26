import type { Metadata } from "next";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "IPO分析の9軸参考資料を無料で全公開|折りたたみなしで読める|大手町調査室九課",
};

export default function NineAxisFreeGuidePage() {
  return (
    <article>
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        IPO分析の9軸参考資料を無料で全公開|折りたたみなしで読める
      </h1>

      <P>「続きは会員登録後に」という表示を見て、閲覧をあきらめた経験はありませんか。</P>
      <P>
        「IPO企業情報AI分析レポート」では、9軸それぞれの参考資料を折りたたまずに全文公開しています。登録前の方でも、無料会員の方と同じ内容をお読みいただけます。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <H2>折りたたまない理由</H2>
      <P>
        多くのサイトでは、詳しい情報ほど「続きは会員登録後」と隠されます。当調査室九課は、逆の考え方を選びました。
      </P>
      <P>
        無料でどこまで見せられるかを、隠さずお見せしています。それが、信頼につながると考えています。実際に中身を確かめてから、会員登録をご判断いただけます。
      </P>

      <H2>公開している参考資料の中身</H2>
      <P>
        各銘柄の分析ページには、9つの軸それぞれに参考資料を用意しています。表やグラフを使った詳しいデータも、省略せずに掲載しています。
      </P>
      <P>
        9つの軸の詳しい内容は、<InlineLink href="/9axis-method">IPOの9軸分析メソッドとは?</InlineLink>でご紹介しています。
      </P>

      <H2>有料会員との違い</H2>
      <P>
        無料会員が読めるのは、毎月2銘柄までです。ただし、読める銘柄であれば話は別です。9軸の参考資料は、すべて省略なしでご覧いただけます。
      </P>
      <P>
        3銘柄目以降や過去の銘柄まで読みたい場合は、有料会員への登録をご検討ください。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>9つの軸それぞれの参考資料を、折りたたみなしで全文公開しています。</li>
        <li>登録前の方でも、無料会員の方と同じ内容をお読みいただけます。</li>
        <li>無料で読めるのは毎月2銘柄までですが、その範囲内では参考資料は省略されません。</li>
      </UL>

      <H2>9軸の参考資料を実際にご覧ください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <RelatedLinks
        links={[
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/ai-reliability", label: "AIのIPO分析は信用できる?" },
          { href: "/for-beginners-and-advanced", label: "IPO分析は初心者から中上級者まで" },
        ]}
      />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
