import { memo, useMemo } from "react";
import PriorityPrimarySizeLType from "./PriorityPrimarySizeLType";
import "./AlignmentCentered.css";
const AlignmentCentered = memo(
  ({
    title,
    text,
    alignmentCenteredPosition,
    alignmentCenteredWidth,
    alignmentCenteredZIndex,
    buttonBorderRadius,
    buttonBackgroundColor,
    buttonBoxShadow,
    buttonOverflow,
    buttonDisplay,
    buttonFlexDirection,
    buttonPadding,
    buttonBoxSizing,
    buttonAlignItems,
    buttonJustifyContent,
    buttonMarginBlockStart,
    buttonMarginBlockEnd,
    labelPosition,
    labelFontSize,
    labelLetterSpacing,
    labelLineHeight,
    labelTextTransform,
    labelFontWeight,
    labelFontFamily,
    labelColor,
    labelTextAlign,
    labelDisplay,
  }) => {
    const alignmentCenteredStyle = useMemo(() => {
      return {
        position: alignmentCenteredPosition,
        width: alignmentCenteredWidth,
        zIndex: alignmentCenteredZIndex,
      };
    }, [
      alignmentCenteredPosition,
      alignmentCenteredWidth,
      alignmentCenteredZIndex,
    ]);

    const priorityPrimarySizeLTypeStyle = useMemo(() => {
      return {
        borderRadius: buttonBorderRadius,
        backgroundColor: buttonBackgroundColor,
        boxShadow: buttonBoxShadow,
        overflow: buttonOverflow,
        display: buttonDisplay,
        flexDirection: buttonFlexDirection,
        padding: buttonPadding,
        boxSizing: buttonBoxSizing,
        alignItems: buttonAlignItems,
        justifyContent: buttonJustifyContent,
        marginBlockStart: buttonMarginBlockStart,
        marginBlockEnd: buttonMarginBlockEnd,
      };
    }, [
      buttonBorderRadius,
      buttonBackgroundColor,
      buttonBoxShadow,
      buttonOverflow,
      buttonDisplay,
      buttonFlexDirection,
      buttonPadding,
      buttonBoxSizing,
      buttonAlignItems,
      buttonJustifyContent,
      buttonMarginBlockStart,
      buttonMarginBlockEnd,
    ]);

    const labelStyle = useMemo(() => {
      return {
        position: labelPosition,
        fontSize: labelFontSize,
        letterSpacing: labelLetterSpacing,
        lineHeight: labelLineHeight,
        textTransform: labelTextTransform,
        fontWeight: labelFontWeight,
        fontFamily: labelFontFamily,
        color: labelColor,
        textAlign: labelTextAlign,
        display: labelDisplay,
      };
    }, [
      labelPosition,
      labelFontSize,
      labelLetterSpacing,
      labelLineHeight,
      labelTextTransform,
      labelFontWeight,
      labelFontFamily,
      labelColor,
      labelTextAlign,
      labelDisplay,
    ]);

    return (
      <div className="alignmentcentered" style={alignmentCenteredStyle}>
        <div className="text-box">
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </div>
        <PriorityPrimarySizeLType
          label="Call to action"
          priorityPrimarySizeLTypePosition="unset"
          priorityPrimarySizeLTypeBoxSizing="border-box"
          priorityPrimarySizeLTypeCursor="unset"
          priorityPrimarySizeLTypeBorder="unset"
          priorityPrimarySizeLTypeBackgroundColor="#3e3b46"
          priorityPrimarySizeLTypePadding="var(--padding-xs) var(--padding-base)"
          priorityPrimarySizeLTypeHeight="unset"
          priorityPrimarySizeLTypeBorderRadius="8px"
          labelDisplay="inline-block"
          labelLineHeight="16px"
        />
      </div>
    );
  }
);

export default AlignmentCentered;
