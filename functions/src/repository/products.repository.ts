import { getCollection, getDocument, addDocument } from "./firebase.firestore";
import { COLLECTIONS } from "./../shared/const";
import { Product } from "../shared/types";

const getAllProducts = (): Promise<any> =>
  getCollection(COLLECTIONS.PRODUCTS_COLLECTION_NAME);

const getProductDetail = (productId: string): Promise<any> =>
  getDocument(COLLECTIONS.PRODUCTS_COLLECTION_NAME, productId);

const addProduct = (productData: Product): Promise<any> =>
  addDocument(COLLECTIONS.PRODUCTS_COLLECTION_NAME, productData);

export { getAllProducts, getProductDetail, addProduct };
