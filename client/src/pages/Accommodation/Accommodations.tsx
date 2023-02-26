import { AccountNavbar } from "../../components";
import { Link, useParams } from "react-router-dom";
import { GoPlus } from "react-icons/all";
import { useEffect, useState } from "react";
import axios from "axios";

export type TAccommodation = {
  _id?: string;
  title: string;
  address: string;
  description: string;
  photos?: string[];
  perks: string[];
  extraInfo: string;
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  price: number;
};

export const Accommodations = () => {
  const [accommodations, setAccommodations] = useState<TAccommodation[] | []>(
    []
  );

  useEffect(() => {
    axios.get("/accommodations").then(({ data }) => setAccommodations(data));
  }, []);

  return (
    <div>
      <AccountNavbar />
      <div className="text-center mt-10">
        <Link className="link-primary" to={"/account/accommodations/new"}>
          <GoPlus />
          Add new
        </Link>
        <div className="mt-8 flex flex-col gap-4">
          {accommodations.length > 0 &&
            accommodations.map((accommodation) => (
              <Link
                to={`/account/accommodations/${accommodation._id}`}
                className="p-4 flex gap-4 bg-gray-100 rounded-2xl cursor-pointer"
                key={accommodation._id}
              >
                <div className="w-32 h-32 bg-gray-300 grow shrink-0">
                  {accommodation.photos!.length > 0 && (
                    <img
                      src={accommodation.photos![0]}
                      alt="main photo of the accommodation"
                    />
                  )}
                </div>
                <div className="grow-0 shrink">
                  <h2 className="text-xl font-bold">{accommodation.title}</h2>
                  <p>{accommodation.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
