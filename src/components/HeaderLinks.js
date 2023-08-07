import { memo, useMemo } from "react";
import "./HeaderLinks.css";
const HeaderLinks = memo(
  ({
    link,
    link1,
    headerLinksPosition,
    builderTextDecoration,
    sDKColor,
    sDKTextDecoration,
    pricingTextDecoration,
    showcaseTextDecoration,
    blogTextDecoration,
    pressTextDecoration,
  }) => {
    const headerLinksStyle = useMemo(() => {
      return {
        position: headerLinksPosition,
      };
    }, [headerLinksPosition]);

    const builderStyle = useMemo(() => {
      return {
        textDecoration: builderTextDecoration,
      };
    }, [builderTextDecoration]);

    const sDKStyle = useMemo(() => {
      return {
        color: sDKColor,
        textDecoration: sDKTextDecoration,
      };
    }, [sDKColor, sDKTextDecoration]);

    const pricingStyle = useMemo(() => {
      return {
        textDecoration: pricingTextDecoration,
      };
    }, [pricingTextDecoration]);

    const showcaseStyle = useMemo(() => {
      return {
        textDecoration: showcaseTextDecoration,
      };
    }, [showcaseTextDecoration]);

    const blogStyle = useMemo(() => {
      return {
        textDecoration: blogTextDecoration,
      };
    }, [blogTextDecoration]);

    const pressStyle = useMemo(() => {
      return {
        textDecoration: pressTextDecoration,
      };
    }, [pressTextDecoration]);

    return (
      <div className="header-links" style={headerLinksStyle}>
        <div className="builder" style={builderStyle}>
          Builder
        </div>
        <div className="builder" style={sDKStyle}>
          SDK
        </div>
        <div className="builder" style={pricingStyle}>
          Pricing
        </div>
        <div className="builder" style={showcaseStyle}>
          Showcase
        </div>
        <div className="builder" style={blogStyle}>
          Blog
        </div>
        <div className="builder" style={pressStyle}>
          Press
        </div>
        {!link && <div className="link3">link</div>}
        {!link1 && <div className="link3">link</div>}
      </div>
    );
  }
);

export default HeaderLinks;
