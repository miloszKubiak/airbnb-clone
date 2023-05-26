import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/all";
import { UserAccommodation } from "./UserAccommodation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";
import { TAccommodation } from "./Accommodation";
import { toast } from "react-hot-toast";
import { Loader } from "./Loader";

export const AllUserAccommodations = () => {
  const [userAccommodations, setUserAccommodations] = useState<
    TAccommodation[]
  >([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUserAccommodations = async () => {
    setLoading(true);
    let url = `/accommodations/user-accommodations?page=${page}`;
    const response = await axios.get(url);
    setLoading(false);
    setUserAccommodations(response.data.accommodations);
    setNumOfPages(response.data.numOfPages);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`/accommodations/${id}`);
    setUserAccommodations(
      userAccommodations.filter((accommodation) => accommodation._id !== id)
    );
    toast.success("Accommodation deleted successfully!");
  };

  useEffect(() => {
    getUserAccommodations();
  }, [page]);

  if (loading) return <Loader />;

  if (userAccommodations!.length <= 0)
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
