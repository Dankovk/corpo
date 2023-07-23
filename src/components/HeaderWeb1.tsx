import { FunctionComponent, memo } from "react";
import Login from "./Login";
import Button1 from "./Button1";

const HeaderWeb1: FunctionComponent = memo(() => {
  return (
    <div className="w-[1312px] flex flex-row items-center justify-between text-center text-xs text-shades-4 font-desktop-h-4-semibold">
      <a className="[text-decoration:none] relative w-48 h-8">
        <img className="relative w-[188px] h-7" alt="" src="/union.svg" />
      </a>
      <div className="flex flex-row items-start justify-start gap-[32px]">
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[16px] uppercase font-medium text-[inherit]"
          target="_blank"
        >
          Builder
        </a>
        <a
          className="[text-decoration:none] relative tracking-[0.02em] leading-[16px] uppercase font-medium text-shades-black"
          target="_blank"
        >
          SDK
        </a>
        <a className="[text-decoration:none] relative tracking-[0.02em] leading-[16px] uppercase font-medium text-[inherit]">
          Pricing
        </a>
        <a className="[text-decoration:none] relative tracking-[0.02em] leading-[16px] uppercase font-medium text-[inherit]">
          Showcase
        </a>
        <a className="[text-decoration:none] relative tracking-[0.02em] leading-[16px] uppercase font-medium text-[inherit]">
          Blog
        </a>
        <a className="[text-decoration:none] relative tracking-[0.02em] leading-[16px] uppercase font-medium text-[inherit]">
          Press
        </a>
        <div className="relative text-sm leading-[24px] font-medium text-black hidden">
          link
        </div>
        <div className="relative text-sm leading-[24px] font-medium text-black hidden">
          link
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[32px]">
        <Login />
        <Button1 />
      </div>
    </div>
  );
});

export default HeaderWeb1;
