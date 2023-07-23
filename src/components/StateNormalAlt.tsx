import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type StateNormalAltType = {
  icon24pxUserFaceTrackingF?: string;

  /** Style props */
  stateNormalAltPosition?: Property.Position;
};

const StateNormalAlt: FunctionComponent<StateNormalAltType> = memo(
  ({ icon24pxUserFaceTrackingF, stateNormalAltPosition }) => {
    const stateNormalAltStyle: CSS.Properties = useMemo(() => {
      return {
        position: stateNormalAltPosition,
      };
    }, [stateNormalAltPosition]);

    return (
      <div
        className="relative rounded bg-shades-white flex flex-row p-1 items-start justify-start"
        style={stateNormalAltStyle}
      >
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src={icon24pxUserFaceTrackingF}
        />
      </div>
    );
  }
);

export default StateNormalAlt;
