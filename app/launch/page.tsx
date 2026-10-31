import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { PrevNextNav } from "@/components/PrevNextNav";
import { pageMetadata } from "@/lib/seo";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "「IPO企業情報AI分析レポート」が本日ローンチ ― 大手町調査室九課が運営",
  description:
    "「IPO企業情報AI分析レポート」がローンチ。目論見書をAIが9つの軸で分析し、投資判断に役立つ情報を届けるサービスの全体像をご紹介します。",
  path: "/launch",
});

export default function LaunchPage() {
  return (
    <article>
      <ArticleJsonLd
        title="「IPO企業情報AI分析レポート」が本日ローンチ ― 大手町調査室九課が運営"
        description="「IPO企業情報AI分析レポート」がローンチ。目論見書をAIが9つの軸で分析し、投資判断に役立つ情報を届けるサービスの全体像をご紹介します。"
        path="/launch"
      />
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        「IPO企業情報AI分析レポート」が本日ローンチ ― 大手町調査室九課が運営
      </h1>

      <P>
        IPOの情報は、探せば見つかります。けれど、目論見書は100ページを超えることも珍しくありません。財務諸表や経営データは、専門知識がないと読み解きにくいものです。「気になる銘柄はあるけれど、判断の材料をそろえる時間がない」という個人投資家の方も多いのではないでしょうか。
      </P>
      <P>
        大手町調査室九課は本日、IPO(新規上場)銘柄をAIが分析するWebサービス「IPO企業情報AI分析レポート」をローンチしました。この記事では、サービスの全体像をご紹介します。あわせて、当調査室九課がこのサービスに込めた4つの想いもご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/top-page-calendar.png"
          alt="IPO企業情報AI分析レポートのトップページ。IPOスケジュールのカレンダーと、上場スケジュール一覧表・初値の結果一覧・ロックアップ解除予定などのメニュー、料金プランの案内が表示されている"
          width={1077}
          height={605}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          2026年10月時点の表示(画面は一例です)
        </p>
      </div>

      <H2>IPO企業情報AI分析レポートとは</H2>
      <P>
        目論見書(EDINET)などの一次情報をもとに、AIがIPO銘柄を9つの軸で分析します。その結果を、レポートとしてまとめるサービスです。分析結果は、投資の勧誘や助言ではありません。ご自身で判断するための材料として、お届けしています。
      </P>
      <P>主な特徴は次のとおりです。詳しくは、それぞれのページでご紹介しています。</P>
      <UL>
        <li><InlineLink href="/9axis-method">9つの軸で、IPO銘柄を多角的に分析する</InlineLink></li>
        <li><InlineLink href="/edinet-ai-analysis">100ページを超える目論見書の要点を、AIが整理する</InlineLink></li>
        <li><InlineLink href="/investment-styles">超短期・短期・長期の3つの時間軸で見る</InlineLink></li>
        <li><InlineLink href="/for-beginners-and-advanced">初心者向け・中・上級者向けの2つの読み方を用意する</InlineLink></li>
        <li><InlineLink href="/1million-simulation">公募価格で100万円買っていたら、現在いくらかを確認できる</InlineLink></li>
        <li><InlineLink href="/lockup-countdown">ロックアップ解除日までのカウントダウンを表示する</InlineLink></li>
        <li><InlineLink href="/9axis-free-guide">9軸の参考資料を、折りたたみなしで無料公開する</InlineLink></li>
      </UL>
      <P>
        公募価格で100万円買っていたら、現在いくらかを確認できます。銘柄ごとに、次のように表示されます。
      </P>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/ipo-simulation-list.png"
          alt="IPO企業情報AI分析レポートの銘柄一覧。上場済みの銘柄ごとに、公募価格で100万円買っていたら現在いくらかが表示されている画面"
          width={905}
          height={612}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          2026年9月20日時点の表示(画面は一例です)
        </p>
      </div>
      <P>
        特徴の全体像は、<InlineLink href="/features">16の特徴のまとめ</InlineLink>でご覧いただけます。
      </P>

      <H2>上場直後の短期売買だけではないIPOの見方</H2>
      <P>
        IPO投資には、いろいろな時間軸があります。初値で売り抜けたい方・数週間〜数か月で利益を取りたい方・数年単位でじっくり育てたい方が、それぞれいらっしゃいます。このサービスでは、1つの銘柄を超短期・短期・長期という3つの時間軸で整理しています。
      </P>
      <P>
        短期売買を否定するつもりはありません。そのうえで、会社の中身を知り長い目で応援するという選択肢も持てるようにしています。それぞれの見方の材料を、並べています。
      </P>
      <P>
        詳しくは、<InlineLink href="/investment-styles">IPO投資はデイトレ・短期・長期でどう違う?</InlineLink>をご覧ください。
      </P>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/ipo-guide-hero.png"
          alt="大手町調査室九課特別レポート「お宝銘柄を探せ。IPO投資で資産を増やす実践的法則」のバナー。超短期(初値狙い)・短期(1〜3ヶ月)・長期(数年〜)の3つのボタンが並んでいる"
          width={777}
          height={345}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>

      <H2>無料会員でできること</H2>
      <UL>
        <li>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</li>
        <li>
          友達紹介では紹介した方・紹介された方の両方が、2か月間どの銘柄も無料でご覧いただけます(先着100名限定のキャンペーンです)。
        </li>
      </UL>
      <P>
        紹介制度の詳細は、<InlineLink href="/referral-program">友達紹介のご案内</InlineLink>をご覧ください。
      </P>

      <H2>大手町調査室九課の4つの想い</H2>
      <P>このサービスは、次の4つの想いから生まれました。</P>
      <UL>
        <li><strong>多角的に深掘りする</strong> ― プロが見ているような視点で、IPO情報をAIが多角的に深掘りして個人投資家に届けたい</li>
        <li><strong>難しい情報をわかりやすく</strong> ― 専門知識がないと読み解きにくい財務諸表や経営データを、わかりやすく届けたい</li>
        <li><strong>目論見書を要点だけに</strong> ― 100ページ以上ある目論見書の要点だけを、時間がない個人投資家に届けたい</li>
        <li><strong>長い目で応援する投資家を増やしたい</strong> ― 上場直後の短期売買だけでなく、上場後も長く追い続けて会社の将来性を応援する投資家の判断を手助けしたい</li>
      </UL>
      <P>
        この想いの背景は、<InlineLink href="/our-story">時代の変化を、チャンスに変える会社を応援したい</InlineLink>でお伝えしています。
      </P>
      <P>他のIPO情報サイトではあまり見られない形のサイトが、できあがりました。ぜひ一度、ご覧ください。</P>

      <H2>まとめ</H2>
      <UL>
        <li>「IPO企業情報AI分析レポート」は、目論見書などの一次情報をもとにAIがIPO銘柄を9つの軸で分析するサービスです。</li>
        <li>超短期・短期・長期の3つの時間軸で整理し、初心者向けと中・上級者向けの2つの読み方を用意しています。</li>
        <li>無料会員は毎月2銘柄を無料で閲覧できます。友達紹介では2か月間、どの銘柄も無料でご覧いただけます。</li>
      </UL>

      <H2>まずは1銘柄の分析を見てみてください</H2>
      <P>
        無料会員でも、毎月2銘柄は無料でご覧いただけます。友達紹介では紹介した方・紹介された方の両方が、2か月間どの銘柄も無料でご覧いただけます(先着100名限定)。
      </P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <RelatedLinks
        links={[
          { href: "/features", label: "IPOの16の特徴まとめ" },
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/our-story", label: "時代の変化を、チャンスに変える会社を応援したい" },
        ]}
      />

      <PrevNextNav current="/launch" />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
