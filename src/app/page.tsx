import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Content from "@/components/Content/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verinosc",
  description:
    "Verinosc develops open and decentralized technologies for public benefit, oversight, autonomy, and long-term access to essential digital infrastructure.",
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
