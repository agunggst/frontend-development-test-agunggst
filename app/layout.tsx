import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapScript from './components/BootstrapScript'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "WiiComm",
  description: "Moderasi komentar Anda dengan mudah, efisien, dan efektif. WiiComm membantu Anda mengelola setiap interaksi, menyaring kebisingan, dan menumbuhkan komunitas yang sehat di platform digital Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <BootstrapScript />
        {children}
      </body>
    </html>
  );
}
