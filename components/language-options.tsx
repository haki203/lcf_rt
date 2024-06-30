import type { NextPage } from "next";
import { memo } from "react";

export type LanguageOptionsType = {
  className?: string;
};

const LanguageOptions: NextPage<LanguageOptionsType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`w-[136.4px] !m-[0] absolute top-[0px] right-[0px] flex flex-row items-center justify-start py-[15px] px-[5px] box-border gap-[8px] z-[2] text-justify text-mini text-dimgray-100 font-inter ${className}`}
      >
        <div className="relative font-light">English (UK)</div>
        <img
          className="w-[11px] relative h-[6.5px] object-cover"
          alt=""
          src="/polygon-1-1@2x.png"
        />
      </div>
    );
  },
);

export default LanguageOptions;
