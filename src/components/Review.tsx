import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import type { cartType } from "../types/types";
import StepCounter from "./StepCounter";
import { reviewLastSections } from "../data/mocData";
import checkOutImage from "../assets/review/sheckout.png";
import { getDiscountedPrice } from "../utils/price";

const Review = ({ className }: { className: string }) => {
  const arrOfCategories = ["camera", "sensor", "accessory"];
  const { cartData, setCartData } = useContext(CartContext);
  const { totalOriginal, totalDiscounted, savings } = useMemo(() => {
    const cartOriginal = cartData.reduce(
      (sum: number, p: cartType) => sum + p.price * p.quantity,
      0,
    );
    const cartDiscounted = cartData.reduce(
      (sum: number, p: cartType) =>
        sum + getDiscountedPrice(p.price, p.discount) * p.quantity,
      0,
    );

    const extrasOriginal = reviewLastSections.reduce(
      (sum, p) => sum + p.price,
      0,
    );
    const extrasDiscounted = reviewLastSections.reduce(
      (sum, p) => sum + getDiscountedPrice(p.price, p.discount),
      0,
    );

    const totalOriginal = cartOriginal + extrasOriginal;
    const totalDiscounted = cartDiscounted + extrasDiscounted;

    return {
      totalOriginal,
      totalDiscounted,
      savings: totalOriginal - totalDiscounted,
    };
  }, [cartData]);

  const handleSaveForLater = () => {
    localStorage.setItem("savedCart", JSON.stringify(cartData));
  };
  return (
    <div className={`${className} Review container rounded-[10px]`}>
      <div className="header">REVIEW</div>

      <div className="content mt-6 block lg:flex xl:block justify-between gap-10">
        <div className="products w-full lg:w-1/2 xl:w-full">
          <h3>Your security system</h3>
          <p className="w-full ">
            Review your personalized protection system designed to keep what
            matters most safe.
          </p>
          {arrOfCategories.map((c, index) => (
            <div key={index}>
              <div className="title leading-10 text-[#A8B2BD] border-t border-t-[#CED6DE]">
                {c.toUpperCase()}
              </div>
              {cartData
                .filter((p: cartType) => p.category == c)
                .map((product: cartType) => (
                  <div
                    className="product mb-4 flex justify-between items-center"
                    key={product.id}
                  >
                    <div className="left flex items-center gap-2">
                      <div className="image size-10 p-2  bg-white rounded-[5px]">
                        <img src={product.image} alt={product.name + "image"} />
                      </div>
                      <div className="name">{product.name}</div>
                    </div>
                    <div className="right flex justify-end items-center gap-4">
                      <StepCounter
                        cartData={cartData}
                        setCartData={setCartData}
                        product={product}
                        buttonsClass="bg-[#fff]"
                      />

                      <div className="text-text-color text-[16px] leading-5 block  md:flex md:gap-4 xl:block ">
                        <p
                          className={`${product.discount ? "line-through text-[#6F7882]" : "text-primary"}`}
                        >
                          ${product.price * product.quantity}
                        </p>
                        {product.discount && (
                          <p className="text-primary">
                            {product.discount !== 100 ? (
                              <>
                                $
                                {getDiscountedPrice(
                                  product.price,
                                  product.discount,
                                ).toFixed(2)}
                              </>
                            ) : (
                              <>FREE</>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}

          <div className="plan">
            <div className="title leading-10 text-[#A8B2BD] border-t border-t-[#CED6DE]">
              {"plan".toUpperCase()}
            </div>
            {reviewLastSections.map((p, index) => (
              <div
                className="product mb-4 flex justify-between items-center"
                key={index}
              >
                <div className="left flex items-center gap-2">
                  <div
                    className={`image  ${p.name == "" ? "" : "size-12"} p-2  `}
                  >
                    <img src={p.image} alt={p.name + "image"} />
                  </div>
                  <div className="name">{p.name}</div>
                </div>
                <div className="right flex justify-end items-center gap-4">
                  <div className="text-text-color text-[16px] leading-5 block  md:flex md:gap-4 xl:block ">
                    <p
                      className={`${p.discount ? "line-through text-[#6F7882]" : "text-primary"}`}
                    >
                      ${p.name == "" ? p.price + "/mo" : p.price}
                    </p>
                    {p.discount && (
                      <p className="text-primary">
                        {p.discount !== 100 ? (
                          <>
                            $
                            {p.name == ""
                              ? getDiscountedPrice(p.price, p.discount).toFixed(
                                  2,
                                ) + "/mo"
                              : getDiscountedPrice(p.price, p.discount).toFixed(
                                  2,
                                )}
                          </>
                        ) : (
                          <>FREE</>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right w-full lg:w-1/2 xl:w-full">
          <div className="top flex items-center gap-4">
            <div className="image">
              <img src={checkOutImage} alt="check Out Image" />
            </div>
            <div className="text ">
              <h3 className="text-lg font-semibold">
                30-day hassle-free returns
              </h3>
              <p>
                If you're not totally in love with the product, we will refund
                you 100%.
              </p>
            </div>
          </div>

          <div className="bottom flex justify-between items-center flex-wrap gap-3 mt-4">
            <div className="text rounded-[3px] bg-primary text-white text-center px-4 py-0.5">
              as low as $
              {getDiscountedPrice(
                reviewLastSections[0].price,
                reviewLastSections[0].discount,
              ).toFixed(2)}
              /mo
            </div>

            <div className="flex items-center gap-3">
              <p className="line-through text-[#6F7882] text-lg">
                ${totalOriginal.toFixed(2)}
              </p>
              <p className="text-primary font-bold text-2xl">
                ${totalDiscounted.toFixed(2)}
              </p>
            </div>
          </div>

          {savings > 0 && (
            <p className="text-center text-green-500 font-medium mt-4">
              Congrats! You're saving ${savings.toFixed(2)} on your security
              bundle!
            </p>
          )}

          <button
            onClick={() => alert("Checked out")}
            className="checkout w-full bg-primary text-white font-semibold py-4 rounded-[7px] mt-4 cursor-pointer active:scale-95 duration-100"
          >
            Checkout
          </button>

          <button
            onClick={() => {
              handleSaveForLater();
              alert("saved data, you can restart this page to test that.");
            }}
            className="w-full text-center underline text-[#6F7882] mt-3 block cursor-pointer active:scale-95 duration-100 "
          >
            Save my system for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
