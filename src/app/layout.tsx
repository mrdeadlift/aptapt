import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APTゲーム - 韓国の大人気飲みゲーム",
  description: "韓国で大人気の飲みゲーム「APT（アパート）」の補助役Webアプリ。あぱつゲームとも呼ばれる新感覚の飲みゲームです。",
  keywords: ["APTゲーム", "あぱつゲーム", "韓国の飲みゲーム", "韓国飲みゲーム","アパートゲーム"],
  metadataBase: new URL('https://aptapt.vercel.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "APTゲーム - 韓国の大人気飲みゲーム",
    description: "韓国で大人気の飲みゲーム「APT（アパート）」の補助役Webアプリ。",
    type: "website",
    locale: "ja_JP",
    url: 'https://aptapt.vercel.app',
    siteName: 'APTゲーム',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APTゲーム - 韓国の大人気飲みゲーム',
    description: '韓国で大人気の飲みゲーム「APT（アパート）」の補助役Webアプリ',
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
