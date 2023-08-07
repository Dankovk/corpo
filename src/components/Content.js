import { memo } from "react";
import HeaderWeb1 from "./HeaderWeb1";
import Hero from "./Hero";
import FeaturedProjects1 from "./FeaturedProjects1";
import LearnMore from "./LearnMore";
import "./Content.css";
const Content = memo(() => {
  return (
    <div className="content1">
      <HeaderWeb1 />
      <Hero />
      <FeaturedProjects1 />
      <LearnMore />
    </div>
  );
});

export default Content;
