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
  title: "Haohanyh/EUICC: a fully LPA implementation for Android by Haohanyh",
  description: "浩瀚银河EUICC网站——芯网互联，全球互通",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
