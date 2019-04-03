import * as express from "express";
import { USERS_CONTROLLERS } from "./../controllers";
const router = express.Router();

// Create user
router.route("/").post(USERS_CONTROLLERS.addUserController);

// Update user
router.route("/").put(USERS_CONTROLLERS.updateUserController);

export const userRouter = router;
