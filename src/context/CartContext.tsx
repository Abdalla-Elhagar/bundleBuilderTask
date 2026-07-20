import { createContext, useState } from "react";
import type { cartType } from "../types/types";

export const CartContext = createContext<any>(null);

const CartData = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = useState<cartType[] | []>(
    JSON.parse(localStorage.getItem("savedCart") ?? "[]"),
  );
  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartData;
