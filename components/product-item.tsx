import type { NextPage } from "next";

export type ProductItemType = {
  className?: string;
  image?: string;
  productName?: string;
  description?: string;
  price?: string;
};

const ProductItem: NextPage<ProductItemType> = ({
  className = "",
  image,
  productName = "Gran Reserva Vinegar",
  description = "Arvum",
  price = "31,51 €",
}) => {
  return (
    <div
      className={`rounded-3xs bg-color-white-100 flex flex-col items-center justify-center py-5 px-[15px] box-border gap-[18px] text-center text-base text-gray font-poppins flex-1 ${className}`}
    >
      <img
        className="w-[95px] relative h-[200px] object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          <div className="self-stretch relative leading-[20px] font-semibold inline-block h-[23px] shrink-0">
            {productName}
          </div>
          <i className="self-stretch relative inline-block h-5 shrink-0">
            {description}
          </i>
        </div>
        <div className="self-stretch relative text-5xl font-semibold text-color-green-200 inline-block h-[30px] shrink-0">
          {price}
        </div>
      </div>
      <div className="w-full rounded-3xs box-border h-[50px] flex flex-row items-end justify-start py-2.5 px-6 gap-[10px] max-w-[190px] text-left text-lg text-color-green-200 border-[1px] border-solid border-color-green-200">
        <img
          className="w-[29px] relative h-[29px] object-cover"
          alt=""
          src="/iconfinder-00elastofontstoreready-bag-2703085-2-1@2x.png"
        />
        <div className="relative font-medium">Add to cart</div>
      </div>
    </div>
  );
};

export default ProductItem;
