import express from "express";
import {
  addNewReservation,
  getMyReservations,
} from "../controllers/reservationController";

const router = express.Router();

router.route("/").post(addNewReservation).get(getMyReservations);

export default router;
