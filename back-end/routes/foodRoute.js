import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// image storage Engine

const storage = multer.diskStorage({
 
});

foodRouter.post("add", addFood);

export default foodRouter;
