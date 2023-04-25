import { Review, TReview } from "./Review";
import { useContext, useState } from "react";
import { ReviewForm } from "./ReviewForm/ReviewForm";
import { Modal, ModalConfirm } from "./Modal";
import { UserContext } from "../context/UserContext";
import { BsDot, FaStar } from "react-icons/all";
import { TAccommodation } from "./Accommodation";

type AccommodationReviewsProps = {
  reviews: TReview[];
  averageRating: number;
  numberOfReviews: number;
  setReviews: any;
  accommodation: TAccommodation;
};

export const AccommodationReviews = ({
  accommodation,
  reviews,
  setReviews,
  averageRating,
  numberOfReviews,
}: AccommodationReviewsProps) => {
  const [reviewModalOpen, setReviewModalOpen] = useState(false); //zmienic nazwe na addoredit modal
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const { user } = useContext(UserContext);
  console.log(reviews);

  const deleteReview = async () => {
    console.log("delete review success");
    setModalDeleteOpen(false);
  };

  if (reviews.length === 0) {
    return (
      <>
        <Modal isOpen={reviewModalOpen}>
          <ReviewForm
            onClose={() => setReviewModalOpen(false)}
            accommodation={accommodation}
            onAddReviewSuccess={(review) =>
              setReviews((prev: any) => [...prev, review])
            }
          />
        </Modal>
        <div className="mt-10 flex flex-col gap-2 items-center justify-center">
          <h2>There are no reviews</h2>
          {user && (
            <button
              onClick={() => setReviewModalOpen(true)}
              className="inline-block w-1/2 sm:w-1/6 mt-8 primary"
            >
              add review
            </button>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <Modal isOpen={reviewModalOpen}>
        <ReviewForm
          onClose={() => setReviewModalOpen(false)}
          accommodation={accommodation}
          onAddReviewSuccess={(review) =>
            setReviews((prev: any) => [...prev, review])
          }
        />
      </Modal>
      <Modal isOpen={modalDeleteOpen}>
        <ModalConfirm
          onClose={() => setModalDeleteOpen(false)}
          onSubmit={deleteReview}
          type={"delete"}
          context={"review"}
        />
      </Modal>
      <div className="mt-8 flex items-center gap-2 text-2xl">
        <div className="flex items-center gap-1">
          <FaStar />
          <p>{averageRating}</p>
        </div>
        <p>
          <BsDot />
        </p>
        <p>{numberOfReviews} reviews</p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reviews?.map((review) => (
            <Review
              key={review._id}
              userName={review.user.name}
              comment={review.comment}
              rating={review.rating}
              createdAt={review.createdAt}
              userId={review.user._id}
              onModalOpen={() => setModalDeleteOpen(true)}
            />
          ))}
        </div>
      </div>
      {user && (
        <button
          onClick={() => setReviewModalOpen(true)}
          className="inline-block w-1/2 sm:w-1/6 mt-8 primary"
        >
          add review
        </button>
      )}
    </>
  );
};
