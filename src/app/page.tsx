import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Content from "@/components/Content/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open, Decentralized Technologies for Public Good",
  description:
    "Verinosc develops open and decentralized technologies for public benefit, oversight, autonomy, and long-term access to essential digital infrastructure.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Verinosc - Open, Decentralized Technologies for Public Good",
    description:
      "An independent nonprofit advancing open, decentralized technologies for public benefit.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Content/>
    </>
  );
}
