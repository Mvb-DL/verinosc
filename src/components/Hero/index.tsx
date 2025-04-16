"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="border border-red-500 relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          {/* Zwei Boxen in einer Row: Default gestapelt, ab lg in einer Zeile */}
          <div className="flex flex-col lg:flex-row">
            {/* Linke Box mit Inhalt */}
            <div className="w-full lg:w-2/3 border border-green-500">
              
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Verinosc – <br></br>Technology for the Public Good V3
                </h1>
                <p className="mb-5 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                An independent nonprofit advancing open, decentralized technologies for public benefit.
                </p>

                {/*}
                <div className="flex flex-row items-start justify-start space-x-4">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                

              </div>

              */}
            </div>
            {/* Rechte Box – hier kann optional weiterer Inhalt (z. B. ein Bild) platziert werden */}
            <div className="w-full lg:w-1/3 px-4">
              {/* Zusätzlicher Inhalt oder Bild */}
            </div>
          </div>
        </div>
       
      
      </section>
    </>
  );
};

export default Hero;
