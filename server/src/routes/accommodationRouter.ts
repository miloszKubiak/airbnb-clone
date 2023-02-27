import express from "express";
import {
  addNewAccommodation,
  getAllAccommodations,
  getSingleAccommodation,
  updateAccommodation,
} from "../controllers/accommodationController";

const router = express.Router();

router
  .route("/")
  .post(addNewAccommodation)
  .get(getAllAccommodations)
  .put(updateAccommodation);
router.route("/:id").get(getSingleAccommodation);

export default router;
