import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { validate } from "../utils/validators.js";

import {
  getAllItems,
  addItem,
  findItem,
  modifyItem,
  deleteItem,
} from "../controllers/item-controllers.js";
import { getPublicProfile } from "../controllers/public-controllers.js";

const publicRoutes = Router();

publicRoutes.get("/getProfile", getPublicProfile);
// publicRoutes.post("/modifyProfile", verifyToken, addItem);
// publicRoutes.get("/getitem", verifyToken, findItem);
// publicRoutes.get("/modifyitem", verifyToken, modifyItem);
// publicRoutes.get("/deleteitem", verifyToken, deleteItem);

export default publicRoutes;
