import express from "express";
import { addNewReservation } from "../controllers/reservationController";

const router = express.Router();

router.route("/").post(addNewReservation);

export default router;
