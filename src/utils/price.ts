export const getDiscountedPrice = (
  price: number,
  discount?: number | null,
): number => {
  if (!discount) return price;
  if (discount === 100) return 0;
  return price - (price * discount) / 100;
};
