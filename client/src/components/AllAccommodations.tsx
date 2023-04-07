import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
import { TAccommodation } from "./Accommodation";

export const AllAccommodations = () => {
  const { search } = useContext(SearchContext);
  const [accommodations, setAccommodations] = useState<TAccommodation[]>([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  const getAllAccommodations = async () => {
    let url = `/accommodations?page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    const response = await axios.get(url);
    setAccommodations(response.data.accommodations);
    setNumOfPages(response.data.numOfPages);
  };

  useEffect(() => {
    getAllAccommodations();
  }, [page]);

  return (
    <>
      <div className="mt-10 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {accommodations.length > 0 &&
          accommodations.map((accommodation) => (
            <Link
              to={"/accommodations/" + accommodation._id}
              key={accommodation._id}
              className="flex gap-4"
            >
              <div className="flex flex-col justify-between">
                <img
                  className="object-cover aspect-square rounded-2xl"
                  src={accommodation.photos?.[0]}
                  alt="photo of the place"
                />
                <h2 className="text-sm font-bold">{accommodation.title}</h2>
                <h3 className="text-xs">{accommodation.address}</h3>
                <p className="font-bold">
                  {accommodation.price} €{" "}
                  <span className="text-sm font-medium">per night</span>
                </p>
              </div>
            </Link>
          ))}
      </div>
      <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
    </>
  );
};
