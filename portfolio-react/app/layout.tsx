"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "@/components/Home/Footer/Footer";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname(); // pega a rota atual para AnimatePresence

  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#140020]`}>
        <ResponsiveNav/>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname} // importante para diferenciar páginas
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {children}
            <Footer/>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
