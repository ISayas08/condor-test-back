import * as express from "express";
const router = express.Router();

// List of products
router.route("/").get((req: any, res: any) => {
  res.status(200).send({ msg: "List of products" });
});

// Product detail.
router.route("/:id").get((req: any, res: any) => {
  res.status(200).send({ msg: "Get one" });
});

// Add product.
router.route("/").post((req: any, res: any) => {
  res.status(200).send({ msg: "Add one" });
});

export const productsRouter = router;
