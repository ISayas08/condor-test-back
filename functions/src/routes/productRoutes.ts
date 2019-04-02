import * as express from "express";
import { listProducts, productDetail, addProduct } from "./../controllers";

const router = express.Router();

// List of products
router.route("/").get(listProducts);

// Product detail.
router.route("/:id").get(productDetail);

// Add product.
router.route("/").post(addProduct);

export const productsRouter = router;
