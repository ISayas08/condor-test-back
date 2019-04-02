import * as express from "express";
const router = express.Router();

// Create user
router.route("/").post((req: any, res: any) => {
  res.status(200).send({ msg: "Add one" });
});

export const userRouter = router;
