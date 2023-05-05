import { Request, Response } from "express";
import Favorites from "../models/Favorites";
import { checkPermissions } from "../utils/checkPermissions";

export const addToFavorites = async (req: Request, res: Response) => {
  const { accommodation } = req.body;

  if (!accommodation) {
    return res.status(403).send({ msg: "Such accommodation does not exist." });
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

export const removeFromFavorites = async (req: Request, res: Response) => {
  const { id: favoriteId } = req.body;

  const favorite = await Favorites.findOne({ _id: favoriteId });

  if (!favorite) {
    return res
      .status(404)
      .send({ msg: `No favorite accommodation with id: ${favoriteId}` });
  }

  checkPermissions(req.cookies, favorite.user);

  await favorite.remove();

  res.status(200).json({ msg: "Remove from favorites successful." });
};
