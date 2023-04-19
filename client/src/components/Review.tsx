import { TAccommodation } from "./Accommodation";
import { TUser } from "../context/UserContext";

export type TReview = {
  _id: string;
  accommodation: Pick<TAccommodation, "_id" | "title">;
  comment: string;
  rating: number;
  user: Pick<TUser, "_id" | "name">;
  createdAt: string;
};

type ReviewProps = {
  user: string;
  comment: string;
  rating: number;
  createdAt: string;
};

export const Review = ({ user, comment, rating, createdAt }: ReviewProps) => {
  return (
    <div className="bg-rose-200">
      <p>{user}</p>
      <p>{createdAt}</p>
      <p>{comment}</p>
      <p>{rating}</p>
    </div>
  );
};
