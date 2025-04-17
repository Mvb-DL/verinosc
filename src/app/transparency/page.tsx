import ScrollUp from "@/components/Common/ScrollUp";
import Content from "@/components/Content/content";

export default function Transparency() {
  return (
    <>
      <ScrollUp />
      {/* Wrapper adding extra top padding to push content down */}
      <div className="pt-15 sm:pt-24 md:pt-32 lg:pt-25">
        <Content />
      </div>
    </>
  );
}
