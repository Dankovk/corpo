import { FunctionComponent, memo } from "react";

const Button: FunctionComponent = memo(() => {
  return (
    <button className="cursor-pointer [border:none] py-3 px-6 bg-shades-black rounded-xl shadow-[0px_2px_4px_-1px_#858293] overflow-hidden flex flex-row items-center justify-center">
      <div className="relative text-sm tracking-[0.02em] leading-[24px] uppercase font-medium font-desktop-h-4-semibold text-shades-white text-center">
        Get started today
      </div>
    </button>
  );
});

export default Button;
