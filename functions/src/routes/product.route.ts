import * as express from "express";
import { PRODUCTS_CONTROLLERS } from "./../controllers";

const router = express.Router();

// List of products
router.route("/").get(PRODUCTS_CONTROLLERS.listProducts);

// Product detail.
router.route("/:id").get(PRODUCTS_CONTROLLERS.productDetail);

// Add product.
router.route("/").post(PRODUCTS_CONTROLLERS.addProduct);

export const productsRouter = router;
