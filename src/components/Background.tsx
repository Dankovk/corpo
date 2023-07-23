import { FunctionComponent, memo } from "react";

const Background: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch my-0 mx-[!important] absolute top-[0px] left-[0px] h-[1736px] flex flex-row flex-wrap p-2.5 box-border items-start justify-start gap-[10px] bg-[url(/public/background@3x.png)] bg-cover bg-no-repeat bg-[top] z-[0]">
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[1680px] object-cover hidden z-[0]"
        alt=""
        src="/img@2x.png"
      />
      <img
        className="flex-1 absolute my-0 mx-[!important] top-[5040px] left-[1440px] max-w-full overflow-hidden h-[1680px] object-cover hidden z-[1]"
        alt=""
        src="/img1@2x.png"
      />
      <img
        className="flex-1 absolute my-0 mx-[!important] top-[1680px] left-[1440px] max-w-full overflow-hidden h-[1680px] object-cover hidden z-[2]"
        alt=""
        src="/img2@2x.png"
      />
    </div>
  );
});

export default Background;
