"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
// import ThemeToggler from "./ThemeToggler";

const Header = () => {
  // Navbar toggle (Mobil)
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const pathname = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Logo */}
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                <h1 className="text-2xl">Verinosc</h1>
              </Link>
            </div>

            {/* Rechtsseitige Navigation bzw. Home-Link auf /transparency */}
            <div className="flex w-full items-center justify-end px-4">
              <div className="relative">
                {/* Mobile-Button */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : ""
                    }`}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  {/* Wenn wir auf /transparency sind, zeige nur "Home" */}
                  {pathname === "/transparency" ? (
                    <ul className="block lg:flex lg:space-x-12">
                      <li>
                        <Link
                          href="/"
                          className="flex py-2 text-base text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:py-6"
                        >
                          Home
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    /* Standard-Fall: Alle menuData-Einträge ohne Submenu (keine Dropdowns) */
                    <ul className="block lg:flex lg:space-x-12">
                      {menuData
                        .filter((item) => !item.submenu) // nur Einträge ohne submenu
                        .map((menuItem, index) => (
                          <li key={index}>
                            <Link
                              href={menuItem.path!}
                              className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                pathname === menuItem.path
                                  ? "text-primary dark:text-white"
                                  : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </nav>
              </div>

              {/* Theme Toggler (auskommentiert) */}
              {/*
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <div>
                  <ThemeToggler />
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
