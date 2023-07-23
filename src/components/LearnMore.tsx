import { FunctionComponent, memo } from "react";

const LearnMore: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[8px] text-center text-5xl text-shades-black font-desktop-h-4-semibold">
      <div className="relative leading-[32px] font-semibold flex items-center justify-center w-[736px]">
        Want to learn more?
      </div>
      <div className="relative text-sm text-shades-2 inline-block w-[736px]">
        <span className="leading-[24px]">{`Join our `}</span>
        <span className="[text-decoration:underline] leading-[20px] font-medium">
          discord
        </span>
        <span className="leading-[24px]">{` or check out our `}</span>
        <span className="[text-decoration:underline] leading-[20px] font-medium">
          documentation
        </span>
      </div>
    </div>
  );
});

export default LearnMore;
