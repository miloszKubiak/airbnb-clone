import express from "express";
import { verifyToken } from "../middleware/jwt";
import {
  addReview,
  deleteReview,
  getAllReviews,
  getSingleReview,
  updateReview,
} from "../controllers/reviewsController";

const router = express.Router();

router.route("/").post(verifyToken, addReview).get(getAllReviews);
router
  .route("/:id")
  .get(getSingleReview)
  .delete(verifyToken, deleteReview)
  .patch(verifyToken, updateReview);

export default router;
