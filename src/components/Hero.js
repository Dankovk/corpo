import { memo } from "react";
import AlignmentCentered1 from "./AlignmentCentered1";
import StateNormal from "./StateNormal";
import AlignmentCentered from "./AlignmentCentered";
import "./Hero.css";
const Hero = memo(() => {
  return (
    <div className="hero">
      <AlignmentCentered1
        h1="Build Without Limits"
        h4={`Gain access to our WebAR SDK for face & full-body tracking.`}
        alignmentCenteredPosition="unset"
        h1Background="linear-gradient(225deg, #ffe800, #ffb444 17.21%, #ff5e86 46.37%, #e24eff 71.56%, #8e53ff)"
        buttonBoxSizing="unset"
        buttonCursor="pointer"
        buttonBorder="none"
        labelDisplay="unset"
      />
      <div className="body-parent">
        <div className="face">
          <StateNormal
            stateNormalPosition="absolute"
            stateNormalWidth="352px"
            stateNormalHeight="192px"
            stateNormalTop="352px"
            stateNormalRight="unset"
            stateNormalBottom="unset"
            stateNormalLeft="0px"
            stateNormalMargin="0 !important"
            stateNormalFlexShrink="0"
            stateNormalZIndex="0"
          />
          <img className="cover-icon" alt="" src="/cover@2x.png" />
          <AlignmentCentered
            title="Body Tracking"
            alignmentCenteredPosition="unset"
            alignmentCenteredWidth="352px"
            alignmentCenteredZIndex="2"
            buttonBorderRadius="unset"
            buttonBackgroundColor="unset"
            buttonBoxShadow="unset"
            buttonOverflow="unset"
            buttonDisplay="unset"
            buttonFlexDirection="unset"
            buttonPadding="unset"
            buttonBoxSizing="unset"
            buttonAlignItems="unset"
            buttonJustifyContent="unset"
            buttonMarginBlockStart="0"
            buttonMarginBlockEnd="8px"
          />
        </div>
        <div className="face">
          <StateNormal
            stateNormalPosition="absolute"
            stateNormalWidth="352px"
            stateNormalHeight="192px"
            stateNormalTop="352px"
            stateNormalRight="unset"
            stateNormalBottom="unset"
            stateNormalLeft="0px"
            stateNormalMargin="0 !important"
            stateNormalFlexShrink="0"
            stateNormalZIndex="0"
          />
          <img className="cover-icon" alt="" src="/cover1@2x.png" />
          <AlignmentCentered
            title="Face Tracking"
            alignmentCenteredPosition="unset"
            alignmentCenteredWidth="352px"
            alignmentCenteredZIndex="2"
            buttonBorderRadius="unset"
            buttonBackgroundColor="unset"
            buttonBoxShadow="unset"
            buttonOverflow="unset"
            buttonDisplay="unset"
            buttonFlexDirection="unset"
            buttonPadding="unset"
            buttonBoxSizing="unset"
            buttonAlignItems="unset"
            buttonJustifyContent="unset"
            buttonMarginBlockStart="0"
            buttonMarginBlockEnd="8px"
          />
        </div>
      </div>
    </div>
  );
});

export default Hero;
