import express from "express";
import {
  uploadByLink,
  uploadFromDevice,
} from "../controllers/uploadsController";
import multer from "multer";

const router = express.Router();

const multerMiddleware = multer({
  dest: "D:\\UdemyReactCourseProjects\\airbnb-clone\\server\\src\\uploads/",
});
const photosMiddleware = multerMiddleware.array("photos", 100);

router.route("/").post(photosMiddleware, uploadFromDevice);
router.route("/upload-by-link").post(uploadByLink);

export default router;
