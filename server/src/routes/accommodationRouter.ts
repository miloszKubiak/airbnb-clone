import express from "express";
import {
  addNewAccommodation,
  getUserAccommodations,
  getSingleAccommodation,
  updateAccommodation,
  getAllAccommodations,
} from "../controllers/accommodationController";

const router = express.Router();

router.route("/user-accommodations").get(getUserAccommodations);
router
  .route("/")
  .post(addNewAccommodation)
  .put(updateAccommodation)
  .get(getAllAccommodations);
router.route("/:id").get(getSingleAccommodation);

export default router;
