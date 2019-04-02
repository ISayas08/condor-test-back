import * as express from "express";
const router = express.Router();

// Add shoping cart
router.route("/").post((req: any, res: any) => {
  res.status(200).send({ msg: "Add one" });
});

// Shoping cart detail.
router.route("/:id").get((req: any, res: any) => {
  res.status(200).send({ msg: "Get one" });
});

// Update Shoping cart
router.route("/:id").put((req: any, res: any) => {
  res.status(200).send({ msg: "Update one" });
});

export const shoppingCart = router;
