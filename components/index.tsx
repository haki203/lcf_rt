import type { NextPage } from "next";
import HeaderContainer from "./header-container";
import Description from "./description";
import ProductContainer from "./product-container";
import Footer from "./footer";

export type HomePluginType = {
  className?: string;
};

const HomePlugin: NextPage<HomePluginType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1151px] max-w-full flex flex-col items-start justify-start ${className}`}
    >
      <HeaderContainer />
      <Description />
      <ProductContainer />
      <Footer />
    </div>
  );
};

export default HomePlugin;
