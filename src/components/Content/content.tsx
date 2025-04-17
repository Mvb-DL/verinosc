"use client";

import { usePathname } from "next/navigation";
import createDOMPurify from "dompurify";
import contentData from "@/data/contentDE.json";
import { useMemo } from "react";

const ContentSections: React.FC = () => {
  const pathname = usePathname();
  const sectionKey = pathname === "/transparency" ? "transparency" : "landing";
  const sections = contentData[sectionKey] ?? [];

  // Initialize DOMPurify only in browser
  const DOMPurify = useMemo(() => {
    if (typeof window === "undefined") return null;
    const purifier = createDOMPurify(window);
    // Allow common list elements in sanitized HTML
    purifier.addHook('uponSanitizeElement', (node, data) => {
      // keep default behavior
    });
    return purifier;
  }, []);

  return (
    <>
      {sections.map((content, index) => {
        // Replace new lines with <br/> but preserve existing HTML lists
        const withLineBreaks = content.text.replace(/\n/g, "<br/>");
        

        const sanitizedHtml = DOMPurify
          ? DOMPurify.sanitize(withLineBreaks, {
              ALLOWED_TAGS: [
                'b','i','em','strong','a',
                'ul','ol','li','br','p'
              ],
              ALLOWED_ATTR: ['href','target','rel']
            })
          : withLineBreaks;

        return (
          <section
            key={index}
            id={`section-${index + 1}`}
            className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
          >
            <div className="container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3">
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                    {content.title}
                  </h1>
                  <div
                    className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl"
                    dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ContentSections;
