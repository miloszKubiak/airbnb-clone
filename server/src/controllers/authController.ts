import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { config } from "dotenv";
import { Request, Response } from "express";

config();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET!;

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(user);
  } catch (error) {
    res.status(422).json(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const passwordOk = bcrypt.compareSync(password, user.password!);
    if (passwordOk) {
      jwt.sign(
        { email: user.email, id: user._id },
        jwtSecret,
        {},
        (error, token) => {
          if (error) throw error;
          res.cookie("token", token).json("Password ok");
        }
      );
    } else {
      res.status(422).json("Wrong password");
    }
  } else {
    res.json("User not found");
  }
};
