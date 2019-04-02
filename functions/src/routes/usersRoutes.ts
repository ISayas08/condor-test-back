import * as express from "express";
import { addUserController } from "./../controllers";
const router = express.Router();

// Create user
router.route("/").post(addUserController);

export const userRouter = router;
