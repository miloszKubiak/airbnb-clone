import express from "express";
import {
  addNewAccommodation,
  getUserAccommodations,
  getSingleAccommodation,
  updateAccommodation,
  getAllAccommodations,
} from "../controllers/accommodationController";
import { verifyToken } from "../middleware/jwt";

const router = express.Router();

router.route("/user-accommodations").get(verifyToken, getUserAccommodations);
router
  .route("/")
  .post(addNewAccommodation)
  // .put(updateAccommodation)
  .get(getAllAccommodations);
router
  .route("/:id")
  .get(getSingleAccommodation)
  .patch(verifyToken, updateAccommodation);

export default router;
