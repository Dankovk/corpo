import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type PriorityPrimarySizeMTypeType = {
  label?: string;
  showPriorityPrimarySizeMType?: boolean;

  /** Style props */
  priorityPrimarySizeMTypePosition?: Property.Position;
  priorityPrimarySizeMTypeBorderRadius?: Property.BorderRadius;
  priorityPrimarySizeMTypeBackgroundColor?: Property.BackgroundColor;
  priorityPrimarySizeMTypePadding?: Property.Padding;
  priorityPrimarySizeMTypeHeight?: Property.Height;
  labelLineHeight?: Property.LineHeight;
  labelWidth?: Property.Width;
  labelFlexShrink?: Property.FlexShrink;
};

const PriorityPrimarySizeMType: FunctionComponent<PriorityPrimarySizeMTypeType> =
  memo(
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
      const priorityPrimarySizeMTypeStyle: CSS.Properties = useMemo(() => {
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

      const labelStyle: CSS.Properties = useMemo(() => {
        return {
          lineHeight: labelLineHeight,
          width: labelWidth,
          flexShrink: labelFlexShrink,
        };
      }, [labelLineHeight, labelWidth, labelFlexShrink]);

      return (
        showPriorityPrimarySizeMType && (
          <div
            className="relative rounded-lg bg-shades-2 shadow-[0px_2px_4px_-1px_#858293] overflow-hidden flex flex-row py-2 px-3 items-center justify-center text-center text-xs text-shades-white font-desktop-h-4-semibold"
            style={priorityPrimarySizeMTypeStyle}
          >
            <div
              className="relative tracking-[0.02em] leading-[16px] uppercase font-medium"
              style={labelStyle}
            >
              {label}
            </div>
          </div>
        )
      );
    }
  );

export default PriorityPrimarySizeMType;
