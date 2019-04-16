import { PRODUCT_SERVICES } from "./../services";
import { createResponse } from "../shared/utils/responses";
import { pick } from "../shared/utils/objects";

const listProducts = (req: any, res: any) => {
  PRODUCT_SERVICES.getAllProducts()
    .then(list => {
      res.status(200).send(createResponse("Ok", list));
    })
    .catch(err => res.status(err.status ? err.status : 500).send(err));
};

const productDetail = (req: any, res: any) => {
  PRODUCT_SERVICES.getProduct(req.params.id)
    .then(product => {
      res.status(200).send(createResponse("Ok", product));
    })
    .catch(err => res.status(err.status ? err.status : 500).send(err));
};

const addProduct = (req: any, res: any) => {
  PRODUCT_SERVICES.addProduct(
    pick(req.body, "description", "price", "category", "available", "imgURL", "name", "description")
  )
    .then(resAdd => {
      if (resAdd) {
        res
          .status(201)
          .send(createResponse("Product added", { productId: resAdd }));
      } else {
        res
          .status(502)
          .send(createResponse("There was an error getting the list", {}));
      }
    })
    .catch(err => res.status(err.status ? err.status : 500).send(err));
};

export { listProducts, productDetail, addProduct };
