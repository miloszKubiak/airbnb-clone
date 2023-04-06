import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Reservation from "../models/Reservation";

const jwtSecret = process.env.JWT_SECRET!;

export const addNewReservation = async (req: Request, res: Response) => {
  const { token } = req.cookies;
  const {
    accommodation,
    checkIn,
    numberOfGuests,
    checkOut,
    numberOfNights,
    price,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (error, userData: any) => {
    if (error) throw error;
    const newReservation = await Reservation.create({
      user: userData?.id,
      accommodation,
      checkIn,
      checkOut,
      numberOfGuests,
      numberOfNights,
      price,
    });
    res.json(newReservation);
  });
};

// export const getUserReservations = async (req: Request, res: Response) => {
//   const reservations = await Reservation.find({ user: req.cookies.userId });
//   res.status(200).json({ count: reservations.length, reservations });
// };

export const getUserReservations = async (req: Request, res: Response) => {
  const queryObject = {
    user: req.cookies.userId,
  };

  let result = Reservation.find(queryObject);

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 4;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const reservations = await result;

  const totalReservations = await Reservation.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalReservations / limit);

  res.status(200).json({
    reservations,
    totalReservations,
    numOfPages,
  });
};

export const getSingleReservation = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(await Reservation.findById(id).populate("accommodation"));
};

export const updateReservation = async (req: Request, res: Response) => {
  const { id: reservationId } = req.params;

  const reservation = await Reservation.findOne({ _id: reservationId });

  if (!reservation)
    return res.status(400).send("No reservation of this id exists.");

  const updatedReservation = await Reservation.findByIdAndUpdate(
    { _id: reservationId },
    req.body,
    { new: true, runValidators: true }
  );

  res.status(200).json({ updatedReservation });
};
