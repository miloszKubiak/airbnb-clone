import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/authController";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(getUser);

export default router;
