import { memo, useMemo } from "react";
import PriorityPrimarySizeLType from "./PriorityPrimarySizeLType";
import "./AlignmentCentered1.css";
const AlignmentCentered1 = memo(
  ({
    h1,
    h4,
    alignmentCenteredPosition,
    h1Background,
    buttonBoxSizing,
    buttonCursor,
    buttonBorder,
    labelDisplay,
  }) => {
    const alignmentCentered1Style = useMemo(() => {
      return {
        position: alignmentCenteredPosition,
      };
    }, [alignmentCenteredPosition]);

    const h1Style = useMemo(() => {
      return {
        background: h1Background,
      };
    }, [h1Background]);

    const priorityPrimarySizeLTypeStyle = useMemo(() => {
      return {
        boxSizing: buttonBoxSizing,
        cursor: buttonCursor,
        border: buttonBorder,
      };
    }, [buttonBoxSizing, buttonCursor, buttonBorder]);

    const labelStyle = useMemo(() => {
      return {
        display: labelDisplay,
      };
    }, [labelDisplay]);

    return (
      <div className="alignmentcentered1" style={alignmentCentered1Style}>
        <div className="hero-title">
          <div className="h1" style={h1Style}>
            {h1}
          </div>
          <div className="h4">{h4}</div>
        </div>
        <PriorityPrimarySizeLType
          label="Get started today"
          priorityPrimarySizeLTypePosition="unset"
          priorityPrimarySizeLTypeBoxSizing="border-box"
          priorityPrimarySizeLTypeCursor="unset"
          priorityPrimarySizeLTypeBorder="unset"
          priorityPrimarySizeLTypeBackgroundColor="#211b2e"
          priorityPrimarySizeLTypePadding="var(--padding-xs) var(--padding-5xl)"
          priorityPrimarySizeLTypeHeight="unset"
          priorityPrimarySizeLTypeBorderRadius="12px"
          labelDisplay="inline-block"
          labelLineHeight="24px"
        />
      </div>
    );
  }
);

export default AlignmentCentered1;
