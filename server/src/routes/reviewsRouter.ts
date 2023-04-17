import express from "express";
import { verifyToken } from "../middleware/jwt";
import { addReview } from "../controllers/reviewsController";

const router = express.Router();

router.route("/").post(verifyToken, addReview);

export default router;
