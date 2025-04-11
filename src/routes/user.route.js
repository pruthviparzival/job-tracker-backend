import express from "express";
import { userController } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);
userRouter.get("/me", protectRoute, userController.me);

export default userRouter;
