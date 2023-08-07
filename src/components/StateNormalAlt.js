import { memo, useMemo } from "react";
import "./StateNormalAlt.css";
const StateNormalAlt = memo(
  ({
    icon24pxUserFaceTrackingF,
    stateNormalAltPosition,
    stateNormalAltBoxSizing,
  }) => {
    const stateNormalAltStyle = useMemo(() => {
      return {
        position: stateNormalAltPosition,
        boxSizing: stateNormalAltBoxSizing,
      };
    }, [stateNormalAltPosition, stateNormalAltBoxSizing]);

    return (
      <div className="statenormal-alt" style={stateNormalAltStyle}>
        <img
          className="icon-24px-user-face-tracki"
          alt=""
          src={icon24pxUserFaceTrackingF}
        />
      </div>
    );
  }
);

export default StateNormalAlt;
