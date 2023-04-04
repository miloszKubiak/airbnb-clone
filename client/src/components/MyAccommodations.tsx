import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/all";
import { Accommodation, TAccommodation } from "./Accommodation";
import { useEffect, useState } from "react";
import axios from "axios";

export const MyAccommodations = () => {
  const [accommodations, setAccommodations] = useState<TAccommodation[]>([]);

  const getMyAccommodations = async () => {
    const response = await axios.get("/accommodations/user-accommodations");
    console.log(response);
    setAccommodations(response.data.accommodations);
  };
  useEffect(() => {
    getMyAccommodations();
  }, []);

  return (
    <div className="text-center mt-10">
      <Link className="link-primary" to={"/account/accommodations/new"}>
        <GoPlus />
        Add new
      </Link>
      <div className="mt-8 flex flex-col gap-4">
        {accommodations.length > 0 &&
          accommodations.map((accommodation) => (
            <Accommodation
              key={accommodation._id}
              _id={accommodation._id!}
              title={accommodation.title}
              description={accommodation.description}
              photos={accommodation.photos!}
            />
          ))}
      </div>
    </div>
  );
};
