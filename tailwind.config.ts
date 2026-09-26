import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          header: "#66c3c6", // ヘッダー背景(水色)
          teal: "#257a7d", // リンク・本文アクセント
          tealDark: "#082b2e", // 見出し・濃い文字
          orange: "#f59e0b", // 登録ボタン(オレンジ)
          cream: "#eef9f9", // ページ背景
          ink: "#113e42", // 本文の文字
          mid: "#2c6769",
          subtle: "#4f7a7c",
          pale: "#b3e8ea",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
