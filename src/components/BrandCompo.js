import { memo } from "react";
import SnapchatNegative from "./SnapchatNegative";
import InstagramNegative from "./InstagramNegative";
import DribbbleNegative from "./DribbbleNegative";
import TikTokNegative from "./TikTokNegative";
import TwitterNegative from "./TwitterNegative";
import LinkedInNegative from "./LinkedInNegative";
import PriorityPrimarySizeMType from "./PriorityPrimarySizeMType";
import "./BrandCompo.css";
const BrandCompo = memo(() => {
  return (
    <div className="aiqozg0c-1-parent">
      <img className="aiqozg0c-1-icon" alt="" src="/aiqozg0c-1@2x.png" />
      <div className="snapchat-negative-parent">
        <SnapchatNegative
          snapchatNegativeSnapchatN="/snapchat--negative.svg"
          snapchatNegativeWidth="unset"
          snapchatNegativeHeight="24px"
          snapchatNegativeFlex="1"
          snapchatNegativeMaxWidth="100%"
          snapchatNegativeOverflow="hidden"
        />
        <InstagramNegative
          instagramNegativeInstagra="/instagram--negative.svg"
          instagramNegativeWidth="unset"
          instagramNegativeHeight="24px"
          instagramNegativeFlex="1"
          instagramNegativeMaxWidth="100%"
        />
        <DribbbleNegative
          dribbbleNegativeDribbbleN="/dribbble--negative.svg"
          dribbbleNegativeWidth="unset"
          dribbbleNegativeHeight="24px"
          dribbbleNegativeFlex="1"
          dribbbleNegativeMaxWidth="100%"
          dribbbleNegativeOverflow="hidden"
        />
        <TikTokNegative
          tikTokNegativeTikTokNegat="/tiktok--negative.svg"
          tikTokNegativeWidth="unset"
          tikTokNegativeHeight="24px"
          tikTokNegativeFlex="1"
          tikTokNegativeMaxWidth="100%"
        />
        <TwitterNegative
          twitterNegativeTwitterNeg="/twitter--negative.svg"
          twitterNegativeWidth="unset"
          twitterNegativeHeight="24px"
          twitterNegativeFlex="1"
          twitterNegativeMaxWidth="100%"
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
        priorityPrimarySizeMTypePadding="var(--padding-xs) var(--padding-base)"
        priorityPrimarySizeMTypeHeight="unset"
        labelLineHeight="16px"
        labelWidth="61px"
        labelFlexShrink="0"
      />
    </div>
  );
});

export default BrandCompo;
