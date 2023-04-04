import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET!;

// type TPayload = {
//   email: string;
//   id: string;
//   iat: number;
// };

export const verifyToken: RequestHandler = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return next(new Error("You are not authenticated!"));

  try {
    const payload: any = jwt.verify(token, jwtSecret);
    req.cookies.owner = payload.id;
    next();
  } catch (error) {
    throw new Error("Token is not valid!");
  }
};
