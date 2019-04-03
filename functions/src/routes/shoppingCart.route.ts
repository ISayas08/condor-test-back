import * as express from "express";
import { CART_CONTROLLERS } from "../controllers";

const router = express.Router();

// Add shopping cart
router.route("/").post(CART_CONTROLLERS.addShoppingCart);

// Shopping cart detail.
router.route("/:id").get(CART_CONTROLLERS.getShoppingCartDetail);

// Update Shopping cart
router.route("/:id").put(CART_CONTROLLERS.updateShoppingCart);

export const shoppingCart = router;
