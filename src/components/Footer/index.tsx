"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-10 lg:pt-15">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Name & Kurzbeschreibung */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-12">
              <span className="mb-8 block text-3xl font-extrabold text-black dark:text-white">
                Verinosc
              </span>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Verinosc ist eine gemeinnützige Organisation, die Open-Source- und
                dezentrale Technologien für öffentliche Zwecke entwickelt.
              </p>
            </div>
          </div>

          {/* Rechtliche Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Rechtliches
              </h2>
              <ul>
                <li>
                  <Link
                    href="/datenschutz"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Kontakt-Informationen */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Kontakt
              </h2>
              <ul>
                <li>
                  <a
                    href="mailto:info@verinosc.org"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    info@verinosc.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://verinosc.org"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.verinosc.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        {/* Footer Bottom */}
        <div className="mt-8 mb-8 text-center">
          <p className="text-sm text-body-color dark:text-body-color-dark">
            &copy; {new Date().getFullYear()} Verinosc Ltd. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
