import { FunctionComponent, memo } from "react";
import BrandCompo from "./BrandCompo";

const Brand: FunctionComponent = memo(() => {
  return (
    <div className="rounded-lg bg-whitesmoke shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[424px] flex flex-col p-6 box-border items-center justify-center z-[2]">
      <BrandCompo />
    </div>
  );
});

export default Brand;
