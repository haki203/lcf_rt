import type { NextPage } from "next";
import { memo } from "react";

export type DescriptionType = {
  className?: string;
};

const Description: NextPage<DescriptionType> = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[600px] flex flex-col items-start justify-center py-0 pr-0 pl-[50px] box-border bg-[url('/description@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-29xl text-color-white-100 font-poppins ${className}`}
    >
      <div className="w-[570px] flex flex-col items-start justify-start gap-[35px] md:gap-[25px] md:items-start md:justify-center">
        <div className="w-[570px] relative h-[104px]">
          <div className="absolute top-[0px] left-[0px] w-[570px] flex flex-col items-start justify-start gap-[5px]">
            <b className="self-stretch relative md:text-21xl">
              Organic Food Store
            </b>
            <div className="self-stretch relative text-lg font-medium">
              Current delivery lead times are between 5-7 working days
            </div>
          </div>
        </div>
        <div className="w-[130px] box-border h-[50px] flex flex-row items-center justify-center py-[13px] px-5 min-w-[130px] text-base border-[1px] border-solid border-color-white-100">
          <div className="flex-1 relative font-semibold">Shop now</div>
        </div>
      </div>
    </div>
  );
});

export default Description;
