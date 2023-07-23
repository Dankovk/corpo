import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type InstagramNegativeType = {
  instagramNegativeInstagra?: string;

  /** Style props */
  instagramNegativeWidth?: Property.Width;
  instagramNegativeHeight?: Property.Height;
  instagramNegativeFlex?: Property.Flex;
  instagramNegativeMaxWidth?: Property.MaxWidth;
};

const InstagramNegative: FunctionComponent<InstagramNegativeType> = memo(
  ({
    instagramNegativeInstagra,
    instagramNegativeWidth,
    instagramNegativeHeight,
    instagramNegativeFlex,
    instagramNegativeMaxWidth,
  }) => {
    const instagramNegativeStyle: CSS.Properties = useMemo(() => {
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
        className="relative w-12 h-12 overflow-hidden"
        alt=""
        src={instagramNegativeInstagra}
        style={instagramNegativeStyle}
      />
    );
  }
);

export default InstagramNegative;
