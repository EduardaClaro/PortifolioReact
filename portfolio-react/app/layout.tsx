import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Home/Footer/Footer";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Maria Eduarda Claro",
  description: "Bem vindo ao meu portfólio!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#140020]`}>
        <ResponsiveNav />
          {children}
          <Footer />
      </body>
    </html>
  );
}
