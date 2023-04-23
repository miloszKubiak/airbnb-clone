import express from "express";
import { verifyToken } from "../middleware/jwt";
import {
  addReview,
  deleteReview,
  getAllReviews,
  updateReview,
} from "../controllers/reviewsController";

const router = express.Router();

router.route("/").post(verifyToken, addReview).get(getAllReviews);
router
  .route("/:id")
  .delete(verifyToken, deleteReview)
  .patch(verifyToken, updateReview);

export default router;
