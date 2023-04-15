import { Link } from "react-router-dom";

export type TAccommodation = {
  _id?: string;
  owner?: string;
  ownerName?: string;
  title: string;
  address: string;
  description: string;
  photos?: string[];
  perks: string[];
  extraInfo: string;
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  price: number;
  category: string;
};

type AccommodationProps = {
  _id: string;
  photos: string[];
  title: string;
  address: string;
  price: number;
};

export const Accommodation = ({
  _id,
  photos,
  title,
  address,
  price,
}: AccommodationProps) => {
  return (
    <Link to={"/accommodations/" + _id} className="flex gap-4">
      <div className="flex flex-col gap-1 justify-between">
        <img
          className="object-cover aspect-square rounded-2xl"
          src={photos?.[0]}
          alt="photo of the place"
        />
        <h2 className="text-sm font-bold">{title}</h2>
        <h3 className="text-xs">{address}</h3>
        <p className="font-bold">
          {price} € <span className="text-sm font-medium">per night</span>
        </p>
      </div>
    </Link>
  );
};
