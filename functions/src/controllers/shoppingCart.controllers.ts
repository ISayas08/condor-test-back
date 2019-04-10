import { CART_SERVICES } from "./../services";
import { createResponse } from "./../shared/utils/responses";

const addShoppingCart = (req: any, res: any) => {
  CART_SERVICES.addCart()
    .then(resAdd => {
      res.status(201).send(createResponse("Cart created", { cartId: resAdd }));
    })
    .catch(err => res.status(err.status ? err.status : 500).send(err));
};

const getShoppingCartDetail = (req: any, res: any) => {
  CART_SERVICES.getCart(req.params.id)
    .then(cart => {
      res.status(200).send(createResponse("Ok", cart));
    })
    .catch(err => res.status(err.status ? err.status : 500).send(err));
};

const updateShoppingCart = (req: any, res: any) => {
  CART_SERVICES.addProductToCart(req.params.id, req.body)
    .then(carts => {
      res.status(200).send(createResponse("Products added", carts));
    })
    .catch(err => {
      res.status(err.status ? err.status : 500).send(err);
    });
};

export { addShoppingCart, getShoppingCartDetail, updateShoppingCart };
