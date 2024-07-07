import type { NextPage } from "next";
import { memo } from "react";
import ProductItem from "./product-item";

export type ProductContainerType = {
  className?: string;
};

const ProductContainer: NextPage<ProductContainerType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`self-stretch bg-color-gray-200 flex flex-col items-start justify-start p-[50px] gap-[10px] text-left text-17xl text-gray font-poppins ${className}`}
      >
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <b className="self-stretch relative uppercase inline-block h-10 shrink-0 md:text-11xl">
              Our
            </b>
            <b className="self-stretch relative uppercase inline-block text-color-green-200 h-10 shrink-0 md:text-11xl">
              Products
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-center text-lg text-color-white-100">
          <div className="self-stretch flex flex-row items-start justify-center gap-[35px]">
            <ProductItem
              image="/borraja-z7x8066-3@2x.png"
              productName="Gran Reserva Vinegar"
              description="Arvum"
              price="31,51 €"
            />
            <ProductItem
              image="/borraja-z7x8066-3@2x.png"
              productName="Gran Reserva Vinegar"
              description="Arvum"
              price="31,51 €"
            />
            <ProductItem
              image="/borraja-z7x8066-3@2x.png"
              productName="Gran Reserva Vinegar"
              description="Arvum"
              price="31,51 €"
            />
            <ProductItem
              image="/borraja-z7x8066-3@2x.png"
              productName="Gran Reserva Vinegar"
              description="Arvum"
              price="31,51 €"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[35px]">
            <ProductItem
              image="/borraja-z7x8066-3@2x.png"
              productName="Gran Reserva Vinegar"
              description="Arvum"
              price="31,51 €"
            />
            <ProductItem
              image="/borraja-z7x8066-3@2x.png"
              productName="Gran Reserva Vinegar"
              description="Arvum"
              price="31,51 €"
            />
            <ProductItem
              image="/borraja-z7x8066-3@2x.png"
              productName="Gran Reserva Vinegar"
              description="Arvum"
              price="31,51 €"
            />
            <ProductItem
              image="/borraja-z7x8066-3@2x.png"
              productName="Gran Reserva Vinegar"
              description="Arvum"
              price="31,51 €"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="rounded-mini bg-color-green-200 flex flex-row items-center justify-center py-4 px-5 gap-[7px]">
              <div className="relative font-medium">Shop all products</div>
              <img
                className="w-[21.5px] relative h-[17.5px] object-cover"
                alt=""
                src="/vector-1-18@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default ProductContainer;
