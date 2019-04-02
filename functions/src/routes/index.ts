import { productsRouter } from "./productRoutes";
import { userRouter } from "./usersRoutes";
import { shoppingCart } from "./shoppingCart";

const express = require("express");
const router = express.Router();

// Default api response
router.use("/", (req: any, res: any) => {
  res.status(200).send("Condor Labs Test");
});

// Api endpoints
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCart);
router.use("/users", userRouter);

export const routes = router;
