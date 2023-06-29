import { useContext, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Accommodation } from "./Accommodation";
import { Pagination } from "./Pagination";

export const Favorites = () => {
  const {
    favorites,
    setFavorites,
    removeFromFavorites,
    getUserFavoritesInBookmarks,
    favoritesNumOfPages,
    setSelectedId,
    favoritesPage,
    setFavoritesPage,
  } = useContext(FavoritesContext);

  // const [page, setPage] = useState(1);
  // const [numOfPages, setNumOfPages] = useState(1);

  // const getUserFavoritesInBookmarks = async () => {
  //   let url = `/user-favorites/in-bookmark?page=${page}`;
  //   const response = await axios.get(url);
  //   setFavorites(response.data.favorites);
  //   setNumOfPages(response.data.numOfPages);
  // };

  useEffect(() => {
    getUserFavoritesInBookmarks(favoritesPage);
  }, [favoritesPage]);

  if (favorites.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center font-bold text-xl">
        <h2>There are no favorites in bookmarks</h2>
      </div>
    );
  }

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
            onAddOrRemove={() => {
              removeFromFavorites(favorite.accommodation._id!);
              // setPage(1);
            }}
            onSelectedId={() => setSelectedId(favorite.accommodation._id!)}
          />
        ))}
      </div>
      {favoritesNumOfPages >= 2 && (
        <Pagination
          page={favoritesPage}
          setPage={setFavoritesPage}
          numOfPages={favoritesNumOfPages}
        />
      )}
    </div>
  );
};
