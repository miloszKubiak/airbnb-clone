import { BsDot, FaStar } from "react-icons/all";

type StatsProps = {
  numberOfReviews: number;
  averageRating: number;
};

export const Stats = ({ numberOfReviews, averageRating }: StatsProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-1">
        <FaStar />
        <p>{averageRating}</p>
      </div>
      <p>
        <BsDot />
      </p>
      <p>{numberOfReviews} reviews</p>
      <p>
        <BsDot />
      </p>
    </div>
  );
};
