import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://verinosc.org"),
  title: {
    default: "Verinosc - Open, Decentralized Technologies for Public Good",
    template: "%s | Verinosc",
  },
  description:
    "Verinosc is a nonprofit Company Limited by Guarantee in Cyprus, developing open-source and decentralized technologies for public oversight, digital autonomy, and long-term access to essential digital infrastructure.",
  keywords: [
    "Verinosc",
    "nonprofit",
    "decentralized technologies",
    "open-source",
    "digital autonomy",
    "public oversight",
  ],
  authors: [{ name: "Verinosc Ltd", url: "https://verinosc.org" }],
  alternates: {
    canonical: "https://verinosc.org",
  },
  openGraph: {
    title: "Verinosc - Nonprofit for Open and Decentralized Digital Infrastructure",
    description:
      "Verinosc builds transparent, public-purpose digital systems for resilient access, oversight, and autonomy.",
    url: "https://verinosc.org",
    siteName: "Verinosc",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Verinosc OpenGraph Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-[#FFFFFF] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
