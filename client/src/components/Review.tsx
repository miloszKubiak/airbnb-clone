import { TAccommodation } from "./Accommodation";
import { TUser, UserContext } from "../context/UserContext";
import { useContext } from "react";

export type TReview = {
  _id?: string;
  accommodation: Pick<TAccommodation, "_id" | "title">;
  comment: string;
  rating: number;
  user: Pick<TUser, "_id" | "name">;
  createdAt: string;
};

type ReviewProps = {
  userName: string;
  comment: string;
  rating: number;
  createdAt: string;
  userId: string;
  onModalOpen: () => void;
};

export const Review = ({
  userName,
  comment,
  rating,
  createdAt,
  userId,
  onModalOpen,
}: ReviewProps) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="px-3 py-2 relative bg-rose-200">
        {user?._id === userId && (
          <div className="bg-emerald-200 p-1 absolute flex gap-4 top-0 right-0">
            <button onClick={() => console.log("edit")}>edit</button>
            <button onClick={onModalOpen}>x</button>
          </div>
        )}
        <div>
          <p>{userName}</p>
          <p>{createdAt}</p>
          <p>{comment}</p>
          <p>{rating}</p>
        </div>
      </div>
    </>
  );
};
