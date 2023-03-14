import { useContext } from "react";
import { UserContext } from "../context/UserContext";

type DescriptionProps = {
  description: string;
  checkIn: string;
  checkOut: string;
  extraInfo: string;
};

export const Description = ({
  description,
  checkIn,
  checkOut,
  extraInfo,
}: DescriptionProps) => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col justify-between">
      <h2 className="font-bold text-xl">
        Accommodation hosted by {user?.name}
      </h2>
      <p className="mb-2">{description}</p>
      <div>
        <h2>Check-in hour: {checkIn}</h2>
        <h2>Checkout hour: {checkOut}</h2>
      </div>
      <p>{extraInfo}</p>
    </div>
  );
};
