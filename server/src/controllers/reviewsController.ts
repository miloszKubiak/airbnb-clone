import { Request, Response } from "express";
import Accommodation from "../models/Accommodation";
import Review from "../models/Review";

export const addReview = async (req: Request, res: Response) => {
  const { accommodation: accommodationId } = req.body;

  const isValidAccommodation = await Accommodation.findOne({
    _id: accommodationId,
  });

  if (!isValidAccommodation) {
    throw new Error(`No accommodation with id: ${accommodationId}`);
  }

  const alreadySubmitted = await Review.findOne({
    accommodation: accommodationId,
    user: req.cookies.userId,
  });

  if (alreadySubmitted) {
    throw new Error("Already submitted review for this accommodation.");
  }

  req.body.user = req.cookies.userId;

  const review = await Review.create(req.body);

  res.status(201).json({ review });
};
