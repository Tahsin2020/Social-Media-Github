import { Router } from "express";
import {
  getAllItems,
  addItem,
  findItem,
  modifyItem,
  deleteItem,
} from "../controllers/item-controllers.js";

const itemRoutes = Router();

itemRoutes.get("/", getAllItems);
itemRoutes.post("/additem", addItem);
itemRoutes.get("/getitem", findItem);
itemRoutes.get("/modifyitem", modifyItem);
itemRoutes.get("/deleteitem", deleteItem);

export default itemRoutes;
