import { FunctionComponent, memo } from "react";

const Button1: FunctionComponent = memo(() => {
  return (
    <button className="cursor-pointer [border:none] py-2 px-3 bg-solid-7 rounded-lg shadow-[0px_2px_4px_-1px_#858293] h-8 overflow-hidden flex flex-row box-border items-center justify-center">
      <div className="relative text-xs tracking-[0.02em] leading-[16px] uppercase font-medium font-desktop-h-4-semibold text-shades-white text-center">
        Get started
      </div>
    </button>
  );
});

export default Button1;
