import { FunctionComponent, memo } from "react";

const ShapesIcon: FunctionComponent = memo(() => {
  return (
    <img
      className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[1379px] h-[2814px] z-[0]"
      alt=""
      src="/shapes.svg"
    />
  );
});

export default ShapesIcon;
