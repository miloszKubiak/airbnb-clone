import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const addNewReservation = async (req: Request, res: Response) => {
  const {
    accommodation,
    checkIn,
    numberOfGuests,
    checkOut,
    numberOfNights,
    price,
  } = req.body;

  if (
    !accommodation ||
    !checkIn ||
    !numberOfGuests ||
    !checkOut ||
    !numberOfNights ||
    !price
  ) {
    throw new Error("Please provide all values.");
  }
  req.body.user = req.cookies.userId;

  const reservation = await Reservation.create(req.body);

  res.status(201).json({ reservation });
};

export const getUserReservations = async (req: Request, res: Response) => {
  const queryObject = {
    user: req.cookies.userId,
  };

  let result = Reservation.find(queryObject).populate("accommodation");

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
