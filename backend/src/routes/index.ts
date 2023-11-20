import { Router } from "express";
import itemRoutes from "./item-routes.js";
import privateRoutes from "./private-routes.js";

// I have to write my routes here.

const appRouter = Router();

appRouter.use("/private", privateRoutes);
appRouter.use("/item", itemRoutes);

export default appRouter;
