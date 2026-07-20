import React from "react";
import type { cartType, productsType } from "../types/types";

type Props = {
  product: productsType;
  selectedColor: string | null;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
  setCartData: any;
};

const ColorSelector = ({
  product,
  selectedColor,
  setSelectedColor,
  setCartData,
}: Props) => {
  const handleSelectedColor = (colorName: string) => {
    setSelectedColor(colorName);

    setCartData((prev: any) =>
      prev.map((ele: cartType) =>
        ele.id === product.id ? { ...ele, selectedColor: colorName } : ele,
      ),
    );
  };
  return (
    <div className="colors flex gap-y-2 gap-x-1 mt-2 flex-wrap">
      {product.colors &&
        product.colors.length > 0 &&
        product.colors.map((color, index) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleSelectedColor(color.name);
            }}
            key={index}
            className={`flex justify-start items-center px-1 py-px rounded-xs cursor-pointer border ${color.name === selectedColor ? "bg-[#1df0bb28]  border-[#0AA288]" : " border-gray-300 "}`}
          >
            <div className={`image size-6 `}>
              <img
                className="size-full"
                src={color.image}
                alt={`${color.name} color image`}
              />
            </div>
            <div className="colorName text-xs">{color.name}</div>
          </div>
        ))}
    </div>
  );
};

export default React.memo(ColorSelector);
