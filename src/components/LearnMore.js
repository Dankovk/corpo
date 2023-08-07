import { memo } from "react";
import "./LearnMore.css";
const LearnMore = memo(() => {
  return (
    <div className="learn-more1">
      <div className="h42">Want to learn more?</div>
      <div className="text2">
        <span className="join-our">{`Join our `}</span>
        <span className="discord">discord</span>
        <span className="join-our">{` or check out our `}</span>
        <span className="discord">documentation</span>
      </div>
    </div>
  );
});

export default LearnMore;
