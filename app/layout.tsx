import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteJsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const corporateLogo = localFont({
  src: "../public/fonts/Corporate-Logo-Medium-ver3/Corporate-Logo-Medium-ver3.otf",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IPOをAIが徹底分析|デイトレ~長期投資家別|大手町調査室九課",
  description:
    "IPO銘柄をAIが目論見書から詳細に分析。デイトレ・短期・長期の投資スタイル別に、9つの軸で多角的に解説します。無料会員は毎月2銘柄を無料でご覧いただけます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${corporateLogo.variable}`}>
      <body className="bg-brand-cream font-sans text-brand-ink antialiased">
        <SiteJsonLd />
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
