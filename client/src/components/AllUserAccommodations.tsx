import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/all";
import { UserAccommodation } from "./UserAccommodation";
import { useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";
import { TAccommodation } from "./Accommodation";
import { Loader } from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { getUserAccommodations } from "../api/accommodations";

export const AllUserAccommodations = () => {
  // const [userAccommodations, setUserAccommodations] = useState<
  //   TAccommodation[]
  // >([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ["accommodations"],
  //   queryFn: async () => {
  //     const { data } = await axios.get("/accommodations/user-accommodations");
  //     setUserAccommodations(data.accommodations);
  //     setNumOfPages(data.numOfPages);
  //     return data;
  //   },
  // });
  const { isLoading, isError, data } = useQuery({
    queryKey: ["accommodations"],
    queryFn: getUserAccommodations,
  });

  const handleDelete = async (id: string) => {
    console.log("delete");
  };

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="mt-20 flex justify-center items-center">
        <p>There was an error...</p>
      </div>
    );

  if (data.length <= 0)
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
        {data.map((accommodation) => (
          <UserAccommodation
            key={accommodation._id}
            _id={accommodation._id!}
            title={accommodation.title}
            description={accommodation.description}
            photos={accommodation.photos!}
            onDelete={() => handleDelete(accommodation._id!)}
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};
