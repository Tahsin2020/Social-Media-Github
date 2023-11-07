import { Router } from "express";
import userRoutes from "./user-routes.js";
import itemRoutes from "./item-routes.js";

// I have to write my routes here.

const appRouter = Router();

appRouter.use("/user", userRoutes);
appRouter.use("/item", itemRoutes);

export default appRouter;
