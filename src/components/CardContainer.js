import { memo, useMemo } from "react";
import "./CardContainer.css";
const CardContainer = memo(({ arDescription, propPadding }) => {
  const heading3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="divtoggle">
      <div className="heading-37" style={heading3Style}>
        <div className="link-what">{arDescription}</div>
        <div className="iicon-plus-sign">
          <div className="pseudo3" />
          <div className="pseudo4" />
        </div>
      </div>
    </div>
  );
});

export default CardContainer;
