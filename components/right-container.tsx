import type { NextPage } from "next";
import { memo } from "react";
import LoginRight from "./login-right";

export type RightContainerType = {
  className?: string;
};

const RightContainer: NextPage<RightContainerType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`self-stretch flex-1 rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-white flex flex-row items-center justify-center z-[1] text-left text-5xl text-dimgray-200 font-inter ${className}`}
      >
        <LoginRight />
      </div>
    );
  },
);

export default RightContainer;
