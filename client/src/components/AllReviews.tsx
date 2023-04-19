import { Review } from "./Review";

export const AllReviews = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Review />
      <Review />
      <Review />
      <Review />
    </div>
  );
};
