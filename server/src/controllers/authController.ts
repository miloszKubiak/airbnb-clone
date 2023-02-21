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
    const isMatch = bcrypt.compareSync(password, user.password!);
    if (isMatch) {
      jwt.sign(
        { email: user.email, id: user._id },
        jwtSecret,
        {},
        (error, token) => {
          if (error) throw error;
          res.cookie("token", token).json(user);
        }
      );
    } else {
      res.status(422).json("Wrong password");
    }
  } else {
    res.status(404).json("User not found");
  }
};

//jwt userData any - do poprawy
export const getUser = (req: Request, res: Response) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (error, userData: any) => {
      if (error) throw error;
      const user = await User.findById(userData.id);
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

export const logoutUser = (req: Request, res: Response) => {
  res.cookie("token", "").json(true);
};
