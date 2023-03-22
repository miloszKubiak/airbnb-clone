import express from "express";
import {
  addNewReservation,
  getMyReservations,
  getSingleReservation,
  updateReservation,
} from "../controllers/reservationController";

const router = express.Router();

router.route("/").post(addNewReservation).get(getMyReservations);
router.route("/:id").get(getSingleReservation).patch(updateReservation);

export default router;
