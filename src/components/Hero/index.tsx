"use client";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="border border-red-500 relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          {/* Zwei Boxen in einer Row: Default gestapelt, ab lg in einer Zeile */}
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Linke Box mit Inhalt */}
            <div className="w-full lg:w-1/2  lg:pr-8">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Verinosc – Technology <br /> for the Public Good
              </h1>
              <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                An independent nonprofit advancing open, decentralized technologies for public benefit.
              </p>
              <div className="flex flex-row items-start justify-start space-x-4">
                <Link
                  href="https://nextjstemplates.com/templates/saas-starter-startup"
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Our Transparency
                </Link>
              </div>
            </div>

            {/* Rechte Box mit Bild */}
            <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
              <div className="relative w-full md:h-96 lg:h-[400px]">
                <Image
                  src=""         // Pfad zu deinem Bild
                  alt="Illustration Verinosc"
                  fill                           // Bild dehnt sich in den Container
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 30vw, 30vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
