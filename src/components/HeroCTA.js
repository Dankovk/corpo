import { memo } from "react";
import PriorityPrimarySizeMType from "./PriorityPrimarySizeMType";
import "./HeroCTA.css";
const HeroCTA = memo(() => {
  return (
    <div className="hero-cta">
      <div className="hero-title1">
        <div className="h11">Profile Feature</div>
        <div className="h41">
          Vetted, approved and recommended agencies and freelancers.
        </div>
      </div>
      <PriorityPrimarySizeMType
        label="BECOME AN EXPERT"
        showPriorityPrimarySizeMType={false}
        priorityPrimarySizeMTypePosition="unset"
        priorityPrimarySizeMTypeBorderRadius="12px"
        priorityPrimarySizeMTypeBackgroundColor="#211b2e"
        priorityPrimarySizeMTypePadding="var(--padding-xs) var(--padding-5xl)"
        priorityPrimarySizeMTypeHeight="unset"
        labelLineHeight="24px"
        labelWidth="unset"
        labelFlexShrink="unset"
      />
    </div>
  );
});

export default HeroCTA;
