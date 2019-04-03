import { addDocument, getDocument, updateDocument } from "./firebase.firestore";
import { COLLECTIONS } from "./../shared/const";
import { Cart } from "../shared/types";

const addShoppingCart = (cartData: Cart): Promise<any> => {
  return cartData
    ? addDocument(COLLECTIONS.CART_COLLECTION_NAME, cartData)
    : Promise.reject();
};

const getShoppingCartDetail = (cartId: string): Promise<any> => {
  return cartId
    ? getDocument(COLLECTIONS.CART_COLLECTION_NAME, cartId)
    : Promise.reject();
};

const updateCar = (cartId: string, cartNewData: Cart): Promise<any> => {
  return cartNewData
    ? updateDocument(COLLECTIONS.CART_COLLECTION_NAME, cartId, cartNewData)
    : Promise.reject();
};

export { addShoppingCart, getShoppingCartDetail, updateCar };
