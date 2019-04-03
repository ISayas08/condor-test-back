export type Cart = {
  userId: string;
  products: CartProduct[];
};
export type CartProduct = {
  productId: string;
  description: string;
  price: string;
};
