import type { NextPage } from "next";
import { memo } from "react";
import CreateSocial from "./create-social";
import InputLogin from "./input-login";
import ButtonComponent from "./button-component";

export type LoginRightType = {
  className?: string;
};

const LoginRight: NextPage<LoginRightType> = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[430px] flex flex-col items-start justify-start gap-[40px] max-w-[430px] text-left text-5xl text-dimgray-200 font-inter ${className}`}
    >
      <CreateSocial />
      <InputLogin />
      <ButtonComponent />
    </div>
  );
});

export default LoginRight;
