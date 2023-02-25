import express from "express";
import {
  addNewAccommodation,
  getAllAccommodations,
} from "../controllers/accommodationController";

const router = express.Router();

router.route("/").post(addNewAccommodation).get(getAllAccommodations);

export default router;
