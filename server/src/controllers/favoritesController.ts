import { Request, Response } from "express";
import Favorites from "../models/Favorites";
import { checkPermissions } from "../utils/checkPermissions";

export const addToFavorites = async (req: Request, res: Response) => {
  const { accommodation } = req.body;
  req.body.user = req.cookies.userId;

  const isFavorite = await Favorites.findOne({
    accommodation: accommodation,
    user: req.body.user,
  });

  if (isFavorite) {
    return res
      .status(403)
      .send({ msg: `You already have this accommodation in your favorites.` });
  }

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

export const getUserFavoritesInBookmarks = async (
  req: Request,
  res: Response
) => {
  const queryObject = {
    user: req.cookies.userId,
  };

  let result = Favorites.find(queryObject).populate("accommodation");

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const favorites = await result;

  const total = await Favorites.countDocuments(queryObject);
  const numOfPages = Math.ceil(total / limit);

  res.status(200).json({
    total,
    favorites,
    numOfPages,
  });
};

export const removeFromFavorites = async (req: Request, res: Response) => {
  const { id: favoriteId } = req.params;
  req.body.user = req.cookies.userId;

  const favorite = await Favorites.findOne({
    accommodation: favoriteId,
    user: req.body.user,
  });

  if (!favorite) {
    return res
      .status(404)
      .send({ msg: `No favorite accommodation with id: ${favoriteId}` });
  }

  checkPermissions(req.cookies, favorite.user);

  await favorite.remove();

  res.status(200).json({ msg: "Remove from favorites successful." });
};
