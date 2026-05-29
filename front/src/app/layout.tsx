import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.scss";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Sanity Blog",
  description: "Sanityを使った簡単なブログサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
