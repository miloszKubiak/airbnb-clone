import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/all";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

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
  averageRating: number;
  numOfReviews: number;
};

type AccommodationProps = {
  _id?: string;
  photos: string[];
  title: string;
  address: string;
  price: number;
  averageRating: number;
  numOfReviews: number;
  onAddOrRemove: (_id: string) => void;
  onSelectedId: (_id: string) => void;
};

export const Accommodation = ({
  _id,
  photos,
  title,
  address,
  price,
  averageRating,
  onAddOrRemove,
  onSelectedId,
}: AccommodationProps) => {
  const { favorites } = useContext(FavoritesContext);

  const isFavorite = favorites.find(
    (favorite) => favorite.accommodation._id === _id
  );

  return (
    <div className="relative">
      <div
        className={`absolute right-0 top-0 mt-4 mr-4
          duration-300 text-2xl text-zinc-700 hover:text-rose-400 ${
            isFavorite && "text-rose-400 "
          } cursor-pointer`}
        onClick={() => {
          onAddOrRemove(_id!);
          onSelectedId(_id!);
          console.log(_id);
        }}
      >
        <FaHeart />
      </div>
      <Link to={"/accommodations/" + _id} className="flex flex-col h-full">
        <img
          className="object-cover aspect-square rounded-2xl"
          src={photos?.[0]}
          alt="photo of the place"
        />
        <div className="h-full flex flex-col justify-between">
          <div className="">
            <div className="flex items-center justify-between">
              <h2 className="text-xs sm:text-sm font-bold">{title}</h2>
              <div className="flex items-center gap-1">
                <p className="flex gap-1 text-xs">
                  <FaStar />
                  66
                </p>
                <p>{averageRating}</p>
              </div>
            </div>
            <h3 className="text-xs">{address}</h3>
          </div>

          <p className="font-bold">
            {price} € <span className="text-sm font-medium">per night</span>
          </p>
        </div>
      </Link>
    </div>
  );
};
