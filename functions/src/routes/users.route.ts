import * as express from "express";
import { USERS_CONTROLLERS } from "./../controllers";
const router = express.Router();

// Create user
router.route("/").post(USERS_CONTROLLERS.addUserController);

// Update user
router.route("/:id").put(USERS_CONTROLLERS.updateUserController);

// Get user
router.route("/:id").get(USERS_CONTROLLERS.getUserController);

export const userRouter = router;
