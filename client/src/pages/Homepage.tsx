import { useEffect, useState } from "react";
import axios from "axios";
import { TAccommodation } from "../components/Accommodation";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const [accommodations, setAccommodations] = useState<TAccommodation[]>([]);

  useEffect(() => {
    axios.get("/accommodations").then((response) => {
      setAccommodations(response.data);
    });
  }, []);

  return (
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
  );
};
