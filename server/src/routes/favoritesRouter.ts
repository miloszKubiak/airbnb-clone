import express from "express";
import { verifyToken } from "../middleware/jwt";
import {
  addToFavorites,
  getUserFavorites,
  removeFromFavorites,
} from "../controllers/favoritesController";

const router = express.Router();

router
  .route("/")
  .get(verifyToken, getUserFavorites)
  .post(verifyToken, addToFavorites)
  .delete(verifyToken, removeFromFavorites);

export default router;
