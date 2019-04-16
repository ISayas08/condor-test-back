import * as express from "express";
import { productsRouter } from "./product.route";
import { userRouter } from "./users.route";

const router = express.Router();

// Api services
router.use("/products", productsRouter);
router.use("/users", userRouter);

// Default api response
router.use("/", (req: any, res: any) => {
  res.status(200).send("Condor Labs Test");
});

export const routes = router;