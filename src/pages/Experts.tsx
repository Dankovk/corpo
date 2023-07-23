import { FunctionComponent } from "react";
import Background from "../components/Background";
import HeaderWeb2 from "../components/HeaderWeb2";
import Brand from "../components/Brand";
import HeroCTA from "../components/HeroCTA";
import FeaturedProjects from "../components/FeaturedProjects";

const Experts: FunctionComponent = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col p-[89px] box-border items-center justify-start gap-[32px] bg-[url(/public/experts@3x.png)] bg-cover bg-no-repeat bg-[top]">
      <Background />
      <HeaderWeb2 />
      <Brand />
      <HeroCTA />
      <FeaturedProjects />
    </div>
  );
};

export default Experts;
