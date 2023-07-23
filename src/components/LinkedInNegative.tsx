import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type LinkedInNegativeType = {
  linkedInNegativeLinkedInN?: string;

  /** Style props */
  linkedInNegativeWidth?: Property.Width;
  linkedInNegativeHeight?: Property.Height;
  linkedInNegativeFlex?: Property.Flex;
  linkedInNegativeMaxWidth?: Property.MaxWidth;
};

const LinkedInNegative: FunctionComponent<LinkedInNegativeType> = memo(
  ({
    linkedInNegativeLinkedInN,
    linkedInNegativeWidth,
    linkedInNegativeHeight,
    linkedInNegativeFlex,
    linkedInNegativeMaxWidth,
  }) => {
    const linkedInNegativeStyle: CSS.Properties = useMemo(() => {
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
        className="relative w-12 h-12 overflow-hidden"
        alt=""
        src={linkedInNegativeLinkedInN}
        style={linkedInNegativeStyle}
      />
    );
  }
);

export default LinkedInNegative;
