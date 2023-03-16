import {
  AddressLink,
  Description,
  Perks,
  PhotosGallery,
  ReservationWidget,
} from "../../components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TAccommodation } from "./Accommodations";
import axios from "axios";
import { GoLocation } from "react-icons/all";

export const SingleAccommodation = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState<TAccommodation | null>(
    null
  );

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/accommodations/${id}`)
      .then((response) => setAccommodation(response.data));
  }, [id]);

  if (!accommodation)
    return (
      <div>
        <h2>"nothing to display"</h2>
      </div>
    );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-between mt-10 bg-zinc-100 p-4">
        <div>
          <h1>{accommodation.title}</h1>
          <AddressLink address={accommodation.address} />
        </div>
        <PhotosGallery photos={accommodation.photos} />
        <div className="flex justify-between gap-4 mt-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Description
              description={accommodation.description}
              checkOut={accommodation.checkOut}
              checkIn={accommodation.checkIn}
              extraInfo={accommodation.extraInfo}
              ownerName={accommodation.ownerName!}
            />
            <div className="flex justify-center">
              <ReservationWidget
                price={accommodation.price}
                maxGuests={accommodation.maxGuests}
                id={accommodation._id!}
                title={accommodation.title}
              />
            </div>
          </div>
        </div>
        <Perks perks={accommodation.perks} />
      </div>
      <Link to={"/"} className="link-primary my-6">
        Back
      </Link>
    </div>
  );
};
