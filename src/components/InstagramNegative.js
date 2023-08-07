import { memo, useMemo } from "react";
import "./InstagramNegative.css";
const InstagramNegative = memo(
  ({
    instagramNegativeInstagra,
    instagramNegativeWidth,
    instagramNegativeHeight,
    instagramNegativeFlex,
    instagramNegativeMaxWidth,
  }) => {
    const instagramNegativeStyle = useMemo(() => {
      return {
        width: instagramNegativeWidth,
        height: instagramNegativeHeight,
        flex: instagramNegativeFlex,
        maxWidth: instagramNegativeMaxWidth,
      };
    }, [
      instagramNegativeWidth,
      instagramNegativeHeight,
      instagramNegativeFlex,
      instagramNegativeMaxWidth,
    ]);

    return (
      <img
        className="instagram-negative"
        alt=""
        src={instagramNegativeInstagra}
        style={instagramNegativeStyle}
      />
    );
  }
);

export default InstagramNegative;
