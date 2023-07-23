import { FunctionComponent, memo } from "react";
import InstagramNegative from "./InstagramNegative";
import TikTokNegative from "./TikTokNegative";
import LinkedInNegative from "./LinkedInNegative";
import PriorityPrimarySizeMType from "./PriorityPrimarySizeMType";

const BrandCompo: FunctionComponent = memo(() => {
  return (
    <div className="flex flex-col p-2 items-center justify-start gap-[20px]">
      <img
        className="relative w-[504px] h-[66px] object-cover"
        alt=""
        src="/aiqozg0c-1@2x.png"
      />
      <div className="w-[248px] flex flex-row items-center justify-center gap-[16px]">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-6"
          alt=""
          src="/snapchat--negative.svg"
        />
        <InstagramNegative
          instagramNegativeInstagra="/instagram--negative.svg"
          instagramNegativeWidth="unset"
          instagramNegativeHeight="24px"
          instagramNegativeFlex="1"
          instagramNegativeMaxWidth="100%"
        />
        <img
          className="flex-1 relative max-w-full overflow-hidden h-6"
          alt=""
          src="/dribbble--negative.svg"
        />
        <TikTokNegative
          tikTokNegativeTikTokNegat="/tiktok--negative.svg"
          tikTokNegativeWidth="unset"
          tikTokNegativeHeight="24px"
          tikTokNegativeFlex="1"
          tikTokNegativeMaxWidth="100%"
        />
        <img
          className="flex-1 relative max-w-full overflow-hidden h-6"
          alt=""
          src="/twitter--negative.svg"
        />
        <LinkedInNegative
          linkedInNegativeLinkedInN="/linkedin--negative.svg"
          linkedInNegativeWidth="unset"
          linkedInNegativeHeight="24px"
          linkedInNegativeFlex="1"
          linkedInNegativeMaxWidth="100%"
        />
      </div>
      <PriorityPrimarySizeMType
        label="CONTACT "
        showPriorityPrimarySizeMType
        priorityPrimarySizeMTypePosition="unset"
        priorityPrimarySizeMTypeBorderRadius="8px"
        priorityPrimarySizeMTypeBackgroundColor="#000"
        priorityPrimarySizeMTypePadding="12px 16px"
        priorityPrimarySizeMTypeHeight="unset"
        labelLineHeight="16px"
        labelWidth="61px"
        labelFlexShrink="0"
      />
    </div>
  );
});

export default BrandCompo;
