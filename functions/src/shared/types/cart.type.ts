export type Cart = {
  products: CartProduct[];
};
export type CartProduct = {
  _id: string;
  imgURL: string;
  name: string;
  price: string;
  quantity: string;
};
