import express from "express";
import {
  addNewReservation,
  getUserReservations,
  getSingleReservation,
  updateReservation,
} from "../controllers/reservationController";
import { verifyToken } from "../middleware/jwt";

const router = express.Router();

router.route("/").post(addNewReservation).get(verifyToken, getUserReservations);
router.route("/:id").get(getSingleReservation).patch(updateReservation);

export default router;
