import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/all";
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { UserContext } from "../context/UserContext";

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
};

export const Accommodation = ({
  _id,
  photos,
  title,
  address,
  price,
  averageRating,
  onAddOrRemove,
}: // onAddOrRemove,
AccommodationProps) => {
  const { removeFromFavorites, addToFavorites, favorites } =
    useContext(FavoritesContext);
  const { user } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const isFound = favorites.find(
    (favorite) => favorite.accommodation._id === _id
  );
  console.log(isFound);
  // const handleAddOrRemove = async (_id: string) => {
  //   if (isFound) {
  //     removeFromFavorites(_id);
  //     setIsFavorite(false);
  //   } else {
  //     addToFavorites(_id, user!._id!);
  //     setIsFavorite(true);
  //   }
  // };

  return (
    <div className="relative">
      <div
        className={`absolute right-0 top-0 mt-4 mr-4
          duration-300 text-2xl text-zinc-700 hover:text-rose-400 ${
            isFound && "text-rose-400 "
          } cursor-pointer`}
        onClick={() => {
          onAddOrRemove(_id!);
          // handleAddOrRemove(_id!);
          console.log(isFavorite);
        }}
        //selected, if true add to favorites else remove
      >
        <FaHeart />
      </div>
      <Link to={"/accommodations/" + _id} className="flex gap-4">
        <div className="flex flex-col gap-1 justify-between">
          <img
            className="object-cover aspect-square rounded-2xl"
            src={photos?.[0]}
            alt="photo of the place"
          />
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
          <p className="font-bold">
            {price} € <span className="text-sm font-medium">per night</span>
          </p>
        </div>
      </Link>
    </div>
  );
};
