import { Router } from "express";
import privateRoutes from "./private-routes.js";
import publicRoutes from "./public-routes.js";

// I have to write my routes here.

const appRouter = Router();

appRouter.use("/public", publicRoutes);
appRouter.use("/private", privateRoutes);

export default appRouter;
