import React from 'react';


const Imprint: React.FC = () => {
  return (
      <div className="max-w-4xl mx-auto py-10 px-6 mt-20">
        <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Imprint</h1>

        {/* 1. Legal Disclosure */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">1. Legal Disclosure</h2>
        <p className="mb-6 text-black dark:text-white">
          <strong>Verinosc</strong><br />
          Company Limited by Guarantee (non-profit, without share capital)<br />
          Kennedy Avenue 70, 2nd Floor, Office 201-202<br />
          1076 Nicosia, Cyprus
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 2. Contact Information */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">2. Contact Information</h2>
        <p className="mb-6 text-black dark:text-white">
          Telephone: +357 9919 0997<br />
          E-mail: <a href="mailto:info@verinosc.org" className="underline">info@verinosc.org</a>
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 3. Company Registration */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">3. Company Registration</h2>
        <p className="mb-6 text-black dark:text-white">
          Registered with the Department of Registrar of Companies & Intellectual Property (Republic of Cyprus)<br />
          Registration No.: HE 471839
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 4. Tax & VAT Information */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">4. Tax & VAT Information</h2>
        <ul className="list-disc list-inside mb-6 text-black dark:text-white">
          <li>VAT status: Verinosc is not VAT-registered, as it conducts no taxable trading activities and is funded solely through donations.</li>
          <li>Tax Identification Number (TIN): 60146315Q</li>
        </ul>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 5. Authorised Representatives */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">5. Authorised Representatives</h2>
        <p className="mb-6 text-black dark:text-white">
          Managing Directors (sole signatories):<br />
          • Edward Assmann<br />
          • Thomas Howert
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 6. EU Online Dispute Resolution (ODR) */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">6. EU Online Dispute Resolution (ODR)</h2>
        <p className="mb-6 text-black dark:text-white">
          The European Commission provides an online-dispute-resolution platform: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr</a>.<br />
          You can reach us via the e-mail address stated above.
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 7. Liability for Content */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">7. Liability for Content</h2>
        <p className="mb-6 text-black dark:text-white">
          Under Cypriot Electronic Commerce Law 156(I)/2004 (Arts. 14 ff.) we are responsible for our own content on this site. We are not obliged to monitor transmitted or stored third-party information, nor to investigate circumstances indicating unlawful activity. Obligations to remove or block information under general law remain unaffected. Liability arises only from the moment we become aware of a concrete infringement; such content will be removed promptly once notified.
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 8. Liability for Links */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">8. Liability for Links</h2>
        <p className="mb-6 text-black dark:text-white">
          Our website contains links to external sites over whose content we have no control. Responsibility for such content lies solely with the respective site operators. Linked pages were checked for possible legal infringements at the time of linking; no illegal content was apparent then. Continuous monitoring of linked pages without specific indications of illegality is unreasonable. On becoming aware of violations, we will remove the corresponding links immediately.
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 9. Limited Liability Notice */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">9. Limited Liability Notice</h2>
        <p className="mb-6 text-black dark:text-white">
          Verinosc is a company limited by guarantee. The liability of its members is limited to the amount set out in the company’s memorandum of association.
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 10. Privacy & Cookie Notice */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">10. Privacy & Cookie Notice</h2>
        <p className="mb-6 text-black dark:text-white">
          Information on how we process personal data and use cookies is provided in our Privacy & Cookie Notice, available at <a href="https://ledg.it.com/ledgit/legal/data-terms" target="_blank" rel="noopener noreferrer" className="underline">https://ledg.it.com/ledgit/legal/data-terms</a>
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        {/* 11. Copyright */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black dark:text-white">11. Copyright</h2>
        <p className="mb-6 text-black dark:text-white">
          Unless otherwise indicated, all content and works on this site are protected by the Cyprus Copyright and Related Rights Law 59/1976 (as amended) and applicable EU legislation. Any use beyond the limits of copyright law requires prior written consent from the respective author. Downloads and copies are permitted only for private, non-commercial purposes.<br />
         
        </p>
        <p>
           © 2025 Verinosc. All rights reserved.
        </p>
      </div>

  );
};

export default Imprint;
