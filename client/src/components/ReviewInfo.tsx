import { format } from "date-fns";
import { Stars } from "./Stars";

type ReviewInfoProps = {
  userName: string;
  createdAt: string;
  comment: string;
  rating: number;
};

export const ReviewInfo = ({
  userName,
  createdAt,
  comment,
  rating,
}: ReviewInfoProps) => {
  return (
    <div>
      <p className="font-bold">{userName}</p>
      <p className="text-xs">{format(new Date(createdAt), "dd-MM-yyyy")}</p>
      <p>{comment}</p>
      <Stars rating={rating} />
    </div>
  );
};
