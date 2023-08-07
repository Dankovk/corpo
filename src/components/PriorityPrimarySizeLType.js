import { memo, useMemo } from "react";
import "./PriorityPrimarySizeLType.css";
const PriorityPrimarySizeLType = memo(
  ({
    label,
    priorityPrimarySizeLTypePosition,
    priorityPrimarySizeLTypeBoxSizing,
    priorityPrimarySizeLTypeCursor,
    priorityPrimarySizeLTypeBorder,
    priorityPrimarySizeLTypeBackgroundColor,
    priorityPrimarySizeLTypePadding,
    priorityPrimarySizeLTypeHeight,
    priorityPrimarySizeLTypeBorderRadius,
    labelDisplay,
    labelLineHeight,
  }) => {
    const priorityPrimarySizeLTypeStyle = useMemo(() => {
      return {
        position: priorityPrimarySizeLTypePosition,
        boxSizing: priorityPrimarySizeLTypeBoxSizing,
        cursor: priorityPrimarySizeLTypeCursor,
        border: priorityPrimarySizeLTypeBorder,
        backgroundColor: priorityPrimarySizeLTypeBackgroundColor,
        padding: priorityPrimarySizeLTypePadding,
        height: priorityPrimarySizeLTypeHeight,
        borderRadius: priorityPrimarySizeLTypeBorderRadius,
      };
    }, [
      priorityPrimarySizeLTypePosition,
      priorityPrimarySizeLTypeBoxSizing,
      priorityPrimarySizeLTypeCursor,
      priorityPrimarySizeLTypeBorder,
      priorityPrimarySizeLTypeBackgroundColor,
      priorityPrimarySizeLTypePadding,
      priorityPrimarySizeLTypeHeight,
      priorityPrimarySizeLTypeBorderRadius,
    ]);

    const labelStyle = useMemo(() => {
      return {
        display: labelDisplay,
        lineHeight: labelLineHeight,
      };
    }, [labelDisplay, labelLineHeight]);

    return (
      <div
        className="priorityprimary-sizel-type"
        style={priorityPrimarySizeLTypeStyle}
      >
        <div className="label1" style={labelStyle}>
          {label}
        </div>
      </div>
    );
  }
);

export default PriorityPrimarySizeLType;
