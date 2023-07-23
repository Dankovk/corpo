import { FunctionComponent, memo } from "react";
import SizeLIcon from "./SizeLIcon";
import LogInSignUp from "./LogInSignUp";

const HeaderWeb2: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-row p-4 items-center justify-between z-[1] text-center text-xs text-shades-4 font-desktop-h-4-semibold">
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
  );
});

export default HeaderWeb2;
