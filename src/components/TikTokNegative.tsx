import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type TikTokNegativeType = {
  tikTokNegativeTikTokNegat?: string;

  /** Style props */
  tikTokNegativeWidth?: Property.Width;
  tikTokNegativeHeight?: Property.Height;
  tikTokNegativeFlex?: Property.Flex;
  tikTokNegativeMaxWidth?: Property.MaxWidth;
};

const TikTokNegative: FunctionComponent<TikTokNegativeType> = memo(
  ({
    tikTokNegativeTikTokNegat,
    tikTokNegativeWidth,
    tikTokNegativeHeight,
    tikTokNegativeFlex,
    tikTokNegativeMaxWidth,
  }) => {
    const tikTokNegativeStyle: CSS.Properties = useMemo(() => {
      return {
        width: tikTokNegativeWidth,
        height: tikTokNegativeHeight,
        flex: tikTokNegativeFlex,
        maxWidth: tikTokNegativeMaxWidth,
      };
    }, [
      tikTokNegativeWidth,
      tikTokNegativeHeight,
      tikTokNegativeFlex,
      tikTokNegativeMaxWidth,
    ]);

    return (
      <img
        className="relative w-12 h-12 overflow-hidden"
        alt=""
        src={tikTokNegativeTikTokNegat}
        style={tikTokNegativeStyle}
      />
    );
  }
);

export default TikTokNegative;
