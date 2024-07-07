import type { NextPage } from "next";
import { memo } from "react";

export type HeaderContainerType = {
  className?: string;
};

const HeaderContainer: NextPage<HeaderContainerType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`self-stretch bg-color-white-100 flex flex-row items-center justify-start py-5 px-[50px] gap-[70px] text-center text-lg text-gray font-poppins ${className}`}
      >
        <img
          className="w-[61px] relative h-14 object-cover"
          alt=""
          src="/preview-1@2x.png"
        />
        <div className="flex-1 flex flex-row items-center justify-center gap-[10px]">
          <div className="flex-1 relative font-medium inline-block max-w-[100px]">
            Our Shop
          </div>
          <div className="flex-1 relative font-medium inline-block max-w-[100px]">
            Blog
          </div>
          <div className="flex-1 relative font-medium inline-block max-w-[100px]">
            Recipes
          </div>
          <div className="flex-1 relative font-medium inline-block max-w-[100px]">
            About Us
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[44px] max-w-[259px] text-left text-color-green-200">
          <div className="flex flex-row items-center justify-start gap-[26px]">
            <img
              className="w-[29px] relative h-[29px] object-cover"
              alt=""
              src="/search-1-1@2x.png"
            />
            <div className="w-px relative box-border h-10 border-r-[1px] border-solid border-darkgray" />
            <img
              className="w-[25px] relative h-[27px] object-cover"
              alt=""
              src="/vector-1-1@2x.png"
            />
          </div>
          <div className="w-[109px] rounded-3xs box-border flex flex-row items-center justify-center py-2.5 px-4 border-[1px] border-solid border-color-green-200">
            <div className="relative">Login</div>
          </div>
        </div>
      </div>
    );
  },
);

export default HeaderContainer;
