import { FunctionComponent, memo } from "react";
import HeaderWeb1 from "./HeaderWeb1";
import Hero from "./Hero";
import FeaturedProjects1 from "./FeaturedProjects1";
import LearnMore from "./LearnMore";

const Content: FunctionComponent = memo(() => {
  return (
    <div className="h-[2301px] flex flex-col items-center justify-between z-[1] text-center text-xs text-shades-black font-desktop-h-4-semibold">
      <HeaderWeb1 />
      <Hero />
      <FeaturedProjects1 />
      <LearnMore />
    </div>
  );
});

export default Content;
