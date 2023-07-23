import { FunctionComponent } from "react";
import SizeLIcon from "../components/SizeLIcon";
import LogInSignUp from "../components/LogInSignUp";
import Brand from "../components/Brand";
import HeroCTA from "../components/HeroCTA";
import FeaturedProjects from "../components/FeaturedProjects";

const Experts: FunctionComponent = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col p-[89px] box-border items-center justify-start gap-[32px] bg-[url(/public/experts@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-xs text-shades-4 font-desktop-h-4-semibold">
      <div className="self-stretch my-0 mx-[!important] absolute top-[0px] left-[0px] h-[1736px] flex flex-row flex-wrap p-2.5 box-border items-start justify-start gap-[10px] bg-[url(/public/background@3x.png)] bg-cover bg-no-repeat bg-[top] z-[0]">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[1680px] object-cover hidden z-[0]"
          alt=""
          src="/img@2x.png"
        />
        <img
          className="flex-1 absolute my-0 mx-[!important] top-[5040px] left-[1440px] max-w-full overflow-hidden h-[1680px] object-cover hidden z-[1]"
          alt=""
          src="/img1@2x.png"
        />
        <img
          className="flex-1 absolute my-0 mx-[!important] top-[1680px] left-[1440px] max-w-full overflow-hidden h-[1680px] object-cover hidden z-[2]"
          alt=""
          src="/img2@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row p-4 items-center justify-between z-[1]">
        <SizeLIcon />
        <div className="w-[607px] flex flex-row items-start justify-start gap-[40px]">
          <div className="flex-1 relative tracking-[0.02em] leading-[16px] uppercase font-medium">
            Builder
          </div>
          <div className="flex-1 relative tracking-[0.02em] leading-[16px] uppercase font-medium text-slategray">
            SDK
          </div>
          <div className="flex-1 relative tracking-[0.02em] leading-[16px] uppercase font-medium">
            Pricing
          </div>
          <div className="flex-1 relative tracking-[0.02em] leading-[16px] uppercase font-medium">
            Showcase
          </div>
          <div className="flex-1 relative tracking-[0.02em] leading-[16px] uppercase font-medium text-black">
            HIRE AN EXPERT
          </div>
          <div className="flex-1 relative tracking-[0.02em] leading-[16px] uppercase font-medium">
            Blog
          </div>
          <div className="flex-1 relative tracking-[0.02em] leading-[16px] uppercase font-medium">
            Press
          </div>
          <div className="flex-1 relative text-sm leading-[24px] font-medium text-black hidden">
            link
          </div>
          <div className="flex-1 relative text-sm leading-[24px] font-medium text-black hidden">
            link
          </div>
        </div>
        <LogInSignUp
          logInSignUpPosition="unset"
          buttonBackgroundColor="#ff1d97"
        />
      </div>
      <Brand />
      <HeroCTA />
      <FeaturedProjects />
    </div>
  );
};

export default Experts;
