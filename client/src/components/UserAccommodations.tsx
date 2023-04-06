import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/all";
import { Accommodation, TAccommodation } from "./Accommodation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";

export const UserAccommodations = () => {
  const [userAccommodations, setUserAccommodations] = useState<
    TAccommodation[]
  >([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  const getUserAccommodations = async () => {
    let url = `/accommodations/user-accommodations?page=${page}`;
    const response = await axios.get(url);
    setUserAccommodations(response.data.accommodations);
    setNumOfPages(response.data.numOfPages);
    console.log(response.data);
  };
  useEffect(() => {
    getUserAccommodations();
  }, [page]);

  if (userAccommodations.length <= 0)
    return (
      <div className="mt-10 flex flex-col gap-4 justify-center items-center">
        <Link className="link-primary" to={"/account/accommodations/new"}>
          <GoPlus />
          Add new
        </Link>
        <p className="mt-10">There are no accommodations...</p>
      </div>
    );

  return (
    <div className="text-center mt-10">
      <Link className="link-primary" to={"/account/accommodations/new"}>
        <GoPlus />
        Add new
      </Link>
      <div className="mt-8 flex flex-col gap-4">
        {userAccommodations.length > 0 &&
          userAccommodations.map((accommodation) => (
            <Accommodation
              key={accommodation._id}
              _id={accommodation._id!}
              title={accommodation.title}
              description={accommodation.description}
              photos={accommodation.photos!}
            />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};
