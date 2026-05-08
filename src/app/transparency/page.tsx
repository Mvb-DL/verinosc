import ScrollUp from "@/components/Common/ScrollUp";
import Content from "@/components/Content/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Read Verinosc's information policy, governance commitments, disclosure principles, feedback process, and public accountability approach.",
  alternates: {
    canonical: "/transparency",
  },
  openGraph: {
    title: "Transparency | Verinosc",
    description:
      "Verinosc publishes governance, transparency, data protection, and accountability information for stakeholders and the public.",
    url: "/transparency",
  },
};

export default function Transparency() {
  return (
    <>
      <ScrollUp />

      <div className="mt-20 pt-30 sm:pt-34 md:pt-22 lg:pt-20">
        <Content />
      </div>
    </>
  );
}
