import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 mt-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Privacy Policy</h1>
      <p className="mb-6 text-black dark:text-white">
        <strong>Effective date:</strong> 2 June 2025
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* 1. Data Controller */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">1. Data Controller</h2>
      <p className="mb-6 text-black dark:text-white">
        <strong>Verinosc</strong><br />
        Company Limited by Guarantee (non-profit, without share capital)<br />
        Kennedy Avenue 70, 2nd Floor, Office 201-202<br />
        1076 Nicosia, Cyprus
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* 2. Data Processing on This Website */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">2. Data Processing on This Website</h2>
      <p className="mb-4 text-black dark:text-white">
        Our website is a static informational site. You can visit it without providing any personal data.
      </p>
      <ul className="list-disc list-inside mb-6 text-black dark:text-white">
        <li><strong>No cookies or trackers</strong> – We do not use cookies, analytics, or marketing tools.</li>
        <li><strong>No contact forms, newsletters, etc.</strong> – There are no features through which you can submit personal data to us.</li>
        <li>
          <strong>Server log files</strong> – The hosting provider processes technically unavoidable information when the site is accessed (e.g., date &amp; time of request, requested file, browser "User-Agent"). These data are stored without IP addresses or only in anonymised form and are used solely to maintain the technical operation of the website. No personal evaluation takes place.
        </li>
        <li>
          The legal basis for the temporary processing of this technical information is Art. 6 (1) (f) GDPR (legitimate interest in providing a functional website).
        </li>
      </ul>
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* 3. Your Rights */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">3. Your Rights</h2>
      <p className="mb-4 text-black dark:text-white">
        Even though we do not process personal data, under the GDPR you generally have the following rights:
      </p>
      <ul className="list-disc list-inside mb-6 text-black dark:text-white">
        <li>Right of access (Art. 15 GDPR)</li>
        <li>Rectification (Art. 16 GDPR)</li>
        <li>Erasure (Art. 17 GDPR)</li>
        <li>Restriction of processing (Art. 18 GDPR)</li>
        <li>Data portability (Art. 20 GDPR)</li>
        <li>Objection to processing (Art. 21 GDPR)</li>
        <li>Complaint to a supervisory authority (Art. 77 GDPR)</li>
      </ul>
      <p className="mb-6 text-black dark:text-white">
        To exercise your rights, simply send us an informal message, e.g., by email.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* 4. Retention Period */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">4. Retention Period</h2>
      <p className="mb-6 text-black dark:text-white">
        Because we do not collect personal data, no further storage takes place. Server log data that may accrue in anonymised form are kept for a maximum of 7 days before automatic deletion.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* 5. External Links */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">5. External Links</h2>
      <p className="mb-6 text-black dark:text-white">
        If our website contains links to external resources (e.g., GitHub repositories or social media), please observe the privacy notices of those providers. When you click an external link, you leave our website – we have no influence over data processing on those sites.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* 6. Changes to This Privacy Policy */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">6. Changes to This Privacy Policy</h2>
      <p className="mb-6 text-black dark:text-white">
        Legal or technical developments may make it necessary to amend this privacy policy. The current version is always available at this location.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* 7. Questions */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">7. Questions?</h2>
      <p className="mb-6 text-black dark:text-white">
        Email us at{' '}
        <a href="mailto:privacy@verinosc.org" className="underline">
          privacy@verinosc.org
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
