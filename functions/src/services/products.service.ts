import { PRODUCT_REPOSITORY } from "./../repository";
import { isEmpty } from "../shared/utils/objects";
import { Product } from "../shared/types";

const getAllProducts = (): Promise<any> => {
  return PRODUCT_REPOSITORY.getAllProducts();
};

const getProduct = (productId: string): Promise<any> => {
  return productId
    ? PRODUCT_REPOSITORY.getProductDetail(productId)
    : Promise.reject({ status: 400 });
};

const addProduct = (productData: Product): Promise<any> => {
  return !isEmpty(productData) &&
    (productData.description &&
      productData.category &&
      productData.imgURL &&
      productData.price &&
      productData.name &&
      productData.description &&
      productData.available)
    ? PRODUCT_REPOSITORY.addProduct(productData)
    : Promise.reject({ status: 400 });
};

export { getAllProducts, getProduct, addProduct };
