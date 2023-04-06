import express from "express";
import {
  addNewReservation,
  getUserReservations,
  getSingleReservation,
  updateReservation,
} from "../controllers/reservationController";
import { verifyToken } from "../middleware/jwt";

const router = express.Router();

router
  .route("/")
  .post(verifyToken, addNewReservation)
  .get(verifyToken, getUserReservations);
router
  .route("/:id")
  .get(verifyToken, getSingleReservation)
  .patch(verifyToken, updateReservation);

export default router;
