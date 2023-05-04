import { Request, Response } from "express";
import Favorites from "../models/Favorites";

export const addToFavorites = async (req: Request, res: Response) => {
  const { accommodation } = req.body;

  if (!accommodation) {
    throw new Error("Please provide all values.");
  }
  req.body.user = req.cookies.userId;

  const favorite = await Favorites.create(req.body);

  res.status(201).json({ favorite });
};

export const getUserFavorites = async (req: Request, res: Response) => {
  const queryObject = {
    user: req.cookies.userId,
  };

  let result = Favorites.find(queryObject).populate("accommodation");

  const favorites = await result;

  const total = await Favorites.countDocuments(queryObject);

  res.status(200).json({
    total,
    favorites,
  });
};
