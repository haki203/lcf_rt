import type { NextPage } from "next";
import { memo } from "react";

export type LeftContainerType = {
  className?: string;
};

const LeftContainer: NextPage<LeftContainerType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`flex-1 h-full flex flex-col items-start justify-start pt-2.5 px-2.5 pb-5 box-border gap-[40px] max-w-[450px] z-[0] text-left text-5xl text-white font-inter ${className}`}
      >
        <img
          className="w-[61px] relative h-14 object-cover"
          alt=""
          src="/preview-1@2x.png"
        />
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
          <div className="flex-1 relative [text-shadow:1px_0_0_rgba(255,_255,_255,_0),_0_1px_0_rgba(255,_255,_255,_0),_-1px_0_0_rgba(255,_255,_255,_0),_0_-1px_0_rgba(255,_255,_255,_0)]">
            <p className="text-9xl [margin-block-start:0] [margin-block-end:15px]">
              Revive Your Plants Today
            </p>
            <p className="m-0 text-xl tracking-[0.08em] font-medium">
              Discover Plantscare's Effective Treatments. Shop Now and Watch
              Your Garden Blossom
            </p>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src="/5203246-1@2x.png"
        />
      </div>
    );
  },
);

export default LeftContainer;
