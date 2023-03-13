import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Reservation from "../models/Reservation";

const jwtSecret = process.env.JWT_SECRET!;

export const addNewReservation = async (req: Request, res: Response) => {
  const { token } = req.cookies;
  const { accommodation, checkIn, numberOfGuests, checkOut, price } = req.body;

  jwt.verify(token, jwtSecret, {}, async (error, userData: any) => {
    if (error) throw error;
    const newReservation = await Reservation.create({
      purchaser: userData?.id,
      accommodation,
      checkIn,
      checkOut,
      numberOfGuests,
      price,
    });
    res.json(newReservation);
  });
};
