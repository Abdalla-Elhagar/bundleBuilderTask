import { useContext, useEffect, useState } from "react";
import { products, stepsData } from "../data/mocData";
import type { cartType, productsType, stepsType } from "../types/types";
import Card from "./Card";
import { CartContext } from "../context/CartContext";

const Step = ({ className }: { className: string }) => {
  const { cartData, setCartData } = useContext(CartContext);
  const [steps, setSteps] = useState(stepsData);

  const handleClick = (step: stepsType) => {
    setSteps((prev) =>
      prev.map((s: stepsType) => {
        return step.stepNumber === s.stepNumber
          ? { ...s, active: !s.active }
          : { ...s, active: false };
      }),
    );
  };

  const handleNextStep = (stepNumber: number) => {
    setSteps((prev) =>
      prev.map((s: stepsType) => {
        return stepNumber + 1 === s.stepNumber
          ? { ...s, active: true }
          : { ...s, active: false };
      }),
    );
  };

  useEffect(() => {
    const requiredProducts = products.filter((p: productsType) => p.isRequired);

    setCartData((prev: cartType[]) => {
      const newItems = requiredProducts
        .filter((p) => !prev.some((item) => item.id === p.id))
        .map((p) => ({
          id: p.id,
          name: p.name,
          category: p.category,
          quantity: 1,
          image: p.image,
          discount: p.discount,
          price: p.price,
          selectedColor: p.selectedColor ?? null,
          isRequired: p.isRequired,
        }));

      return [...prev, ...newItems];
    });
  }, []);
  return (
    <div className={`${className} steps`}>
      {steps.map((step: stepsType) => (
        <div key={step.stepNumber} className="col-span-1 w-full xl:col-span-2 ">
          <div
            className={` Step border-b border-[#1F1F1F] ${step.active ? "bg-secondary border-b-0 rounded-[10px] " : "rounded-none"}`}
          >
            <div className="stepHeader py-1 px-4 text-[#484848] border-b border-gray-500 text-xs ">
              STEP {step.stepNumber} OF {stepsData.length}
            </div>
            <div
              onClick={() => handleClick(step)}
              className="stepTitle p-4 flex justify-between items-center cursor-pointer"
            >
              <div className="text flex items-center gap-2">
                <img src={step.stepIcon} alt="step icon" />
                <h2 className="font-[22px]">{step.stepTitle}</h2>
              </div>

              <div className="arrow text-primary">
                {cartData.filter((p: cartType) => p.category == step.category)
                  .length > 0 && (
                  <span>
                    {
                      cartData.filter(
                        (p: cartType) => p.category == step.category,
                      ).length
                    }{" "}
                    selected
                  </span>
                )}

                <svg
                  className={`inline ${step.active ? "rotate-0" : "rotate-180"}`}
                  width={15}
                  height={15}
                  viewBox="0 0 220 220"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M110 40
              C114 40 118 42 120 46
               L182 158
                 C186 165 181 174 173 174
              L47 174
              C39 174 34 165 38 158
                 L100 46
                C102 42 106 40 110 40 Z"
                    fill={"#4e2fd2"}
                    stroke={"#4e2fd2"}
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                step.active
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-3">
                  {step.stepNumber == 4 ? (
                    <div className="p-4 text-center text-primary font-semibold">
                      Don't know what should i do here
                    </div>
                  ) : (
                    <div className="content p-4 flex justify-center gap-4 flex-wrap">
                      {products
                        .filter(
                          (product: productsType) =>
                            product.category === step.category,
                        )
                        .map((product: productsType) => (
                          <Card product={product} key={product.id} />
                        ))}
                    </div>
                  )}

                  {step.stepNumber !== steps.length && (
                    <button
                      onClick={() => handleNextStep(step.stepNumber)}
                      className="next-step text-primary border border-primary px-10 py-2 mx-auto block rounded-[7px] my-10"
                    >
                      Next: Choose your plan
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;
