import express from "express";
import {
  addNewReservation,
  getMyReservations,
  getSingleReservation,
} from "../controllers/reservationController";

const router = express.Router();

router.route("/").post(addNewReservation).get(getMyReservations);
router.route("/:id").get(getSingleReservation);

export default router;
