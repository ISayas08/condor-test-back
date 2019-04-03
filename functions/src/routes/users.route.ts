import * as express from "express";
import { USERS_CONTROLLERS } from "./../controllers";
const router = express.Router();

// Create user
router.route("/").post(USERS_CONTROLLERS.addUserController);

export const userRouter = router;
