import { getCollection, getDocument, addDocument } from "./firebase.firestore";
import { COLLECTIONS } from "./../shared/const";
import { Product } from "../shared/types";
import { isEmpty } from "../shared/utils/objects";

const getAllProducts = (): Promise<any> => {
  return getCollection(COLLECTIONS.PRODUCTS_COLLECTION_NAME);
};

const getProductDetail = (productId: string): Promise<any> => {
  return productId
    ? getDocument(COLLECTIONS.PRODUCTS_COLLECTION_NAME, productId)
    : Promise.reject({ status: 400 });
};

const addProduct = (productData: Product): Promise<any> => {
  return !isEmpty(productData)
    ? addDocument(COLLECTIONS.PRODUCTS_COLLECTION_NAME, productData)
    : Promise.reject({ status: 400 });
};

export { getAllProducts, getProductDetail, addProduct };
