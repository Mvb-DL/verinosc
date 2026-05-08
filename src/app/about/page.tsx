import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Verinosc's nonprofit mission, governance model, and work on open, decentralized technologies for public benefit.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Verinosc",
    description:
      "Verinosc is a Cyprus nonprofit developing open, decentralized technologies for public oversight, autonomy, and durable digital access.",
    url: "/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Verinosc"
        description="Verinosc is an independent nonprofit organization building open, decentralized technologies for public benefit."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
