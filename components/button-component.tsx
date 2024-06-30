import type { NextPage } from "next";
import { memo } from "react";

export type ButtonComponentType = {
  className?: string;
};

const ButtonComponent: NextPage<ButtonComponentType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[30px] text-center text-base text-white font-inter ${className}`}
      >
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-3xs bg-powderblue h-[45px] flex flex-row items-center justify-center">
            <div className="relative leading-[35px] font-semibold">
              Create Account
            </div>
          </div>
          <div className="w-[400px] rounded-3xs bg-lightseagreen h-[45px] hidden flex-row items-center justify-center">
            <div className="relative leading-[35px] font-semibold">
              Create Account
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[7px] text-left text-darkgray">
          <div className="relative leading-[35px]">{`Already have an account? `}</div>
          <div className="relative leading-[35px] text-forestgreen">Log in</div>
        </div>
      </div>
    );
  },
);

export default ButtonComponent;
