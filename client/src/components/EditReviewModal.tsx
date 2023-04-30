import { ReviewForm } from "./ReviewForm/ReviewForm";
import { Modal } from "./Modal";
import { TAccommodation } from "./Accommodation";
import { TReview } from "./Review";
import axios from "axios/index";
import { useState } from "react";
import { TFormValues } from "../pages/Register/Register";

type EditReviewModalProps = {
  onClose: () => void;
  // onEditReviewSuccess: (review: TReview) => void;
  reviewModalOpen: boolean;
};

export const EditReviewModal = ({
  reviewModalOpen,
  onClose,
}: EditReviewModalProps) => {
  const [values, setValues] = useState<TFormValues>();

  // const getSingleReview = async (id: string) => {
  //   const response = await axios.get(`/reviews/${id}`);
  //   console.log(response.data);
  //   setValues(response.data.review._id);
  // };

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
