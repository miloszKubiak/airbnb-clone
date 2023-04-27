import { Request, Response } from "express";
import Accommodation from "../models/Accommodation";
import Review from "../models/Review";
import Reservation from "../models/Reservation";
import { checkPermissions } from "../utils/checkPermissions";

export const addReview = async (req: Request, res: Response) => {
  const { accommodation: accommodationId } = req.body;

  const isValidAccommodation = await Accommodation.findOne({
    _id: accommodationId,
  });

  if (!isValidAccommodation) {
    return res
      .status(404)
      .send({ msg: `No accommodation with id: ${accommodationId}` });
  }

  const purchased = await Reservation.findOne({
    accommodation: accommodationId,
    user: req.cookies.userId,
  });
  if (!purchased) {
    return res
      .status(400)
      .send({ msg: "You not purchased a reservation for this accommodation." });
  }

  const alreadySubmitted = await Review.findOne({
    accommodation: accommodationId,
    user: req.cookies.userId,
  });

  if (alreadySubmitted) {
    return res
      .status(400)
      .send({ msg: "Already submitted review for this accommodation." });
  }

  req.body.user = req.cookies.userId;

  const review = await Review.create(req.body);

  res.status(201).json({ review });
};

export const getAllReviews = async (req: Request, res: Response) => {
  const reviews = await Review.find({});

  res.status(200).json({ count: reviews.length, reviews });
};

export const getSingleAccommodationReviews = async (
  req: Request,
  res: Response
) => {
  const { id: accommodationId } = req.params;
  const reviews = await Review.find({
    accommodation: accommodationId,
  })
    .populate("user", "name")
    .populate("accommodation", "title");

  res.status(200).json({ count: reviews.length, reviews });
};

export const deleteReview = async (req: Request, res: Response) => {
  const { id: reviewId } = req.params;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new Error(`No review with id: ${reviewId}`);
  }

  checkPermissions(req.cookies, review.user);
  await review.remove();

  res.status(200).json({ review });
};

export const updateReview = async (req: Request, res: Response) => {
  const { id: reviewId } = req.params;
  const { comment, rating } = req.body;

  if (!comment || !rating) {
    return res.status(400).send({ msg: "Please provide all values" });
  }

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    return res.status(404).send({ msg: `No review with id: ${reviewId}` });
  }

  checkPermissions(req.cookies, review.user);

  review.rating = rating;
  review.comment = comment;

  await review.save();

  res.status(200).json({ review });
};

export const getSingleReview = async (req: Request, res: Response) => {
  const { id: reviewId } = req.params;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    return res.status(404).send({ msg: `No review with id: ${reviewId}` });
  }

  res.status(200).json({ review });
};
