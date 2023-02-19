import bcrypt from "bcryptjs";
import User from "../models/User";
import { Request, Response } from "express";

const bcryptSalt = bcrypt.genSaltSync(10);

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptSalt),
  });

  res.json(user);
};
