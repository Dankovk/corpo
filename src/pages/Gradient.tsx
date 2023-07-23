import { FunctionComponent } from "react";
import ShapesIcon from "../components/ShapesIcon";
import Content from "../components/Content";

const Gradient: FunctionComponent = () => {
  return (
    <div className="relative [background:linear-gradient(rgba(255,_255,_255,_0.25),_rgba(255,_255,_255,_0.25)),_#f6f4fa] [backdrop-filter:blur(320px)] w-full h-[2301px] overflow-hidden flex flex-col items-center justify-between">
      <ShapesIcon />
      <Content />
    </div>
  );
};

export default Gradient;
