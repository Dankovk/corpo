import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type LogInSignUpType = {
  /** Style props */
  logInSignUpPosition?: Property.Position;
  buttonBackgroundColor?: Property.BackgroundColor;
};

const LogInSignUp: FunctionComponent<LogInSignUpType> = memo(
  ({ logInSignUpPosition, buttonBackgroundColor }) => {
    const logInSignUpStyle: CSS.Properties = useMemo(() => {
      return {
        position: logInSignUpPosition,
      };
    }, [logInSignUpPosition]);

    const buttonStyle: CSS.Properties = useMemo(() => {
      return {
        backgroundColor: buttonBackgroundColor,
      };
    }, [buttonBackgroundColor]);

    return (
      <div
        className="relative flex flex-row items-center justify-start gap-[32px] text-center text-xs text-shades-4 font-desktop-h-4-semibold"
        style={logInSignUpStyle}
      >
        <div className="relative tracking-[0.02em] leading-[16px] uppercase font-medium">
          login
        </div>
        <div
          className="rounded-lg bg-shades-2 shadow-[0px_2px_4px_-1px_#858293] h-8 overflow-hidden flex flex-row py-2 px-3 box-border items-center justify-center text-shades-white"
          style={buttonStyle}
        >
          <div className="relative tracking-[0.02em] leading-[16px] uppercase font-medium">
            Get started
          </div>
        </div>
      </div>
    );
  }
);

export default LogInSignUp;
