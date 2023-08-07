import { memo, useMemo } from "react";
import "./PriorityPrimarySizeMType.css";
const PriorityPrimarySizeMType = memo(
  ({
    label,
    showPriorityPrimarySizeMType,
    priorityPrimarySizeMTypePosition,
    priorityPrimarySizeMTypeBorderRadius,
    priorityPrimarySizeMTypeBackgroundColor,
    priorityPrimarySizeMTypePadding,
    priorityPrimarySizeMTypeHeight,
    labelLineHeight,
    labelWidth,
    labelFlexShrink,
  }) => {
    const priorityPrimarySizeMTypeStyle = useMemo(() => {
      return {
        position: priorityPrimarySizeMTypePosition,
        borderRadius: priorityPrimarySizeMTypeBorderRadius,
        backgroundColor: priorityPrimarySizeMTypeBackgroundColor,
        padding: priorityPrimarySizeMTypePadding,
        height: priorityPrimarySizeMTypeHeight,
      };
    }, [
      priorityPrimarySizeMTypePosition,
      priorityPrimarySizeMTypeBorderRadius,
      priorityPrimarySizeMTypeBackgroundColor,
      priorityPrimarySizeMTypePadding,
      priorityPrimarySizeMTypeHeight,
    ]);

    const label1Style = useMemo(() => {
      return {
        lineHeight: labelLineHeight,
        width: labelWidth,
        flexShrink: labelFlexShrink,
      };
    }, [labelLineHeight, labelWidth, labelFlexShrink]);

    return (
      showPriorityPrimarySizeMType && (
        <div
          className="priorityprimary-sizem-type"
          style={priorityPrimarySizeMTypeStyle}
        >
          <div className="label3" style={label1Style}>
            {label}
          </div>
        </div>
      )
    );
  }
);

export default PriorityPrimarySizeMType;
