import { useContext, useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import { Accommodation, TAccommodation } from "./Accommodation";
import { FavoritesContext } from "../context/FavoritesContext";
import { UserContext } from "../context/UserContext";

export const AllAccommodations = () => {
  const { search, sort, category, page, setPage } = useContext(SearchContext);
  const { favorites, getUserFavorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { user } = useContext(UserContext);
  const [accommodations, setAccommodations] = useState<TAccommodation[]>([]);
  const [numOfPages, setNumOfPages] = useState(1);

  const getAllAccommodations = async () => {
    let url = `/accommodations?page=${page}&sort=${sort}&category=${category}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    const response = await axios.get(url);
    setAccommodations(response.data.accommodations);
    setNumOfPages(response.data.numOfPages);
  };

  useEffect(() => {
    getAllAccommodations();
  }, [category, page, sort]);

  useEffect(() => {
    getUserFavorites();
  }, [user]);

  console.log(favorites);

  if (accommodations.length === 0)
    return (
      <div className="h-screen flex items-center justify-center font-bold text-xl">
        <h2>There are no accommodations in category {category}.</h2>
      </div>
    );

  // const isFound = favorites.find((favorite) => favorite.accommodation._id);
  // console.log(isFound);
  // let favoritesIDsArray = favorites.map(
  //   (favorite) => favorite.accommodation._id
  // );
  // console.log(favoritesIDsArray);

  // const dupa = favorites.filter((favorite) => favorite.accommodation._id);
  // console.log(dupa);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-4 min-w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {accommodations.map((accommodation) => (
          <Accommodation
            key={accommodation._id}
            _id={accommodation._id!}
            photos={accommodation.photos!}
            title={accommodation.title}
            address={accommodation.address}
            price={accommodation.price}
            averageRating={accommodation.averageRating}
            numOfReviews={accommodation.numOfReviews}
            // onAddOrRemove={() => handleAddOrRemove(accommodation._id!)}
          />
        ))}
      </div>
      {numOfPages >= 2 && (
        <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};
