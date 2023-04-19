import { Review, TReview } from "./Review";
import axios from "axios";
import { useEffect, useState } from "react";

type AccommodationReviewsProps = {
  accommodationId: string;
};

export const AccommodationReviews = ({
  accommodationId,
}: AccommodationReviewsProps) => {
  const [reviews, setReviews] = useState<TReview[]>([]);

  const getAllReviews = async () => {
    const response = await axios.get(
      `/accommodations/${accommodationId}/reviews`
    );
    setReviews(response.data.reviews);
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  if (reviews.length === 0) {
    return (
      <div className="mt-10 flex items-center justify-center">
        <h2>There are no reviews</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reviews?.map((review) => (
          <Review
            key={review._id}
            user={review.user.name}
            comment={review.comment}
            rating={review.rating}
            createdAt={review.createdAt}
          />
        ))}
      </div>
      <button className="mt-4 w-1/2 sm:w-1/4 link-primary">add review</button>
    </div>
  );
};
