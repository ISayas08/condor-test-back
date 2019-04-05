import { CART_REPOSITORY } from "./../repository";
import { Cart } from "../shared/types";
import { isEmpty, pick } from "../shared/utils/objects";

const addCart = (): Promise<any> => {
  const newCart: Cart = { products: [] };
  return CART_REPOSITORY.addShoppingCart(newCart);
};

const getCart = (cartId: string): Promise<any> => {
  return cartId
    ? CART_REPOSITORY.getShoppingCartDetail(cartId)
    : Promise.reject({ status: 400 });
};

const updateCart = (cartId: string, cartNewData: Cart): Promise<any> => {
  if (cartId && !isEmpty(cartNewData) && cartNewData.products) {
    const cartNewDataAux = {
      products: cartNewData.products
        .map(product =>
          pick(product, "_id", "imgURL", "name", "price", "quantity")
        )
        .filter(product => !isEmpty(product))
    };

    return CART_REPOSITORY.updateCar(cartId, cartNewDataAux);
  } else return Promise.reject({ status: 400 });
};

export { addCart, getCart, updateCart };
