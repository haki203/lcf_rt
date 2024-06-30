import type { NextPage } from "next";
import LeftContainer from "./left-container";
import RightContainer from "./right-container";
import LanguageOptions from "./language-options";

export type LoginPluginType = {
  className?: string;
};

const LoginPlugin: NextPage<LoginPluginType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1144px] bg-lightblue max-w-full flex flex-row items-start justify-center relative ${className}`}
    >
      <LeftContainer />
      <RightContainer />
      <LanguageOptions />
    </div>
  );
};

export default LoginPlugin;
