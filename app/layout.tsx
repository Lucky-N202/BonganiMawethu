import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Nunito({weight: '400', subsets: ['latin']});

export const metadata: Metadata = {
  title: "BonganiMawethu Pty",
  description: "BonganiMawethu Pty is your premier partner in delivering comprehensive solutions across logistics, construction, properties, mining, security, and cleaning.",
  keywords: "BonganiMawethu Pty, logistics, construction, properties, mining, security, cleaning"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <body className={fredoka.className} >{children}</body>
    </html>
  );
}
