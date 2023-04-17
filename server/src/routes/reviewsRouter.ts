import express from "express";
import { verifyToken } from "../middleware/jwt";
import {
  addReview,
  deleteReview,
  getAllReviews,
} from "../controllers/reviewsController";

const router = express.Router();

router.route("/").post(verifyToken, addReview).get(getAllReviews);
router.route("/:id").delete(verifyToken, deleteReview);

export default router;
