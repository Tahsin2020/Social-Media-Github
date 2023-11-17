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

const itemRoutes = Router();

itemRoutes.get("/", verifyToken, getAllItems);
itemRoutes.post("/additem", verifyToken, addItem);
itemRoutes.get("/getitem", verifyToken, findItem);
itemRoutes.get("/modifyitem", verifyToken, modifyItem);
itemRoutes.get("/deleteitem", verifyToken, deleteItem);

export default itemRoutes;
