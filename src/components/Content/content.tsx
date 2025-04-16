"use client";

import Link from "next/link";
import contentData from "@/data/contentDE.json"; 

const ContentSections = () => {
  return (
    <>
      {contentData.map((content, index) => (
        <section
          key={index}
          id={`section-${index + 1}`}
          className="border border-red-500 relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
          <div className="container">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 border border-green-500">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {content.title}
                </h1>
                <p
                  style={{ whiteSpace: "pre-line" }} 
                  className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl"
                >
                  {content.text}
                </p>
                <Link href={`/more-info/${index + 1}`}>
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ContentSections;
