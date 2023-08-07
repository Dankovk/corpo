import { memo } from "react";
import "./Button.css";
const Button = memo(() => {
  return (
    <button className="button1" style={buttonStyle}>
      <div className="label5" style={labelStyle}>
        Get started today
      </div>
    </button>
  );
});

export default Button;
