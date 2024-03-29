import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/all";
import { UserAccommodation } from "./UserAccommodation";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { Loader } from "./Loader";
import {
  useDeleteAccommodation,
  useGetUserAccommodations,
} from "../api/accommodations";

export const AllUserAccommodations = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useGetUserAccommodations(page);
  const { mutate: deleteAccommodation, isLoading: deleteAccommodationLoading } =
    useDeleteAccommodation();

  const numOfPages = data?.numOfPages || 1;

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="mt-20 flex justify-center items-center">
        <p>There was an error...</p>
      </div>
    );

  if (!data)
    return (
      <div className="mt-20 flex justify-center items-center">
        <p>There are no accommodations...</p>
      </div>
    );

  if (data.accommodations.length <= 0)
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
        {data.accommodations.map((accommodation) => (
          <UserAccommodation
            key={accommodation._id}
            _id={accommodation._id!}
            title={accommodation.title}
            description={accommodation.description}
            photos={accommodation.photos!}
            onDelete={() => deleteAccommodation(accommodation._id!)}
            disabled={deleteAccommodationLoading}
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};
