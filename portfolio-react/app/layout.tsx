import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font= Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Sajal Portifolio | Next.js 15",
  description: "Portifolio built with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
