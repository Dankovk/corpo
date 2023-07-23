import { FunctionComponent, memo } from "react";
import Button from "./Button";

const Hero: FunctionComponent = memo(() => {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px] text-center text-53xl text-shades-3 font-desktop-h-4-semibold">
      <div className="w-[928px] flex flex-col items-center justify-start gap-[40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative leading-[80px] font-semibold [background:linear-gradient(225deg,_#ffe800,_#ffb444_17.21%,_#ff5e86_46.37%,_#e24eff_71.56%,_#8e53ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Build Without Limits
          </div>
          <div className="self-stretch relative text-5xl leading-[32px] font-medium">{`Gain access to our WebAR SDK for face & full-body tracking.`}</div>
        </div>
        <Button />
      </div>
      <div className="flex flex-row items-center justify-center gap-[32px] text-base text-shades-black">
        <div className="w-[352px] h-[552px] flex flex-col items-center justify-start relative">
          <div className="absolute my-0 mx-[!important] top-[352px] left-[0px] rounded-2xl bg-white-60 shadow-[0px_8px_32px_-16px_rgba(135,_112,_195,_0.6)] [backdrop-filter:blur(32px)] box-border w-[352px] h-48 overflow-hidden shrink-0 z-[0] border-[1px] border-solid border-white-25" />
          <img
            className="relative w-[352px] h-[352px] object-cover z-[1]"
            alt=""
            src="/cover@2x.png"
          />
          <div className="rounded-lg w-[352px] flex flex-col pt-6 px-4 pb-8 box-border items-center justify-start gap-[24px] z-[2]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[24px] font-medium">
                Body Tracking
              </div>
              <div className="self-stretch relative text-sm leading-[24px] text-shades-3">
                <p className="[margin-block-start:0] [margin-block-end:8px]">{`Create wearable avatars `}</p>
                <p className="m-0">or digital garments</p>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3 px-4 bg-shades-2 rounded-lg shadow-[0px_2px_4px_-1px_#858293] overflow-hidden flex flex-row items-center justify-center">
              <div className="relative text-xs tracking-[0.02em] leading-[16px] uppercase font-medium font-desktop-h-4-semibold text-shades-white text-center">
                Get started
              </div>
            </button>
          </div>
        </div>
        <div className="w-[352px] h-[552px] flex flex-col items-center justify-start relative">
          <div className="absolute my-0 mx-[!important] top-[352px] left-[0px] rounded-2xl bg-white-60 shadow-[0px_8px_32px_-16px_rgba(135,_112,_195,_0.6)] [backdrop-filter:blur(32px)] box-border w-[352px] h-48 overflow-hidden shrink-0 z-[0] border-[1px] border-solid border-white-25" />
          <img
            className="relative w-[352px] h-[352px] object-cover z-[1]"
            alt=""
            src="/cover1@2x.png"
          />
          <div className="rounded-lg w-[352px] flex flex-col pt-6 px-4 pb-8 box-border items-center justify-start gap-[24px] z-[2]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[24px] font-medium">
                Face Tracking
              </div>
              <div className="self-stretch relative text-sm leading-[24px] text-shades-3">
                <p className="[margin-block-start:0] [margin-block-end:8px]">{`Attach accessories or replace `}</p>
                <p className="m-0">the head with an avatar head</p>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3 px-4 bg-shades-2 rounded-lg shadow-[0px_2px_4px_-1px_#858293] overflow-hidden flex flex-row items-center justify-center">
              <div className="relative text-xs tracking-[0.02em] leading-[16px] uppercase font-medium font-desktop-h-4-semibold text-shades-white text-center">
                Get started
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
