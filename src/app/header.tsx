// app/head.tsx
import { Metadata } from "next";

// This file is implicitly a Server Component (no "use client" at the top).
// Next.js will merge these tags into the <head> of every page.

export const metadata: Metadata = {
  metadataBase: new URL("https://verinosc.org"),
  title: "Verinosc – Open, Decentralized Technologies for Public Good",
  description:
    "Verinosc is a nonprofit Company Limited by Guarantee (CLG) in Cyprus. We build open-source, decentralized technologies that promote public oversight, digital autonomy, and long-term access to essential digital infrastructure.",
  keywords: [
    "Verinosc",
    "nonprofit",
    "decentralized technologies",
    "open-source",
    "digital autonomy",
    "public oversight",
  ],
  authors: [{ name: "Verinosc Ltd", url: "https://verinosc.org" }],
  openGraph: {
    title: "Verinosc – Nonprofit for Open & Decentralized Digital Infrastructure",
    description:
      "Discover how Verinosc builds transparent, public-purpose digital systems—starting with Ledg.it, our AI-resistant watermarking initiative.",
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
  robots: "index, follow",
};

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <link rel="canonical" href="https://verinosc.org" />
      <meta name="robots" content="index, follow" />

      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Verinosc Ltd",
            url: "https://verinosc.org",
            logo: "https://verinosc.org/logo.png",
          }),
        }}
      />

      {/* JSON-LD: WebSite with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Verinosc",
            url: "https://verinosc.org",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://verinosc.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
