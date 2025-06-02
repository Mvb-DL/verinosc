'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

const CookieBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton={false}
      onAccept={() => {}}
      cookieName="noCookiesHere"
      style={{
        background: '#ffffff',
        borderTop: '1px solid #E5E7EB',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        padding: '12px 16px',
        color: '#000',
      }}
      contentStyle={{
        margin: 0,
        padding: 0,
        color: '#000',
      }}
      buttonText="Okay!"
      buttonStyle={{
        color: '#fff',
        backgroundColor: '#83AAFB',
        fontSize: '14px',
        fontWeight: 600,
        padding: '8px 16px',
        minWidth: '80px',
      }}
      // Zentriert den Button auf Mobilgeräten und setzt auf Desktop-Layouts Abstand
      containerClasses="!justify-center md:!justify-between"
      expires={150}
    >
      <div
        className="
          flex flex-col
          items-center justify-center
          md:flex-row md:items-center md:justify-between
          text-black text-sm
        "
      >
        <span className="mb-2 text-center md:text-left md:mb-0">
          <strong>We do not use cookies.</strong> We only collect technical server-log data (e.g. IP address) under our legitimate interests for security and performance.
        </span>
        <Link
          href="/legal/privacy"
          className="mt-2 md:mt-0 font-bold underline"
        >
          Privacy Policy
        </Link>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
