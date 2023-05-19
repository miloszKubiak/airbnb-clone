import { BsDot, FaStar } from "react-icons/all";

type StatsProps = {
  numberOfReviews: number;
  averageRating: number;
};

export const Stats = ({ numberOfReviews, averageRating }: StatsProps) => {
  return (
    <div className="flex items-center gap-1 text-xs sm:text-sm">
      <div className="flex items-center gap-1">
        <FaStar />
        <p>{+averageRating || 0}</p>
      </div>
      <p>
        <BsDot />
      </p>
      <div className="flex items-center gap-1">
        <p>{numberOfReviews}</p>
        <p>reviews</p>
      </div>
      <p>
        <BsDot />
      </p>
    </div>
  );
};
