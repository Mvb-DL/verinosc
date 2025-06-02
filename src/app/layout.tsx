// app/layout.tsx
"use client";

import React, { ReactNode } from "react";
import Header from "@/components/Header";          // Assume these use useEffect or other client hooks
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-[#FFFFFF] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
