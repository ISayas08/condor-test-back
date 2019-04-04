import { addDocument, getDocument, updateDocument } from "./firebase.firestore";
import { COLLECTIONS } from "./../shared/const";
import { Cart } from "../shared/types";

const addShoppingCart = (cartData: Cart): Promise<any> =>
  addDocument(COLLECTIONS.CART_COLLECTION_NAME, cartData);

const getShoppingCartDetail = (cartId: string): Promise<any> =>
  getDocument(COLLECTIONS.CART_COLLECTION_NAME, cartId);

const updateCar = (cartId: string, cartNewData: Cart): Promise<any> =>
  updateDocument(COLLECTIONS.CART_COLLECTION_NAME, cartId, cartNewData);

export { addShoppingCart, getShoppingCartDetail, updateCar };
