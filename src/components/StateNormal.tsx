import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type StateNormalType = {
  /** Style props */
  stateNormalPosition?: Property.Position;
  stateNormalWidth?: Property.Width;
  stateNormalHeight?: Property.Height;
  stateNormalTop?: Property.Top;
  stateNormalRight?: Property.Right;
  stateNormalBottom?: Property.Bottom;
  stateNormalLeft?: Property.Left;
};

const StateNormal: FunctionComponent<StateNormalType> = memo(
  ({
    stateNormalPosition,
    stateNormalWidth,
    stateNormalHeight,
    stateNormalTop,
    stateNormalRight,
    stateNormalBottom,
    stateNormalLeft,
  }) => {
    const stateNormalStyle: CSS.Properties = useMemo(() => {
      return {
        position: stateNormalPosition,
        width: stateNormalWidth,
        height: stateNormalHeight,
        top: stateNormalTop,
        right: stateNormalRight,
        bottom: stateNormalBottom,
        left: stateNormalLeft,
      };
    }, [
      stateNormalPosition,
      stateNormalWidth,
      stateNormalHeight,
      stateNormalTop,
      stateNormalRight,
      stateNormalBottom,
      stateNormalLeft,
    ]);

    return (
      <div
        className="relative rounded-2xl bg-white-60 shadow-[0px_8px_32px_-16px_rgba(135,_112,_195,_0.6)] [backdrop-filter:blur(32px)] box-border w-40 h-40 overflow-hidden border-[1px] border-solid border-white-25"
        style={stateNormalStyle}
      />
    );
  }
);

export default StateNormal;
