import * as express from "express";
import { productsRouter } from "./product.route";
import { userRouter } from "./users.route";
import { shoppingCart } from "./shoppingCart.route";

const router = express.Router();

// Api services
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCart);
router.use("/users", userRouter);

// Default api response
router.use("/", (req: any, res: any) => {
  res.status(200).send("Condor Labs Test");
});

export const routes = router;