import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { TReview } from "./Review";
import axios from "axios";
import { ReviewForm, TReviewFormValues } from "./ReviewForm/ReviewForm";
import { TAccommodation } from "./Accommodation";

type AddReviewProps = {
  accommodation: TAccommodation;
  onClose: () => void;
  onAddReviewSuccess: (review: TReview) => void;
};

export const AddReview = ({
  accommodation,
  onAddReviewSuccess,
  onClose,
}: AddReviewProps) => {
  const { user } = useContext(UserContext);

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const handleAddReview = async ({ comment, rating }: TReviewFormValues) => {
    const data: TReview = {
      accommodation: {
        _id: accommodation._id,
        title: accommodation.title,
      },
      user: {
        _id: user!._id,
        name: user!.name,
      },
      comment,
      rating,
      createdAt: today.toISOString(),
    };
    try {
      const response = await axios.post(`/reviews`, data);
      const _id = response.data.review._id;
      alert("Added review.");
      onAddReviewSuccess({ ...data, _id });
      onClose();
      console.log(`reviewID: ${_id}`);
    } catch (error: any) {
      alert(error.response.data.msg);
      onClose();
    }
  };
  return (
    <>
      <ReviewForm onClose={onClose} onSubmit={handleAddReview} />
    </>
  );
};
