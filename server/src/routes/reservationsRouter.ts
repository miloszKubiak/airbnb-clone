import express from "express";
import {
  addNewReservation,
  deleteReservation,
  getMyReservations,
  getSingleReservation,
} from "../controllers/reservationController";

const router = express.Router();

router.route("/").post(addNewReservation).get(getMyReservations);
router.route("/:id").get(getSingleReservation).delete(deleteReservation);

export default router;
