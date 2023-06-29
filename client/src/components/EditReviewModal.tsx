import { ReviewForm } from "./reviewForm/ReviewForm";
import { Modal } from "./modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { TReview } from "../types/review";

type EditReviewModalProps = {
  onClose: () => void;
  reviewModalOpen: boolean;
  reviewId: string | null;
};

export const EditReviewModal = ({
  reviewModalOpen,
  onClose,
  reviewId,
}: EditReviewModalProps) => {
  const [values, setValues] = useState<TReview>();

  const getSingleReview = async () => {
    const response = await axios.get(`/reviews/${reviewId}`);
    setValues(response.data.review);
  };
  console.log(values);

  useEffect(() => {
    if (reviewId !== null) {
      getSingleReview();
    }
  }, [reviewId]);

  const handleEditReview = async () => {
    console.log("edited");
  };

  return (
    <>
      <Modal isOpen={reviewModalOpen}>
        <ReviewForm onClose={onClose} onSubmit={handleEditReview} />
      </Modal>
    </>
  );
};
