import express from "express";
import { verifyToken } from "../middleware/jwt";
import {
  addToFavorites,
  getUserFavorites,
} from "../controllers/favoritesController";

const router = express.Router();

router
  .route("/")
  .get(verifyToken, getUserFavorites)
  .post(verifyToken, addToFavorites);

export default router;
