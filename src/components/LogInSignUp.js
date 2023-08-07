import { memo, useMemo } from "react";
import PriorityPrimarySizeLType from "./PriorityPrimarySizeLType";
import "./LogInSignUp.css";
const LogInSignUp = memo(
  ({
    logInSignUpPosition,
    buttonBackgroundColor,
    loginDisplay,
    buttonCursor,
    buttonBorder,
    labelDisplay,
  }) => {
    const logInSignUpStyle = useMemo(() => {
      return {
        position: logInSignUpPosition,
      };
    }, [logInSignUpPosition]);

    const priorityPrimarySizeLTypeStyle = useMemo(() => {
      return {
        backgroundColor: buttonBackgroundColor,
        cursor: buttonCursor,
        border: buttonBorder,
      };
    }, [buttonBackgroundColor, buttonCursor, buttonBorder]);

    const loginStyle = useMemo(() => {
      return {
        display: loginDisplay,
      };
    }, [loginDisplay]);

    const labelStyle = useMemo(() => {
      return {
        display: labelDisplay,
      };
    }, [labelDisplay]);

    return (
      <div className="login-signup" style={logInSignUpStyle}>
        <div className="login" style={loginStyle}>
          login
        </div>
        <PriorityPrimarySizeLType
          label="Get started"
          priorityPrimarySizeLTypePosition="unset"
          priorityPrimarySizeLTypeBoxSizing="border-box"
          priorityPrimarySizeLTypeCursor="unset"
          priorityPrimarySizeLTypeBorder="unset"
          priorityPrimarySizeLTypeBackgroundColor="#3e3b46"
          priorityPrimarySizeLTypePadding="var(--padding-5xs) var(--padding-xs)"
          priorityPrimarySizeLTypeHeight="32px"
          priorityPrimarySizeLTypeBorderRadius="8px"
          labelDisplay="inline-block"
          labelLineHeight="16px"
        />
      </div>
    );
  }
);

export default LogInSignUp;
