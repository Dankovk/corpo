import { FunctionComponent, memo } from "react";
import CaseCard from "./CaseCard";
import StateNormal from "./StateNormal";
import StateNormalAlt from "./StateNormalAlt";

const FeaturedProjects: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[32px] z-[4] text-center text-29xl text-shades-black font-desktop-h-4-semibold">
      <div className="self-stretch relative leading-[56px] font-semibold">
        Featured Projects
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[32px] text-xl">
        <CaseCard
          coverImg="/cover-img3@2x.png"
          icon24pxActionsCopyFat="/icon-24px--actions--copy-fat2.svg"
          icon24pxDownloadSimpleFat="/icon-24px--download--simple-fat2.svg"
          qR="/qr2@2x.png"
          share={false}
          caseCardWidth="unset"
          caseCardFlex="1"
          coverImgIconWidth="unset"
          coverImgIconAlignSelf="stretch"
          coverImgIconMaxWidth="100%"
          coverImgIconOverflow="hidden"
          coverImgIconFlexShrink="0"
          contentAlignSelf="stretch"
          aboutWidth="unset"
          aboutAlignSelf="stretch"
          actionsAlignSelf="unset"
          shareFlex="1"
          linkLineHeight="20px"
          linkTextDecoration="underline"
        />
        <div className="flex-1 relative h-[996px]">
          <StateNormal
            stateNormalPosition="absolute"
            stateNormalWidth="100%"
            stateNormalHeight="100%"
            stateNormalTop="0%"
            stateNormalRight="0%"
            stateNormalBottom="0%"
            stateNormalLeft="0%"
          />
          <div className="absolute h-[95.58%] w-[90.91%] top-[1.2%] right-[4.55%] bottom-[3.21%] left-[4.55%] flex flex-col items-center justify-start gap-[24px]">
            <img
              className="self-stretch relative rounded-lg max-w-full overflow-hidden h-[520px] shrink-0 object-cover"
              alt=""
              src="/cover-img4@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch flex flex-col py-0 px-2 items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Voice AR
                  </div>
                  <div className="self-stretch relative text-sm leading-[24px] text-shades-2">
                    Try AR Pup voice commands “sit”, “shake”, “roll over”, “play
                    dead”
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[16px] text-left text-sm">
                  <div className="flex-1 relative leading-[24px] font-medium hidden">
                    Share experience:
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px] text-solid-5">
                    <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                      geenee.ar/ardog
                    </div>
                    <StateNormalAlt
                      icon24pxUserFaceTrackingF="/icon-24px--actions--copy-fat3.svg"
                      stateNormalAltPosition="unset"
                    />
                    <StateNormalAlt
                      icon24pxUserFaceTrackingF="/icon-24px--download--simple-fat3.svg"
                      stateNormalAltPosition="unset"
                    />
                  </div>
                </div>
              </div>
              <img
                className="relative w-[280px] h-[280px] object-cover"
                alt=""
                src="/qr3@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 relative h-[996px]">
          <StateNormal
            stateNormalPosition="absolute"
            stateNormalWidth="100%"
            stateNormalHeight="100%"
            stateNormalTop="0%"
            stateNormalRight="0%"
            stateNormalBottom="0%"
            stateNormalLeft="0%"
          />
          <div className="absolute h-[95.58%] w-[90.91%] top-[1.2%] right-[4.55%] bottom-[3.21%] left-[4.55%] flex flex-col items-center justify-start gap-[24px]">
            <img
              className="self-stretch relative rounded-lg max-w-full overflow-hidden h-[520px] shrink-0 object-cover"
              alt=""
              src="/cover-img5@2x.png"
            />
            <div className="self-stretch h-[408px] flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch flex flex-col py-0 px-2 items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Gesture AR
                  </div>
                  <div className="self-stretch relative text-sm leading-[24px] text-shades-2">
                    <p className="[margin-block-start:0] [margin-block-end:8px]">{`Control the AR particle sphere `}</p>
                    <p className="m-0">with your arm movements</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[16px] text-left text-sm">
                  <div className="flex-1 relative leading-[24px] font-medium hidden">
                    Share experience:
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px] text-solid-5">
                    <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                      geenee.ar/gesture
                    </div>
                    <StateNormalAlt
                      icon24pxUserFaceTrackingF="/icon-24px--actions--copy-fat4.svg"
                      stateNormalAltPosition="unset"
                    />
                    <StateNormalAlt
                      icon24pxUserFaceTrackingF="/icon-24px--download--simple-fat4.svg"
                      stateNormalAltPosition="unset"
                    />
                  </div>
                </div>
              </div>
              <img
                className="relative w-[280px] h-[280px] object-cover"
                alt=""
                src="/qr4@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FeaturedProjects;
