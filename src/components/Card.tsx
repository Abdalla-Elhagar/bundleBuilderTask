import { useContext, useState } from "react";
import type { cartType, productsType } from "../types/types";
import { CartContext } from "../context/CartContext";
import ColorSelector from "./ColorSelector";
import StepCounter from "./StepCounter";
import { getDiscountedPrice } from "../utils/price";

const Card = ({ product }: { product: productsType }) => {
  const [selectedColor, setSelectedColor] = useState(product.selectedColor);
  const { cartData, setCartData } = useContext(CartContext);
  const isActive = () => {
    return cartData.find((p: cartType) => p.id === product.id);
  };

  const handleCart = () => {
    if (isActive()) {
      setCartData((prev: any) =>
        prev.filter((p: cartType) => p.id !== product.id),
      );
    } else {
      const cartProduct: cartType = {
        id: product.id,
        name: product.name,
        category: product.category,
        quantity: 1,
        image: product.image,
        discount: product.discount,
        price: product.price,
        selectedColor: selectedColor,
        isRequired: product.isRequired,
      };
      setCartData((prev: any) => [...prev, cartProduct]);
    }
  };

  return (
    <div
      onClick={handleCart}
      key={product.id}
      className={`Card flex  gap-4 w-full md:w-1/5 md:min-w-78 xl:w-[46%] min-h-25 bg-white relative rounded-[10px] ${isActive() ? "border-2 border-primary" : ""}`}
    >
      {product.discount && (
        <div
          className={`discount absolute top-3 left-3 px-2 py-1 bg-primary text-white rounded-full text-xs`}
        >
          Save {product.discount} %
        </div>
      )}
      <div className="image w-25 h-35 flex items-center justify-center">
        <img
          className="w-full"
          src={product.image}
          alt={`${product.name} image`}
        />
      </div>

      <div className="cardContent p-4 pr-2 text-start text-xs leading-4">
        <h3 className="name font-medium text-lg">{product.name}</h3>

        <p className="description text-text-color">
          {product.description}{" "}
          <a className="underline text-blue-500 whitespace-nowrap" href="#">
            Learn More
          </a>
        </p>

        <ColorSelector
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          setCartData={setCartData}
        />

        <div className="bottom mt-2 flex justify-between">
          <StepCounter
            cartData={cartData}
            setCartData={setCartData}
            product={product}
          />
          <div className="text-text-color text-[16px] leading-5">
            <p
              className={`${product.discount ? "line-through text-[#D8392B]" : ""}`}
            >
              ${product.price}
            </p>
            {product.discount && (
              <p>
                $
                {getDiscountedPrice(product.price, product.discount).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
