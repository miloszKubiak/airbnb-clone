import express from "express";
import { verifyToken } from "../middleware/jwt";
import {
  addToFavorites,
  getUserFavorites,
  getUserFavoritesInBookmarks,
  removeFromFavorites,
} from "../controllers/favoritesController";

const router = express.Router();

router
  .route("/")
  .get(verifyToken, getUserFavorites)
  .post(verifyToken, addToFavorites);

router.route("/in-bookmark").get(verifyToken, getUserFavoritesInBookmarks);

router.route("/:id").delete(verifyToken, removeFromFavorites);

export default router;
