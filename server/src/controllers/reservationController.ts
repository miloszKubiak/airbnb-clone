import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Reservation from "../models/Reservation";

const jwtSecret = process.env.JWT_SECRET!;

export const addNewReservation = async (req: Request, res: Response) => {
  const { token } = req.cookies;
  const {
    accommodationId,
    accommodationName,
    checkIn,
    numberOfGuests,
    checkOut,
    numberOfNights,
    price,
    userName,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (error, userData: any) => {
    if (error) throw error;
    const newReservation = await Reservation.create({
      userId: userData?.id,
      userName,
      accommodationId,
      accommodationName,
      checkIn,
      checkOut,
      numberOfGuests,
      numberOfNights,
      price,
    });
    res.json(newReservation);
  });
};

export const getMyReservations = async (req: Request, res: Response) => {
  const { token } = req.cookies;

  jwt.verify(token, jwtSecret, {}, async (error, userData: any) => {
    if (error) throw error;
    const { id } = userData;
    res.json(await Reservation.find({ userId: userData.id }));
  });
};
