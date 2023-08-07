import { memo, useMemo } from "react";
import "./SnapchatNegative.css";
const SnapchatNegative = memo(
  ({
    snapchatNegativeSnapchatN,
    snapchatNegativeWidth,
    snapchatNegativeHeight,
    snapchatNegativeFlex,
    snapchatNegativeMaxWidth,
    snapchatNegativeOverflow,
  }) => {
    const snapchatNegativeStyle = useMemo(() => {
      return {
        width: snapchatNegativeWidth,
        height: snapchatNegativeHeight,
        flex: snapchatNegativeFlex,
        maxWidth: snapchatNegativeMaxWidth,
        overflow: snapchatNegativeOverflow,
      };
    }, [
      snapchatNegativeWidth,
      snapchatNegativeHeight,
      snapchatNegativeFlex,
      snapchatNegativeMaxWidth,
      snapchatNegativeOverflow,
    ]);

    return (
      <img
        className="snapchat-negative"
        alt=""
        src={snapchatNegativeSnapchatN}
        style={snapchatNegativeStyle}
      />
    );
  }
);

export default SnapchatNegative;
