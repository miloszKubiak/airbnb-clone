import { useEffect, useState } from "react";
import { TAccommodation } from "./Accommodation";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";

export const AllAccommodations = () => {
  const [accommodations, setAccommodations] = useState<TAccommodation[]>([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`/accommodations?page=${page}`).then((response) => {
      setAccommodations(response.data.accommodations);
      setNumOfPages(response.data.numOfPages);
    });
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
      <Pagination numOfPages={numOfPages} page={page} setPage={setPage} />
    </>
  );
};
