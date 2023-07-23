import { FunctionComponent, memo } from "react";
import PriorityPrimarySizeMType from "./PriorityPrimarySizeMType";

const HeroCTA: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[40px] z-[3] text-center text-53xl text-shades-3 font-desktop-h-4-semibold">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch relative leading-[80px] font-semibold [background:linear-gradient(225deg,_#ffe800,_#ffb444_17.21%,_#ff5e86_46.37%,_#e24eff_71.56%,_#8e53ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Profile Feature
        </div>
        <div className="self-stretch relative text-5xl leading-[32px] font-medium hidden">
          Vetted, approved and recommended agencies and freelancers.
        </div>
      </div>
      <PriorityPrimarySizeMType
        label="BECOME AN EXPERT"
        showPriorityPrimarySizeMType={false}
        priorityPrimarySizeMTypePosition="unset"
        priorityPrimarySizeMTypeBorderRadius="12px"
        priorityPrimarySizeMTypeBackgroundColor="#211b2e"
        priorityPrimarySizeMTypePadding="12px 24px"
        priorityPrimarySizeMTypeHeight="unset"
        labelLineHeight="24px"
        labelWidth="unset"
        labelFlexShrink="unset"
      />
    </div>
  );
});

export default HeroCTA;
