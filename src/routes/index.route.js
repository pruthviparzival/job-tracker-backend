import express from "express";
import userRouter from "./user.route.js";
import entryRouter from "./entry.route.js";

const indexRouter = express.Router();

indexRouter.use("/api/v1/users", userRouter);
indexRouter.use("/api/v1/entries", entryRouter);

export default indexRouter;
