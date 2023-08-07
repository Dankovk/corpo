import { memo } from "react";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import LogInSignUp from "./LogInSignUp";
import "./HeaderWeb1.css";
const HeaderWeb1 = memo(() => {
  return (
    <div className="header-web2">
      <Header />
      <HeaderLinks
        link={false}
        link1={false}
        headerLinksPosition="unset"
        builderTextDecoration="none"
        sDKColor="#211b2e"
        sDKTextDecoration="none"
        pricingTextDecoration="none"
        showcaseTextDecoration="none"
        blogTextDecoration="none"
        pressTextDecoration="none"
      />
      <LogInSignUp
        logInSignUpPosition="unset"
        buttonBackgroundColor="#ff1d97"
        loginDisplay="unset"
        buttonCursor="pointer"
        buttonBorder="none"
        labelDisplay="unset"
      />
    </div>
  );
});

export default HeaderWeb1;
