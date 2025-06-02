"use client";

import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton={false}
      onAccept={() => {}}
      cookieName="noCookiesHere"
      // Haupt-Container: weißer Hintergrund, leichter Schatten, verkürztes Padding auf mobile
      containerClasses="
        !bg-white !shadow-sm
        px-4 py-2           /* weniger vertikales Padding auf mobile */
        flex flex-col items-center justify-center
        md:flex-row md:justify-between md:py-3
      "
      // Inhalt-Wrapper: Text und Link in Spalte auf mobile, in Reihe ab md, Schriftfarbe rgb(149,156,177)
      contentClasses="
        flex flex-col items-center text-[#959CB1] text-sm font-sans
        md:flex-row md:items-center
      "
      // Button: Hintergrund #83AAFB, weißer Text, reduzierte Höhe, abgerundete Ecken
      buttonClasses="
        !bg-[#83AAFB] !text-white text-sm font-semibold
        px-4 py-2 rounded
        mt-2 md:mt-0
      "
      buttonText="Okay!"
      expires={150}
    >
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <span className="text-center md:text-left">
          <strong>We do not use cookies.</strong> We only collect technical
          server-log data (e.g. IP address) under our legitimate interests
          for security and performance.
        </span>
        <Link
          href="/legal/data-terms"
          className="mt-2 md:mt-0 md:ml-4 font-bold underline text-[#959CB1]"
        >
          Privacy Policy
        </Link>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
