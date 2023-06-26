import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { ReviewInfo } from "./ReviewInfo";

type ReviewProps = {
  userName: string;
  comment: string;
  rating: number;
  createdAt: string;
  userId: string;
  onModalOpen: () => void;
  onModalEditOpen: () => void;
  reviewId: string;
  onReviewToDelete: (reviewId: string) => void;
};

export const Review = ({
  userName,
  comment,
  rating,
  createdAt,
  userId,
  reviewId,
  onReviewToDelete,
  onModalOpen,
  onModalEditOpen,
}: ReviewProps) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="px-3 py-2 relative bg-zinc-100 rounded-xl">
        {user?._id === userId && (
          <div className="px-3 py-1 absolute flex gap-4 top-0 right-0 rounded-tr-lg">
            <button
              className=""
              onClick={() => {
                onModalEditOpen();
                onReviewToDelete(reviewId);
                console.log(`edit: ${reviewId}`);
              }}
            >
              edit
            </button>
            <button
              className="font-bold text-rose-500 text-xl hover:text-rose-300 duration-300"
              onClick={() => {
                onModalOpen();
                onReviewToDelete(reviewId);
                console.log(`delete: ${reviewId}`);
              }}
            >
              x
            </button>
          </div>
        )}
        <ReviewInfo
          userName={userName}
          createdAt={createdAt}
          comment={comment}
          rating={rating}
        />
      </div>
    </>
  );
};
