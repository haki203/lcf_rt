import type { NextPage } from "next";
import { memo } from "react";

export type CreateSocialType = {
  className?: string;
};

const CreateSocial: NextPage<CreateSocialType> = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[30px] text-left text-5xl text-dimgray-200 font-inter ${className}`}
    >
      <b className="self-stretch relative tracking-[0.08em] leading-[35px] mix-blend-normal">
        Create Account
      </b>
      <div className="self-stretch h-[42px] flex flex-row items-center justify-center gap-[10px] text-xs">
        <div className="rounded-3xs flex flex-row items-center justify-start p-2.5 gap-[17px] border-[1px] border-solid border-gainsboro">
          <img
            className="w-[22px] relative h-[22px] object-cover"
            alt=""
            src="/icongg@2x.png"
          />
          <div className="relative">Sign up with Google</div>
        </div>
        <div className="rounded-3xs flex flex-row items-center justify-start p-2.5 gap-[17px] border-[1px] border-solid border-gainsboro">
          <img
            className="w-[22px] relative h-[22px] object-cover"
            alt=""
            src="/iconfb@2x.png"
          />
          <div className="relative">Sign up with Facebook</div>
        </div>
      </div>
    </div>
  );
});

export default CreateSocial;
