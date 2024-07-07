import type { NextPage } from "next";
import { memo } from "react";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-color-green-200 flex flex-row items-start justify-between py-[45px] px-[50px] text-left text-sm text-color-white-100 font-poppins md:pl-2.5 md:pr-2.5 md:box-border ${className}`}
    >
      <div className="w-[267.3px] flex flex-col items-center justify-start">
        <div className="h-[155px] flex flex-col items-center justify-start gap-[20px]">
          <div className="self-stretch relative font-semibold">General</div>
          <div className="self-stretch relative">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              About Us
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Our Shop
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Recipes
            </p>
            <p className="m-0">Blog</p>
          </div>
        </div>
      </div>
      <div className="w-[267.3px] flex flex-col items-center justify-start">
        <div className="h-[93px] flex flex-col items-center justify-start gap-[20px]">
          <div className="self-stretch relative font-semibold">Webshop</div>
          <div className="self-stretch relative">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Delivery Information
            </p>
            <p className="m-0">{`Returns & Cancellations`}</p>
          </div>
        </div>
      </div>
      <div className="w-[267.3px] flex flex-col items-center justify-start">
        <div className="h-[155px] flex flex-col items-center justify-start gap-[20px]">
          <div className="self-stretch relative font-semibold">Legal</div>
          <div className="self-stretch relative">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Terms of Use
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Terms of Purchase
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Privacy Policy
            </p>
            <p className="m-0">Modern Slavery Policy</p>
          </div>
        </div>
      </div>
      <div className="w-[267.3px] flex flex-col items-center justify-center">
        <div className="h-[155px] flex flex-col items-center justify-start gap-[20px]">
          <div className="self-stretch relative font-semibold">Contact</div>
          <div className="self-stretch relative">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Facebook
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Twitter
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Instagram
            </p>
            <p className="m-0">Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
