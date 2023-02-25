import express from "express";
import { addNewAccommodation } from "../controllers/accommodationController";

const router = express.Router();

router.route("/").post(addNewAccommodation);

export default router;
