import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@picocss/pico';
import "../styles/theme.sass";


const inter = Inter({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Premier Ministre Quand ?",
  description: "Parce qu'il fallait bien que je m'occupe en attendant qu'on ait un gouvernement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}><main>{children}</main></body>
    </html>
  );
}
