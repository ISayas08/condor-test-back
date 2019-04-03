import { getCollection, getDocument, addDocument } from "./firebase.firestore";
import { COLLECTIONS } from "./../shared/const";
import { Product } from "../shared/types";

const getAllProducts = (): Promise<any> => {
  return getCollection(COLLECTIONS.PRODUCTS_COLLECTION_NAME);
};

const getProductDetail = (productId: string): Promise<any> => {
  return productId
    ? getDocument(COLLECTIONS.PRODUCTS_COLLECTION_NAME, productId)
    : Promise.reject();
};

const addProduct = (productData: Product): Promise<any> => {
  return productData
    ? addDocument(COLLECTIONS.PRODUCTS_COLLECTION_NAME, productData)
    : Promise.reject();
};

export { getAllProducts, getProductDetail, addProduct };
