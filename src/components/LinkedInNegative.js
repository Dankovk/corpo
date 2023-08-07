import { memo, useMemo } from "react";
import "./LinkedInNegative.css";
const LinkedInNegative = memo(
  ({
    linkedInNegativeLinkedInN,
    linkedInNegativeWidth,
    linkedInNegativeHeight,
    linkedInNegativeFlex,
    linkedInNegativeMaxWidth,
  }) => {
    const linkedInNegativeStyle = useMemo(() => {
      return {
        width: linkedInNegativeWidth,
        height: linkedInNegativeHeight,
        flex: linkedInNegativeFlex,
        maxWidth: linkedInNegativeMaxWidth,
      };
    }, [
      linkedInNegativeWidth,
      linkedInNegativeHeight,
      linkedInNegativeFlex,
      linkedInNegativeMaxWidth,
    ]);

    return (
      <img
        className="linkedin-negative"
        alt=""
        src={linkedInNegativeLinkedInN}
        style={linkedInNegativeStyle}
      />
    );
  }
);

export default LinkedInNegative;
