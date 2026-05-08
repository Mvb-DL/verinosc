import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://verinosc.org";
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": `${siteUrl}/#organization`,
      name: "Verinosc Ltd",
      legalName: "Verinosc Ltd",
      url: siteUrl,
      logo: `${siteUrl}/images/favicon.png`,
      email: "info@verinosc.org",
      telephone: "+357 9919 0997",
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kennedy Avenue 70, 2nd Floor, Office 201-202",
          addressLocality: "Nicosia",
          postalCode: "1076",
          addressCountry: "CY",
        },
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kennedy Avenue 70, 2nd Floor, Office 201-202",
        addressLocality: "Nicosia",
        postalCode: "1076",
        addressCountry: "CY",
      },
      description:
        "Verinosc is a nonprofit Company Limited by Guarantee in Cyprus developing open-source and decentralized technologies for public oversight, digital autonomy, and long-term access to essential digital infrastructure.",
      knowsAbout: [
        "open-source technology",
        "decentralized infrastructure",
        "public oversight",
        "digital autonomy",
        "nonprofit governance",
        "digital public infrastructure",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "general inquiries",
          email: "info@verinosc.org",
          availableLanguage: ["en"],
        },
        {
          "@type": "ContactPoint",
          contactType: "privacy inquiries",
          email: "privacy@verinosc.org",
          availableLanguage: ["en"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Verinosc",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en",
      description:
        "Official website of Verinosc, a Cyprus nonprofit developing open and decentralized technologies for public benefit.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  creator: "Verinosc Ltd",
  publisher: "Verinosc Ltd",
  applicationName: "Verinosc",
  category: "Nonprofit technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Verinosc - Nonprofit for Open and Decentralized Digital Infrastructure",
    description:
      "Verinosc builds transparent, public-purpose digital systems for resilient access, oversight, and autonomy.",
    url: "https://verinosc.org",
    siteName: "Verinosc",
    images: [
      {
        url: "/images/hero/hero_image.jpg",
        width: 1024,
        height: 1024,
        alt: "Verinosc digital infrastructure visual",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verinosc - Open, Decentralized Technologies for Public Good",
    description:
      "Verinosc develops open-source and decentralized technologies for public oversight, digital autonomy, and long-term access.",
    images: ["/images/hero/hero_image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
