import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "既存のIPO情報サイトとどう違う?AI分析レポートの16の特徴|大手町調査室九課",
};

function Item({
  href,
  label,
  tag,
  desc,
}: {
  href: string;
  label: string;
  tag: string;
  desc: string;
}) {
  return (
    <li>
      <InlineLink href={href}>{label}</InlineLink>{" "}
      <span className="text-sm text-brand-subtle">【{tag}】</span>
      <br />
      {desc}
    </li>
  );
}

export default function FeaturesPage() {
  return (
    <article>
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        既存のIPO情報サイトとどう違う?AI分析レポートの16の特徴
      </h1>

      <P>
        IPO情報は、いまや探せばいくらでも見つかります。それでも「結局、どの情報をどう読めばいいのか」と迷う方は多いはずです。
      </P>
      <P>
        「IPO企業情報AI分析レポート」には、そうした迷いに向き合うための16の特徴があります。この記事では、その全体像を一覧でご紹介します。気になる項目は、リンク先のページで詳しく説明しています。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/comparison-table.png"
          alt="他のIPOサイトとの違いを示す比較表。上場日・公募価格・主幹事はどちらも対応している一方、AIスコア・A〜E評価、9軸詳細分析レポート、株価シナリオ(3パターン)、目論見書データ自動抽出、競合他社との財務比較、週次イベント通知メールは本サービスのみ対応と示されている"
          width={755}
          height={546}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/site-feature-cards.png"
          alt="このサイトでできることを示す3つのカード。AIスコアリング(A〜E評価)・株価シナリオ(3パターン)・目論見書の要点を自動抽出、の3つが並んでいる"
          width={743}
          height={344}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>

      <H2>特徴の見方</H2>
      <P>16の特徴には、大手町調査室九課の4つの想いのどれに近いかを【 】で示しました。</P>
      <UL>
        <li><strong>多角的な深掘り</strong> ― プロが見ているような視点で、多角的に分析する</li>
        <li><strong>わかりやすさ</strong> ― 専門知識がないと読みにくい情報を、わかりやすく届ける</li>
        <li><strong>目論見書の要点</strong> ― 100ページ超の目論見書を、要点だけに整理する</li>
        <li><strong>長い目で応援</strong> ― 短期売買だけでなく、会社の将来性を長い目で見る</li>
      </UL>

      <H2>分析の仕組みと信頼性</H2>
      <P>
        まず、分析そのものの土台となる4つの特徴です。たとえば超短期の軸には、株の出回りやすさを見る「需給の軽さ(Float)」があります。売却制限を見る「ロックアップ」なども、銘柄ごとの具体的な項目です。
      </P>
      <UL>
        <Item href="/9axis-method" label="IPOの9軸分析メソッド" tag="多角的な深掘り" desc="9つの視点から、1つの銘柄を立体的に評価します。" />
        <Item href="/edinet-ai-analysis" label="目論見書(EDINET)のAI自動解析" tag="目論見書の要点・わかりやすさ" desc="100ページを超える目論見書から、重要な箇所を整理します。" />
        <Item href="/ai-reliability" label="間違いを減らすための設計思想" tag="目論見書の要点・多角的な深掘り" desc="一次情報(EDINET)のみに基づき、9軸という型で出力を整える設計です。" />
        <Item href="/ai-accuracy-check" label="AI事前分析の「答え合わせ」" tag="多角的な深掘り" desc="事前の分析と実際の値動きを突き合わせ、結果を継続して公開する取り組みです。" />
      </UL>

      <H2>読み方を選べる設計</H2>
      <P>次に、読む人の目的や経験に合わせて選べる4つの特徴です。</P>
      <UL>
        <Item href="/investment-styles" label="デイトレ・短期・長期の投資スタイル別の見方" tag="長い目で応援" desc="超短期・短期・長期という3つの時間軸で、同じ銘柄を整理します。" />
        <Item href="/for-beginners-and-advanced" label="初心者から中・上級者までのレベル別の読み方" tag="わかりやすさ" desc="同じ銘柄のページの中で、2つの読み方を選べます。" />
        <Item href="/deep-dive-3-points" label="儲けの仕組み・上場ストーリー・競合との違い" tag="長い目で応援・わかりやすさ" desc="「深掘り3要素」として、会社の中身を読み解きます。" />
        <Item href="/9axis-free-guide" label="9軸の参考資料の無料全公開" tag="多角的な深掘り" desc="折りたたみなしで、全文をお読みいただけます。" />
      </UL>

      <H2>リスクと時間に向き合う機能</H2>
      <P>最後に、リスクを隠さず時間を味方にした見方を支える3つの特徴です。</P>
      <UL>
        <Item href="/1million-simulation" label="公募価格で100万円買っていたら今いくら?" tag="長い目で応援" desc="上場済みの銘柄について、公募価格で買った場合の現在の金額を確認できます。" />
        <Item href="/lockup-countdown" label="ロックアップ解除のカウントダウン" tag="多角的な深掘り" desc="解除日までの日数を表示し、需給の変化に備える手がかりにします。" />
        <Item href="/below-offering-price-risk" label="公募割れリスクの解説" tag="多角的な深掘り・長い目で応援" desc="リスクの兆候と向き合い方を、煽らず断定せずにお伝えします。" />
      </UL>

      <H2>忙しい方の時間を節約する新機能</H2>
      <P>
        ここからは、忙しい方の時間を味方にする4つの新機能です。週末にまとめて、深く知りたい方に向けて追加しました。
      </P>
      <UL>
        <Item href={APP_URL} label="3分で分かる結論カード" tag="わかりやすさ" desc="分析ページの冒頭に、注目点と注意点とAIの見立てを1つのカードにまとめています。" />
      </UL>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/three-minute-card.png"
          alt="分析ページ冒頭の3分で分かる結論カード。銘柄名・AI総合評価(Cランクなど)に続き、注目点1・注目点2・AIの見立てが1つのカードにまとめて表示されている"
          width={763}
          height={502}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          2026年10月時点の表示(画面は一例です)
        </p>
      </div>
      <UL>
        <Item href={`${APP_URL}/schedule`} label="IPO週報(週刊ブリーフ)" tag="わかりやすさ・長い目で応援" desc="毎週金曜日に、その週のIPO情報をメールでまとめてお届けします。" />
        <Item href={`${APP_URL}/tax-nisa`} label="税金・NISAガイド" tag="わかりやすさ" desc="IPO株の利益にかかる税金と、NISA枠の使い方を無料で解説しています。" />
        <Item href={`${APP_URL}/schedule`} label="予定のカレンダー自動登録" tag="長い目で応援" desc="申込み期限や上場日などの予定を、スマホのカレンダーに自動で取り込めます。" />
      </UL>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/weekly-calendar-view.png"
          alt="IPO企業情報AI分析レポートのスケジュール画面。月間・週間を切り替えて見られるカレンダーに、経済指標や日銀の予定、IPO銘柄の番号が表示されている"
          width={785}
          height={520}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>

      <H2>はじめやすさ</H2>
      <UL>
        <Item href="/referral-program" label="友達紹介プログラム" tag="長い目で応援" desc="紹介した方・紹介された方の両方が、2か月間どの銘柄も無料でご覧いただけます(先着100名限定)。" />
      </UL>
      <P>効果的な使い方は、次の4ステップです。</P>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/how-to-use-steps.png"
          alt="効果的な使い方を示す4つのステップ。STEP1カレンダーで上場スケジュールを確認、STEP2 AI要約で気になる銘柄をスクリーニング、STEP3 9軸レポートで投資判断を深める、STEP4通知設定でBB開始を見逃さない"
          width={751}
          height={647}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>

      <H2>16の特徴に込めた想い</H2>
      <P>16の特徴はどれも、大手町調査室九課の次の想いから生まれています。</P>
      <UL>
        <li>プロが見ているような視点を、個人投資家にも届けたい</li>
        <li>専門知識がないと読み解きにくい情報を、わかりやすく届けたい</li>
        <li>100ページ超の目論見書を、要点だけにして届けたい</li>
        <li>上場直後の短期売買だけでなく、会社を長い目で応援する投資家の判断を手助けしたい</li>
      </UL>
      <P>
        想いのもとになった経験は、<InlineLink href="/our-story">時代の変化を、チャンスに変える会社を応援したい</InlineLink>でお伝えしています。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>16の特徴は、「分析の仕組みと信頼性」「読み方を選べる設計」「リスクと時間に向き合う機能」「忙しい方の時間を節約する新機能」「はじめやすさ」に分けられます。</li>
        <li>超短期・短期・長期の3つの時間軸と、初心者向け・中・上級者向けの2つの読み方があります。目的に合わせて、使えます。</li>
        <li>無料会員は毎月2銘柄を無料でご覧いただけます。</li>
      </UL>

      <H2>気になる特徴から試してみてください</H2>
      <P>
        無料会員登録は課金不要です。友達紹介では紹介した方・紹介された方の両方が、2か月間どの銘柄も無料でご覧いただけます(先着100名限定)。
      </P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <RelatedLinks
        links={[
          { href: "/launch", label: "「IPO企業情報AI分析レポート」が本日ローンチ" },
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/investment-styles", label: "IPO投資はデイトレ・短期・長期でどう違う?" },
        ]}
      />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
