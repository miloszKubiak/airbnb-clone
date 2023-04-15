import { useContext, useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import { Accommodation, TAccommodation } from "./Accommodation";

export const AllAccommodations = () => {
  const { search, sort, category } = useContext(SearchContext);
  const [accommodations, setAccommodations] = useState<TAccommodation[]>([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  if (page > numOfPages) {
    setPage(1);
  }

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
  }, [page, sort, category]);

  if (accommodations.length <= 0)
    return (
      <div className="h-screen flex items-center justify-center font-bold text-xl">
        <h2>There are no accommodations in category {category}.</h2>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-4 min-w-full gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {accommodations.length > 0 &&
          accommodations.map((accommodation) => (
            <Accommodation
              key={accommodation._id}
              _id={accommodation._id!}
              photos={accommodation.photos!}
              title={accommodation.title}
              address={accommodation.address}
              price={accommodation.price}
            />
          ))}
      </div>
      {numOfPages >= 2 && (
        <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};
