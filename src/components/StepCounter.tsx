import type { cartType, productsType } from "../types/types";

const StepCounter = ({
  cartData,
  setCartData,
  product,
}: {
  cartData: cartType[];
  setCartData: any;
  product: productsType;
}) => {
  const quantity = cartData.find((item) => item.id === product.id)?.quantity;

  const handleClick = (action: "inc" | "dec") => {
    setCartData((prev: cartType[]) => {
      const exists = prev.some((item) => item.id === product.id);

      if (!exists) {
        if (action === "inc") {
          return [...prev, { ...product, quantity: 1 }];
        }
        return prev;
      }

      return prev
        .map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Math.max(
                  0,
                  item.quantity + (action === "inc" ? 1 : -1),
                ),
              }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const btnStyle = "size-5  rounded-sm";

  return (
    <div className="quantity flex justify-start items-center gap-2 text-lg leading-0 whitespace-nowrap">
      <button
        className={`${btnStyle} bg-[#F0F4F7] text-[#525963]`}
        onClick={(e) => {
          e.stopPropagation();
          handleClick("inc");
        }}
      >
        +
      </button>
      <div>{quantity || 0}</div>
      <button
        className={`${btnStyle} ${quantity == 0 || !quantity ? "border border-[#E6EBF0] text-[#E6EBF0]" : "border-0 bg-[#F0F4F7] text-[#525963]"}`}
        disabled={quantity == 0}
        onClick={(e) => {
          e.stopPropagation();
          handleClick("dec");
        }}
      >
        -
      </button>
    </div>
  );
};

export default StepCounter;
