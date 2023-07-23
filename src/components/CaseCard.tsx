import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type CaseCardType = {
  coverImg?: string;
  icon24pxActionsCopyFat?: string;
  icon24pxDownloadSimpleFat?: string;
  qR?: string;
  share?: boolean;

  /** Style props */
  caseCardWidth?: Property.Width;
  caseCardFlex?: Property.Flex;
  coverImgIconWidth?: Property.Width;
  coverImgIconAlignSelf?: Property.AlignSelf;
  coverImgIconMaxWidth?: Property.MaxWidth;
  coverImgIconOverflow?: Property.Overflow;
  coverImgIconFlexShrink?: Property.FlexShrink;
  contentAlignSelf?: Property.AlignSelf;
  aboutWidth?: Property.Width;
  aboutAlignSelf?: Property.AlignSelf;
  actionsAlignSelf?: Property.AlignSelf;
  shareFlex?: Property.Flex;
  linkLineHeight?: Property.LineHeight;
  linkTextDecoration?: Property.TextDecoration;
};

const CaseCard: FunctionComponent<CaseCardType> = memo(
  ({
    coverImg,
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
  }) => {
    const caseCardStyle: CSS.Properties = useMemo(() => {
      return {
        width: caseCardWidth,
        flex: caseCardFlex,
      };
    }, [caseCardWidth, caseCardFlex]);

    const coverImgIconStyle: CSS.Properties = useMemo(() => {
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

    const contentStyle: CSS.Properties = useMemo(() => {
      return {
        alignSelf: contentAlignSelf,
      };
    }, [contentAlignSelf]);

    const aboutStyle: CSS.Properties = useMemo(() => {
      return {
        width: aboutWidth,
        alignSelf: aboutAlignSelf,
      };
    }, [aboutWidth, aboutAlignSelf]);

    const actionsStyle: CSS.Properties = useMemo(() => {
      return {
        alignSelf: actionsAlignSelf,
      };
    }, [actionsAlignSelf]);

    const shareStyle: CSS.Properties = useMemo(() => {
      return {
        flex: shareFlex,
      };
    }, [shareFlex]);

    const linkStyle: CSS.Properties = useMemo(() => {
      return {
        lineHeight: linkLineHeight,
        textDecoration: linkTextDecoration,
      };
    }, [linkLineHeight, linkTextDecoration]);

    return (
      <div
        className="relative w-[352px] h-[996px] text-center text-xl text-shades-black font-desktop-h-4-semibold"
        style={caseCardStyle}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-white-60 shadow-[0px_8px_32px_-16px_rgba(135,_112,_195,_0.6)] [backdrop-filter:blur(32px)] box-border overflow-hidden border-[1px] border-solid border-white-25" />
        <div className="absolute h-[95.58%] w-[90.91%] top-[1.2%] right-[4.55%] bottom-[3.21%] left-[4.55%] flex flex-col items-center justify-start gap-[24px]">
          <img
            className="relative rounded-lg w-80 h-[520px] object-cover"
            alt=""
            src={coverImg}
            style={coverImgIconStyle}
          />
          <div
            className="flex flex-col items-center justify-start gap-[8px]"
            style={contentStyle}
          >
            <div
              className="w-80 flex flex-col items-center justify-start gap-[16px]"
              style={aboutStyle}
            >
              <div className="self-stretch flex flex-col py-0 px-2 items-start justify-start gap-[8px]">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Sandbox Snoop
                </div>
                <div className="self-stretch relative text-sm leading-[24px] text-shades-2">
                  <p className="[margin-block-start:0] [margin-block-end:8px]">{`Voxel Snoop becomes a digital `}</p>
                  <p className="m-0">dance partner</p>
                </div>
              </div>
              <div
                className="self-stretch flex flex-row items-center justify-center gap-[16px] text-left text-sm"
                style={actionsStyle}
              >
                {!share && (
                  <div
                    className="relative leading-[24px] font-medium hidden"
                    style={shareStyle}
                  >
                    Share experience:
                  </div>
                )}
                <div className="flex flex-row items-center justify-start gap-[12px] text-solid-5">
                  <div
                    className="relative leading-[24px] font-medium"
                    style={linkStyle}
                  >
                    geenee.ar/snoop
                  </div>
                  <div className="rounded bg-shades-white flex flex-row p-1 items-start justify-start">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src={icon24pxActionsCopyFat}
                    />
                  </div>
                  <div className="rounded bg-shades-white flex flex-row p-1 items-start justify-start">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src={icon24pxDownloadSimpleFat}
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative w-[280px] h-[280px] object-cover"
              alt=""
              src={qR}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default CaseCard;
