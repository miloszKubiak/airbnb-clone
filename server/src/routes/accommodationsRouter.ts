import express from "express";
import {
  addNewAccommodation,
  getUserAccommodations,
  getSingleAccommodation,
  updateAccommodation,
  getAllAccommodations,
  deleteAccommodation,
} from "../controllers/accommodationController";
import { verifyToken } from "../middleware/jwt";
import { getSingleAccommodationReviews } from "../controllers/reviewsController";

const router = express.Router();

router.route("/user-accommodations").get(verifyToken, getUserAccommodations);
router
  .route("/")
  .post(verifyToken, addNewAccommodation)
  .get(getAllAccommodations);
router
  .route("/:id")
  .get(getSingleAccommodation)
  .patch(verifyToken, updateAccommodation)
  .delete(verifyToken, deleteAccommodation);

router.route("/:id/reviews").get(getSingleAccommodationReviews);

export default router;
