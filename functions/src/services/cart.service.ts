import { CART_REPOSITORY } from "./../repository";
import { Cart } from "../shared/types";
import { isEmpty, pick, normalizeArray } from "../shared/utils/objects";
import { getProduct } from "./products.service";

const addCart = (): Promise<any> => {
  const newCart: Cart = { products: {} };
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
      products: normalizeArray(
        Object.keys(cartNewData.products)
          .map((productKey: any) =>
            pick(
              cartNewData.products[productKey],
              "_id",
              "imgURL",
              "name",
              "price",
              "quantity"
            )
          )
          .filter(product => !isEmpty(product)),
        "_id"
      )
    };

    return CART_REPOSITORY.updateCar(cartId, cartNewDataAux);
  } else return Promise.reject({ status: 400 });
};

const addProductToCart = (cartId: string, productToAdd: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    const PRODUCT_ID = productToAdd.productId;
    const QUANTITY = productToAdd.quantity;

    if (cartId && !isEmpty(productToAdd) && PRODUCT_ID && QUANTITY) {

      getCart(cartId).then(cart => {
        if (cart) {

          const cartData = Object.assign({}, cart.doc);

          if (cartData.products["" + PRODUCT_ID]) {

            const quantity = cartData.products[PRODUCT_ID].quantity;

            cartData.products["" + PRODUCT_ID].quantity =
              "" + (parseInt(quantity) + parseInt(QUANTITY));
              
            updateCart(cartId, cartData).then(resUpdate => resolve(resUpdate)).catch(err => reject(err));
          } else {
            getProduct(PRODUCT_ID).then(product => {
              if (product) {
                cartData.products["" + PRODUCT_ID] = {
                  _id: PRODUCT_ID,
                  imgURL: product.doc.imgURL,
                  name: product.doc.name,
                  price: product.doc.price,
                  quantity: QUANTITY + ""
                };

                updateCart(cartId, cartData).then(resUpdate => resolve(resUpdate)).catch(err => reject(err));
              } else {

                reject({ status: 404, message: "Product not found" });
              }
            }).catch(err => {

              reject(err);
            });
          }
        } else {
          reject({ status: 404, message: "Cart not found" });
        }
      }).catch(err => {
        reject(err)
      });
    } else {
      reject({ status: 400, message: "Bad body" })
    }
  });
};

export { addCart, getCart, addProductToCart, updateCart };
