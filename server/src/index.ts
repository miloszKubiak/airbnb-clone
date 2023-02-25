import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./db/connectDB";
import authRouter from "./routes/authRouter";
import cookieParser from "cookie-parser";
import uploadsRouter from "./routes/uploadsRouter";
import accommodationRouter from "./routes/accommodationRouter";

config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  "/uploads",
  express.static(
    "D:\\UdemyReactCourseProjects\\airbnb-clone\\server\\src\\uploads"
  )
);
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.use("/auth", authRouter);
app.use("/uploads", uploadsRouter);
app.use("/accommodations", accommodationRouter);

mongoose.set("strictQuery", false);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(PORT, () => {
      console.log(`********** App listening on port ${PORT} **********`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
