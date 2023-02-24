import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./db/connectDB";
import authRouter from "./routes/authRouter";
import cookieParser from "cookie-parser";
import uploadsRouter from "./routes/uploadsRouter";

config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);
console.log(__dirname);

app.use("/auth", authRouter);
app.use("/upload-by-link", uploadsRouter);

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