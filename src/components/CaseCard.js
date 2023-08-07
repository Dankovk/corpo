import { memo, useMemo } from "react";
import StateNormal from "./StateNormal";
import StateNormalAlt from "./StateNormalAlt";
import "./CaseCard.css";
const CaseCard = memo(
  ({
    coverImg,
    title,
    voxelSnoopBecomesADigital,
    dancePartner,
    share1,
    link,
    icon24pxActionsCopyFat,
    icon24pxDownloadSimpleFat,
    qR,
    share,
    caseCardWidth,
    caseCardFlex,
    coverImgIconWidth,
    coverImgIconAlignSelf,
    coverImgIconMaxWidth,
    coverImgIconOverflow,
    coverImgIconFlexShrink,
    contentAlignSelf,
    aboutWidth,
    aboutAlignSelf,
    actionsAlignSelf,
    shareFlex,
    linkLineHeight,
    linkTextDecoration,
    contentHeight,
    voxelSnoopBecomesMarginBlockStart,
    voxelSnoopBecomesMarginBlockEnd,
    voxelSnoopBecomesDisplay,
    voxelSnoopBecomesFlexDirection,
    voxelSnoopBecomesAlignItems,
    voxelSnoopBecomesJustifyContent,
    voxelSnoopBecomesGap,
    voxelSnoopBecomesAlignSelf,
    dancePartnerMargin,
    dancePartnerDisplay,
    dancePartnerFlexDirection,
    dancePartnerAlignItems,
    dancePartnerJustifyContent,
    dancePartnerGap,
    actionsDisplay,
    actionsFlexDirection,
    actionsAlignItems,
    actionsJustifyContent,
    actionsGap,
    actionsPosition,
    actionsFontSize,
    actionsTextDecoration,
    actionsLineHeight,
    actionsFontWeight,
    actionsFontFamily,
    actionsColor,
    actionsTextAlign,
    sharePosition,
    shareFontSize,
    shareLineHeight,
    shareFontWeight,
    shareFontFamily,
    shareColor,
    shareTextAlign,
    shareBorderRadius,
    shareBackgroundColor,
    shareFlexDirection,
    sharePadding,
    shareBoxSizing,
    shareAlignItems,
    shareJustifyContent,
    actionsDisplay1,
    actionsFlexDirection1,
    actionsAlignItems1,
    actionsJustifyContent1,
    actionsGap1,
    actionsPosition1,
    actionsWidth,
    actionsHeight,
    actionsOverflow,
    actionsFlexShrink,
    linkPosition,
    linkFontSize,
    linkFontWeight,
    linkFontFamily,
    linkColor,
    linkTextAlign,
    linkDisplay,
    linkBorderRadius,
    linkBackgroundColor,
    linkFlexDirection,
    linkPadding,
    linkBoxSizing,
    linkAlignItems,
    linkJustifyContent,
    actionBoxSizing,
    actionBorderRadius,
    actionBackgroundColor,
    actionDisplay,
    actionFlexDirection,
    actionPadding,
    actionAlignItems,
    actionJustifyContent,
    actionPosition,
    actionWidth,
    actionHeight,
    actionOverflow,
    actionFlexShrink,
    icon24pxActionsCopyFatWidth,
    icon24pxActionsCopyFatHeight,
    icon24pxActionsCopyFatOverflow,
    icon24pxActionsCopyFatFlexShrink,
    icon24pxActionsCopyFatObjectFit,
    actionBoxSizing1,
  }) => {
    const caseCardStyle = useMemo(() => {
      return {
        width: caseCardWidth,
        flex: caseCardFlex,
      };
    }, [caseCardWidth, caseCardFlex]);

    const coverImgIconStyle = useMemo(() => {
      return {
        width: coverImgIconWidth,
        alignSelf: coverImgIconAlignSelf,
        maxWidth: coverImgIconMaxWidth,
        overflow: coverImgIconOverflow,
        flexShrink: coverImgIconFlexShrink,
      };
    }, [
      coverImgIconWidth,
      coverImgIconAlignSelf,
      coverImgIconMaxWidth,
      coverImgIconOverflow,
      coverImgIconFlexShrink,
    ]);

    const contentStyle = useMemo(() => {
      return {
        alignSelf: contentAlignSelf,
        height: contentHeight,
      };
    }, [contentAlignSelf, contentHeight]);

    const aboutStyle = useMemo(() => {
      return {
        width: aboutWidth,
        alignSelf: aboutAlignSelf,
      };
    }, [aboutWidth, aboutAlignSelf]);

    const actionsStyle = useMemo(() => {
      return {
        alignSelf: actionsAlignSelf,
        display: actionsDisplay,
        flexDirection: actionsFlexDirection,
        alignItems: actionsAlignItems,
        justifyContent: actionsJustifyContent,
        gap: actionsGap,
        position: actionsPosition,
        fontSize: actionsFontSize,
        textDecoration: actionsTextDecoration,
        lineHeight: actionsLineHeight,
        fontWeight: actionsFontWeight,
        fontFamily: actionsFontFamily,
        color: actionsColor,
        textAlign: actionsTextAlign,
      };
    }, [
      actionsAlignSelf,
      actionsDisplay,
      actionsFlexDirection,
      actionsAlignItems,
      actionsJustifyContent,
      actionsGap,
      actionsPosition,
      actionsFontSize,
      actionsTextDecoration,
      actionsLineHeight,
      actionsFontWeight,
      actionsFontFamily,
      actionsColor,
      actionsTextAlign,
    ]);

    const shareStyle = useMemo(() => {
      return {
        flex: shareFlex,
        position: sharePosition,
        fontSize: shareFontSize,
        lineHeight: shareLineHeight,
        fontWeight: shareFontWeight,
        fontFamily: shareFontFamily,
        color: shareColor,
        textAlign: shareTextAlign,
        borderRadius: shareBorderRadius,
        backgroundColor: shareBackgroundColor,
        flexDirection: shareFlexDirection,
        padding: sharePadding,
        boxSizing: shareBoxSizing,
        alignItems: shareAlignItems,
        justifyContent: shareJustifyContent,
      };
    }, [
      shareFlex,
      sharePosition,
      shareFontSize,
      shareLineHeight,
      shareFontWeight,
      shareFontFamily,
      shareColor,
      shareTextAlign,
      shareBorderRadius,
      shareBackgroundColor,
      shareFlexDirection,
      sharePadding,
      shareBoxSizing,
      shareAlignItems,
      shareJustifyContent,
    ]);

    const linkStyle = useMemo(() => {
      return {
        lineHeight: linkLineHeight,
        textDecoration: linkTextDecoration,
        position: linkPosition,
        fontSize: linkFontSize,
        fontWeight: linkFontWeight,
        fontFamily: linkFontFamily,
        color: linkColor,
        textAlign: linkTextAlign,
        display: linkDisplay,
        borderRadius: linkBorderRadius,
        backgroundColor: linkBackgroundColor,
        flexDirection: linkFlexDirection,
        padding: linkPadding,
        boxSizing: linkBoxSizing,
        alignItems: linkAlignItems,
        justifyContent: linkJustifyContent,
      };
    }, [
      linkLineHeight,
      linkTextDecoration,
      linkPosition,
      linkFontSize,
      linkFontWeight,
      linkFontFamily,
      linkColor,
      linkTextAlign,
      linkDisplay,
      linkBorderRadius,
      linkBackgroundColor,
      linkFlexDirection,
      linkPadding,
      linkBoxSizing,
      linkAlignItems,
      linkJustifyContent,
    ]);

    const voxelSnoopBecomesStyle = useMemo(() => {
      return {
        marginBlockStart: voxelSnoopBecomesMarginBlockStart,
        marginBlockEnd: voxelSnoopBecomesMarginBlockEnd,
        display: voxelSnoopBecomesDisplay,
        flexDirection: voxelSnoopBecomesFlexDirection,
        alignItems: voxelSnoopBecomesAlignItems,
        justifyContent: voxelSnoopBecomesJustifyContent,
        gap: voxelSnoopBecomesGap,
        alignSelf: voxelSnoopBecomesAlignSelf,
      };
    }, [
      voxelSnoopBecomesMarginBlockStart,
      voxelSnoopBecomesMarginBlockEnd,
      voxelSnoopBecomesDisplay,
      voxelSnoopBecomesFlexDirection,
      voxelSnoopBecomesAlignItems,
      voxelSnoopBecomesJustifyContent,
      voxelSnoopBecomesGap,
      voxelSnoopBecomesAlignSelf,
    ]);

    const dancePartnerStyle = useMemo(() => {
      return {
        margin: dancePartnerMargin,
        display: dancePartnerDisplay,
        flexDirection: dancePartnerFlexDirection,
        alignItems: dancePartnerAlignItems,
        justifyContent: dancePartnerJustifyContent,
        gap: dancePartnerGap,
      };
    }, [
      dancePartnerMargin,
      dancePartnerDisplay,
      dancePartnerFlexDirection,
      dancePartnerAlignItems,
      dancePartnerJustifyContent,
      dancePartnerGap,
    ]);

    const actions1Style = useMemo(() => {
      return {
        display: actionsDisplay1,
        flexDirection: actionsFlexDirection1,
        alignItems: actionsAlignItems1,
        justifyContent: actionsJustifyContent1,
        gap: actionsGap1,
        position: actionsPosition1,
        width: actionsWidth,
        height: actionsHeight,
        overflow: actionsOverflow,
        flexShrink: actionsFlexShrink,
      };
    }, [
      actionsDisplay1,
      actionsFlexDirection1,
      actionsAlignItems1,
      actionsJustifyContent1,
      actionsGap1,
      actionsPosition1,
      actionsWidth,
      actionsHeight,
      actionsOverflow,
      actionsFlexShrink,
    ]);

    const stateNormalAltStyle = useMemo(() => {
      return {
        boxSizing: actionBoxSizing,
        borderRadius: actionBorderRadius,
        backgroundColor: actionBackgroundColor,
        display: actionDisplay,
        flexDirection: actionFlexDirection,
        padding: actionPadding,
        alignItems: actionAlignItems,
        justifyContent: actionJustifyContent,
        position: actionPosition,
        width: actionWidth,
        height: actionHeight,
        overflow: actionOverflow,
        flexShrink: actionFlexShrink,
      };
    }, [
      actionBoxSizing,
      actionBorderRadius,
      actionBackgroundColor,
      actionDisplay,
      actionFlexDirection,
      actionPadding,
      actionAlignItems,
      actionJustifyContent,
      actionPosition,
      actionWidth,
      actionHeight,
      actionOverflow,
      actionFlexShrink,
    ]);

    const icon24pxUserFaceTrackiStyle = useMemo(() => {
      return {
        width: icon24pxActionsCopyFatWidth,
        height: icon24pxActionsCopyFatHeight,
        overflow: icon24pxActionsCopyFatOverflow,
        flexShrink: icon24pxActionsCopyFatFlexShrink,
        objectFit: icon24pxActionsCopyFatObjectFit,
      };
    }, [
      icon24pxActionsCopyFatWidth,
      icon24pxActionsCopyFatHeight,
      icon24pxActionsCopyFatOverflow,
      icon24pxActionsCopyFatFlexShrink,
      icon24pxActionsCopyFatObjectFit,
    ]);

    const stateNormalAltStyle1 = useMemo(() => {
      return {
        boxSizing: actionBoxSizing1,
      };
    }, [actionBoxSizing1]);

    return (
      <div className="case-card" style={caseCardStyle}>
        <StateNormal
          stateNormalPosition="absolute"
          stateNormalWidth="100%"
          stateNormalHeight="100%"
          stateNormalTop="0%"
          stateNormalRight="0%"
          stateNormalBottom="0%"
          stateNormalLeft="0%"
          stateNormalMargin="unset"
          stateNormalFlexShrink="unset"
          stateNormalZIndex="unset"
        />
        <div className="case-content">
          <img
            className="cover-img-icon"
            alt=""
            src={coverImg}
            style={coverImgIconStyle}
          />
          <div className="content" style={contentStyle}>
            <div className="about" style={aboutStyle}>
              <div className="description">
                <div className="title1">{title}</div>
                <div className="text1">
                  <p
                    className="voxel-snoop-becomes"
                    style={voxelSnoopBecomesStyle}
                  >
                    {voxelSnoopBecomesADigital}
                  </p>
                  <p className="dance-partner" style={dancePartnerStyle}>
                    {dancePartner}
                  </p>
                </div>
              </div>
              <div className="actions" style={actionsStyle}>
                {!share && (
                  <div className="share" style={shareStyle}>
                    {share1}
                  </div>
                )}
                <div className="actions1" style={actions1Style}>
                  <div className="link5" style={linkStyle}>
                    {link}
                  </div>
                  <StateNormalAlt
                    icon24pxUserFaceTrackingF="/icon-24px--actions--copy-fat5.svg"
                    stateNormalAltPosition="unset"
                    stateNormalAltBoxSizing="border-box"
                  />
                  <StateNormalAlt
                    icon24pxUserFaceTrackingF="/icon-24px--download--simple-fat5.svg"
                    stateNormalAltPosition="unset"
                    stateNormalAltBoxSizing="border-box"
                  />
                </div>
              </div>
            </div>
            <img className="qr-icon" alt="" src={qR} />
          </div>
        </div>
      </div>
    );
  }
);

export default CaseCard;
