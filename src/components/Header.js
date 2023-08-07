import { memo } from "react";
import "./Header.css";
const Header = memo(() => {
  return (
    <a className="logo">
      <img className="union-icon" alt="" src="/union.svg" />
    </a>
  );
});

export default Header;
