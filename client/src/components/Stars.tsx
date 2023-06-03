import { FaStar } from "react-icons/all";

type StarsProps = {
  rating: number;
};

export const Stars = ({ rating }: StarsProps) => {
  return (
    <div className="flex">
      {Array(rating)
        .fill(undefined)
        .map((star, index) => (
          <p className="text-yellow-400" key={index}>
            <FaStar />
          </p>
        ))}
    </div>
  );
};
