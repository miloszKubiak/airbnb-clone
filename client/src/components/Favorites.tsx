import { useContext, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Accommodation } from "./Accommodation";

export const Favorites = () => {
  const { favorites, getUserFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  useEffect(() => {
    getUserFavorites();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-4 min-w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {favorites.map((favorite) => (
          <Accommodation
            key={favorite.accommodation._id}
            _id={favorite.accommodation._id}
            photos={favorite.accommodation.photos!}
            title={favorite.accommodation.title}
            address={favorite.accommodation.address}
            price={favorite.accommodation.price}
            averageRating={favorite.accommodation.averageRating}
            numOfReviews={favorite.accommodation.numOfReviews}
          />
        ))}
      </div>
    </div>
  );
};
