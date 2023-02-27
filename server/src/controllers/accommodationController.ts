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

// type TokenData = {
//   email: string;
//   id: string;
//   iat: number;
// }; // do sprawdzenia!

export const getAllAccommodations = (req: Request, res: Response) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (error, userData: any) => {
    const { id } = userData;
    res.json(await Accommodation.find({ owner: id }));
  });
};

export const getSingleAccommodation = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(await Accommodation.findById(id));
};

export const updateAccommodation = async (req: Request, res: Response) => {
  const { token } = req.cookies;
  const {
    id,
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
    const accommodation = await Accommodation.findById(id);
    if (userData.id === accommodation!.owner?.toString()) {
      accommodation!.set({
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
      await accommodation!.save();
      res.json("Update success!");
    }
  });
};
