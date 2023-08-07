import { memo } from "react";
import BrandCompo from "./BrandCompo";
import "./Brand.css";
const Brand = memo(() => {
  return (
    <div className="experts-inner">
      <BrandCompo />
    </div>
  );
});

export default Brand;
