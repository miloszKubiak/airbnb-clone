import { TAccommodation } from "./accommodation";
import { TUser } from "./user";

export type TReview = {
  _id?: string;
  accommodation: Pick<TAccommodation, "_id" | "title">;
  comment: string;
  rating: number;
  user: Pick<TUser, "_id" | "name">;
  createdAt: string;
};
