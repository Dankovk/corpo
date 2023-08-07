import { memo, useMemo } from "react";
import "./TwitterNegative.css";
const TwitterNegative = memo(
  ({
    twitterNegativeTwitterNeg,
    twitterNegativeWidth,
    twitterNegativeHeight,
    twitterNegativeFlex,
    twitterNegativeMaxWidth,
  }) => {
    const twitterNegativeStyle = useMemo(() => {
      return {
        width: twitterNegativeWidth,
        height: twitterNegativeHeight,
        flex: twitterNegativeFlex,
        maxWidth: twitterNegativeMaxWidth,
      };
    }, [
      twitterNegativeWidth,
      twitterNegativeHeight,
      twitterNegativeFlex,
      twitterNegativeMaxWidth,
    ]);

    return (
      <img
        className="twitter-negative"
        alt=""
        src={twitterNegativeTwitterNeg}
        style={twitterNegativeStyle}
      />
    );
  }
);

export default TwitterNegative;
