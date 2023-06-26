import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { ReviewForm, TReviewFormValues } from "./ReviewForm/ReviewForm";
import { Modal } from "./Modal";
import { toast } from "react-hot-toast";
import { TAccommodation } from "../types/accommodation";
import { TReview } from "../types/review";

type AddReviewProps = {
  accommodation: TAccommodation;
  onClose: () => void;
  onAddReviewSuccess: (review: TReview) => void;
  reviewModalOpen: boolean;
};

export const AddReviewModal = ({
  accommodation,
  onAddReviewSuccess,
  onClose,
  reviewModalOpen,
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
      toast.success("Added review.");
      onAddReviewSuccess({ ...data, _id }); //poprawic, skorzystac z context
      onClose();
      console.log(`reviewID: ${_id}`);
    } catch (error: any) {
      toast.error(error.response.data.msg);
      onClose();
    }
  };
  return (
    <>
      <Modal isOpen={reviewModalOpen}>
        <ReviewForm onClose={onClose} onSubmit={handleAddReview} />
      </Modal>
    </>
  );
};
