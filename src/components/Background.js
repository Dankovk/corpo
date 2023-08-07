import { memo } from "react";
import "./Background.css";
const Background = memo(() => {
  return (
    <div className="background">
      <img className="img-icon" alt="" src="/img@2x.png" />
      <img className="img-icon1" alt="" src="/img1@2x.png" />
      <img className="img-icon2" alt="" src="/img2@2x.png" />
    </div>
  );
});

export default Background;
