import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demura Yuto Portfolio",
  description: "Demura Yuto's Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="scroll-smooth bg-white text-gray-800">{children}</body>
    </html>
  );
}
