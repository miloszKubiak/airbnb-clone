import { Request, Response } from "express";
import Accommodation from "../models/Accommodation";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET!;

export const addNewAccommodation = (req: Request, res: Response) => {
  const { token } = req.cookies;
  const {
    title,
    address,
    description,
    photos,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (error, userData: any) => {
    if (error) throw error;
    const newAccommodation = await Accommodation.create({
      owner: userData?.id,
      title,
      address,
      description,
      photos,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    });
    res.json(newAccommodation);
  });
};
