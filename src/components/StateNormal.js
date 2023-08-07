import { memo, useMemo } from "react";
import "./StateNormal.css";
const StateNormal = memo(
  ({
    stateNormalPosition,
    stateNormalWidth,
    stateNormalHeight,
    stateNormalTop,
    stateNormalRight,
    stateNormalBottom,
    stateNormalLeft,
    stateNormalMargin,
    stateNormalFlexShrink,
    stateNormalZIndex,
  }) => {
    const stateNormalStyle = useMemo(() => {
      return {
        position: stateNormalPosition,
        width: stateNormalWidth,
        height: stateNormalHeight,
        top: stateNormalTop,
        right: stateNormalRight,
        bottom: stateNormalBottom,
        left: stateNormalLeft,
        margin: stateNormalMargin,
        flexShrink: stateNormalFlexShrink,
        zIndex: stateNormalZIndex,
      };
    }, [
      stateNormalPosition,
      stateNormalWidth,
      stateNormalHeight,
      stateNormalTop,
      stateNormalRight,
      stateNormalBottom,
      stateNormalLeft,
      stateNormalMargin,
      stateNormalFlexShrink,
      stateNormalZIndex,
    ]);

    return <div className="statenormal" style={stateNormalStyle} />;
  }
);

export default StateNormal;
