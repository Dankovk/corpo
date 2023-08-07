import { memo, useMemo } from "react";
import "./TikTokNegative.css";
const TikTokNegative = memo(
  ({
    tikTokNegativeTikTokNegat,
    tikTokNegativeWidth,
    tikTokNegativeHeight,
    tikTokNegativeFlex,
    tikTokNegativeMaxWidth,
  }) => {
    const tikTokNegativeStyle = useMemo(() => {
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
        className="tiktok-negative"
        alt=""
        src={tikTokNegativeTikTokNegat}
        style={tikTokNegativeStyle}
      />
    );
  }
);

export default TikTokNegative;
