import { memo, useMemo } from "react";
import "./DribbbleNegative.css";
const DribbbleNegative = memo(
  ({
    dribbbleNegativeDribbbleN,
    dribbbleNegativeWidth,
    dribbbleNegativeHeight,
    dribbbleNegativeFlex,
    dribbbleNegativeMaxWidth,
    dribbbleNegativeOverflow,
  }) => {
    const dribbbleNegativeStyle = useMemo(() => {
      return {
        width: dribbbleNegativeWidth,
        height: dribbbleNegativeHeight,
        flex: dribbbleNegativeFlex,
        maxWidth: dribbbleNegativeMaxWidth,
        overflow: dribbbleNegativeOverflow,
      };
    }, [
      dribbbleNegativeWidth,
      dribbbleNegativeHeight,
      dribbbleNegativeFlex,
      dribbbleNegativeMaxWidth,
      dribbbleNegativeOverflow,
    ]);

    return (
      <img
        className="dribbble-negative"
        alt=""
        src={dribbbleNegativeDribbbleN}
        style={dribbbleNegativeStyle}
      />
    );
  }
);

export default DribbbleNegative;
