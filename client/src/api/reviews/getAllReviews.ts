import axios from "axios";
import { TReview } from "../../types/review";
import { TAccommodation } from "../../types/accommodation";

type AllReviewsResponse = {
  count: number;
  reviews: TReview[];
};

export const getAllReviews = async (
  accommodationId: TAccommodation
): Promise<AllReviewsResponse> => {
  const { data } = await axios.get(
    `/accommodations/${accommodationId}/reviews`
  );
  return data;
};
