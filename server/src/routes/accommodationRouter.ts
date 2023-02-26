import express from "express";
import {
  addNewAccommodation,
  getAllAccommodations,
  getSingleAccommodation,
} from "../controllers/accommodationController";

const router = express.Router();

router.route("/").post(addNewAccommodation).get(getAllAccommodations);
router.route("/:id").get(getSingleAccommodation);

export default router;
