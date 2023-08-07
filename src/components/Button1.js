import { memo } from "react";
import "./Button1.css";
const Button1 = memo(() => {
  return (
    <button className="button" style={buttonStyle}>
      <div className="label4" style={labelStyle}>
        Get started
      </div>
    </button>
  );
});

export default Button1;
