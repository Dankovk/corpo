import { memo } from "react";
import SizeLIcon from "./SizeLIcon";
import LogInSignUp from "./LogInSignUp";
import "./HeaderWeb2.css";
const HeaderWeb2 = memo(() => {
  return (
    <div className="header-web1">
      <SizeLIcon />
      <div className="header-links1">
        <div className="builder1">Builder</div>
        <div className="sdk1">SDK</div>
        <div className="builder1">Pricing</div>
        <div className="builder1">Showcase</div>
        <div className="hire-an-expert">HIRE AN EXPERT</div>
        <div className="builder1">Blog</div>
        <div className="builder1">Press</div>
        <div className="link7">link</div>
        <div className="link7">link</div>
      </div>
      <LogInSignUp
        logInSignUpPosition="unset"
        buttonBackgroundColor="#ff1d97"
        loginDisplay="inline-block"
        buttonCursor="unset"
        buttonBorder="unset"
        labelDisplay="inline-block"
      />
    </div>
  );
});

export default HeaderWeb2;
