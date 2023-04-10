import { Request, Response } from "express";
import Accommodation from "../models/Accommodation";
import { checkPermissions } from "../utils/checkPermissions";

export const addNewAccommodation = async (req: Request, res: Response) => {
  const {
    ownerName,
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

  if (
    !ownerName ||
    !title ||
    !address ||
    !description ||
    !photos ||
    !checkIn ||
    !checkOut ||
    !maxGuests ||
    !price
  ) {
    throw new Error("Please provide all values.");
  }
  req.body.owner = req.cookies.userId;

  const accommodation = await Accommodation.create(req.body);

  res.status(201).json({ accommodation });
};

export const getUserAccommodations = async (req: Request, res: Response) => {
  const queryObject = {
    owner: req.cookies.userId,
  };
  console.log(req.cookies.userId);

  let result = Accommodation.find(queryObject);

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 4;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const accommodations = await result;

  const totalAccommodations = await Accommodation.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalAccommodations / limit);

  res.status(200).json({ accommodations, totalAccommodations, numOfPages });
};

export const getSingleAccommodation = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(await Accommodation.findById(id));
};

export const getAllAccommodations = async (req: Request, res: Response) => {
  const { search, sort } = req.query;

  const queryObject: any = {};

  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }
  let result: any = Accommodation.find(queryObject);

  //sort
  if (sort === "a-z") {
    result = result.sort("title");
  }
  if (sort === "z-a") {
    result = result.sort("-title");
  }
  if (sort === "price-lowest") {
    result = result.sort("price");
  }
  if (sort === "price-highest") {
    result = result.sort("-price");
  }

  //pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 8;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const accommodations = await result;

  const total = await Accommodation.countDocuments(queryObject);
  const numOfPages = Math.ceil(total / limit);

  res.status(200).json({
    total,
    accommodations,
    numOfPages,
  });
};

export const updateAccommodation = async (req: Request, res: Response) => {
  const { id: accommodationId } = req.params;

  const accommodation = await Accommodation.findOne({ _id: accommodationId });
  if (!accommodation)
    throw new Error(`No accommodation with id: ${accommodationId}`);

  const updatedAccommodation = await Accommodation.findByIdAndUpdate(
    { _id: accommodationId },
    req.body,
    { new: true, runValidators: true }
  );

  res.status(200).json({ updatedAccommodation });
};

export const deleteAccommodation = async (req: Request, res: Response) => {
  const { id: accommodationId } = req.params;

  const accommodation = await Accommodation.findOne({ _id: accommodationId });

  if (!accommodation) {
    throw new Error(`No accommodation with id: ${accommodationId}`);
  }
  console.log(req.cookies.userId);
  console.log(accommodation.owner);
  //check permissions
  checkPermissions(req.cookies, accommodation.owner);

  await accommodation.remove();

  res.status(200).json({ msg: "Success! Accommodation removed." });
};
