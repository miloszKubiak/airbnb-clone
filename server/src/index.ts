import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./db/connectDB";
import authRouter from "./routes/authRouter";

config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.use("/auth", authRouter);

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

app.post("/register", (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
});

start();
