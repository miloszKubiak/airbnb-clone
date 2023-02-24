import express from "express";
import { uploadByLink } from "../controllers/uploadsController";

const router = express.Router();

router.route("/").post(uploadByLink);

export default router;
