import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { TReview } from "../components/Review";
import axios from "axios";

type ReviewsContextType = {
  reviews: TReview[];
  setReviews: Dispatch<SetStateAction<TReview[]>>;
  calculatedNumberOfReviews: number;
  calculatedAverageRating: string;
  getAllReviews: (accommodationId: string) => void;
};

type ReviewsContextProviderProps = {
  children: ReactNode;
};

export const ReviewsContext = createContext<ReviewsContextType>(
  {} as ReviewsContextType
);

export const ReviewsContextProvider = ({
  children,
}: ReviewsContextProviderProps) => {
  const [reviews, setReviews] = useState<TReview[]>([]);

  const calculatedNumberOfReviews = reviews.length;
  const calculatedAverageRating = (
    reviews.reduce((total, next) => total + next.rating, 0) /
    calculatedNumberOfReviews
  ).toFixed(2);

  const getAllReviews = async (accommodationId: string) => {
    const response = await axios.get(
      `/accommodations/${accommodationId}/reviews`
    );
    setReviews(response.data.reviews);
  };
  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        setReviews,
        calculatedNumberOfReviews,
        calculatedAverageRating,
        getAllReviews,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};
