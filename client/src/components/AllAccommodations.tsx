import { useContext, useEffect } from "react";
import { Pagination } from "./Pagination";
import { SearchContext } from "../context/SearchContext";
import { Accommodation } from "./Accommodation";
import { FavoritesContext } from "../context/FavoritesContext";
import { UserContext } from "../context/UserContext";
import { Loader } from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { getAllAccommodations } from "../api/accommodations";

export const AllAccommodations = () => {
  const { search, sort, category, page, setPage } = useContext(SearchContext);
  const {
    favorites,
    getUserFavorites,
    addToFavorites,
    removeFromFavorites,
    selectedId,
    setSelectedId,
  } = useContext(FavoritesContext);
  const { user } = useContext(UserContext);

  const favoritesIds = favorites.map((favorite) => favorite.accommodation._id);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["accommodations", page, sort, category],
    queryFn: () => getAllAccommodations(page, sort, category, search),
    keepPreviousData: true,
  });

  const numOfPages = data?.numOfPages || 1;

  const handleAddOrRemove = async (_id: string) => {
    if (user) {
      if (favoritesIds.includes(_id)) {
        removeFromFavorites(_id);
        getUserFavorites();
        setSelectedId(null);
      } else {
        addToFavorites(_id, user!._id!);
        getUserFavorites();
        setSelectedId(null);
      }
    }
  };

  useEffect(() => {
    if (user) {
      getUserFavorites();
    }
  }, [user, category, page, sort, selectedId]);

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="mt-20 flex justify-center items-center">
        <p>There was an error...</p>
      </div>
    );

  if (data?.accommodations.length === 0)
    return (
      <div className="h-screen flex items-center justify-center font-bold text-xl">
        <h2>There are no accommodations in category {category}.</h2>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="py-4 min-w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {data?.accommodations.map((accommodation) => (
          <Accommodation
            key={accommodation._id}
            _id={accommodation._id!}
            photos={accommodation.photos!}
            title={accommodation.title}
            address={accommodation.address}
            price={accommodation.price}
            averageRating={accommodation.averageRating}
            numOfReviews={accommodation.numOfReviews}
            onAddOrRemove={() => handleAddOrRemove(accommodation._id!)}
            onSelectedId={() => {
              setSelectedId(accommodation._id!);
            }}
          />
        ))}
      </div>
      {numOfPages >= 2 && (
        <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};
