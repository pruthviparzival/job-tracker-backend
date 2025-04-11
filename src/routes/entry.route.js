import express from "express";
import { entryController } from "../controllers/entry.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const entryRouter = express.Router();

entryRouter.post("/new/:user", protectRoute, entryController.add);
entryRouter.patch("/edit/:entryId", protectRoute, entryController.update);
entryRouter.get("/read/:user", protectRoute, entryController.read);
entryRouter.get("/filter/:user/:status", protectRoute, entryController.filter);
entryRouter.delete("/delete/:entryId", protectRoute, entryController.delete);

export default entryRouter;
