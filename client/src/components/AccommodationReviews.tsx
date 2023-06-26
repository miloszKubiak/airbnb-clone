import { Review } from "./Review";
import { useContext, useState } from "react";
import { Modal, ModalConfirm } from "./Modal";
import { UserContext } from "../context/UserContext";
import { BsDot, FaStar } from "react-icons/all";
import { AddReviewModal } from "./AddReviewModal";
import { ReviewsContext } from "../context/ReviewsContext";
import { Toaster } from "react-hot-toast";
import { TAccommodation } from "../types/accommodation";
import { useQuery } from "@tanstack/react-query";
import { getAllReviews } from "../api/reviews";
import { EditReviewModal } from "./EditReviewModal";

type AccommodationReviewsProps = {
  averageRating: number;
  numberOfReviews: number;
  accommodation: TAccommodation;
};

export const AccommodationReviews = ({
  accommodation,
  averageRating,
  numberOfReviews,
}: AccommodationReviewsProps) => {
  const [reviewModalOpen, setReviewModalOpen] = useState(false); //zmienic nazwe na addoredit modal
  const { user } = useContext(UserContext);
  const {
    reviews,
    setReviews,
    deleteReview,
    selectedReviewId,
    setSelectedReviewId,
    modalDeleteOpen,
    setModalDeleteOpen,
  } = useContext(ReviewsContext);

  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ["reviews"],
  //   queryFn: () => getAllReviews(accommodation),
  // });

  // if (isError)
  //   return (
  //     <div className="mt-20 flex justify-center items-center">
  //       <p>There was an error...</p>
  //     </div>
  //   );
  console.log(selectedReviewId);

  if (reviews.length === 0) {
    return (
      <>
        <AddReviewModal
          reviewModalOpen={reviewModalOpen}
          accommodation={accommodation}
          onClose={() => setReviewModalOpen(false)}
          onAddReviewSuccess={
            (review) => setReviews((prev) => [...prev, review]) // moze context?
          }
        />
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
      <AddReviewModal
        accommodation={accommodation}
        onClose={() => setReviewModalOpen(false)}
        onAddReviewSuccess={(review) => setReviews((prev) => [...prev, review])}
        reviewModalOpen={reviewModalOpen}
      />
      {/*<EditReviewModal*/}
      {/*  onClose={() => setReviewModalOpen(false)}*/}
      {/*  reviewModalOpen={reviewModalOpen}*/}
      {/*  reviewId={selectedReviewId}*/}
      {/*/>*/}
      <Modal isOpen={modalDeleteOpen}>
        <ModalConfirm
          onClose={() => {
            setModalDeleteOpen(false);
            setSelectedReviewId(null);
          }}
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
        <Toaster position="top-center" reverseOrder={false} />
        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reviews?.map((review) => (
            <Review
              onReviewToDelete={() => {
                setSelectedReviewId(review._id!);
              }}
              reviewId={review._id!}
              key={review._id}
              userName={review.user.name}
              comment={review.comment}
              rating={review.rating}
              createdAt={review.createdAt}
              userId={review.user._id}
              onModalOpen={() => setModalDeleteOpen(true)}
              onModalEditOpen={() => setReviewModalOpen(true)}
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
