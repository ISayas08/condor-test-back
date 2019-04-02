import * as express from "express";
import {
  addShoppingCar,
  getShoppingCarDetail,
  updateShoppingCar
} from "./../controllers";

const router = express.Router();

// Add shopping cart
router.route("/").post(addShoppingCar);

// Shopping cart detail.
router.route("/:id").get(getShoppingCarDetail);

// Update Shopping cart
router.route("/:id").put(updateShoppingCar);

export const shoppingCart = router;
