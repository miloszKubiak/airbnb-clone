import {
  AddressLink,
  AccommodationReviews,
  Description,
  Location,
  Perks,
  PhotosGallery,
  ReservationWidget,
} from "../../components";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TAccommodation } from "../../components/Accommodation";

export const SingleAccommodationPage = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState<TAccommodation | null>(
    null
  );

  const getAccommodation = async () => {
    const response = await axios.get(`/accommodations/${id}`);
    setAccommodation(response.data);
  };

  useEffect(() => {
    getAccommodation();
  }, [id]);

  if (!id) return <Navigate to={"/"} />;

  if (!accommodation)
    return (
      <div>
        <h2>"nothing to display"</h2>
      </div>
    );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-between mt-4 p-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">{accommodation.title}</h1>
          <p>{accommodation.category}</p>
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
        <Location />
        <AccommodationReviews accommodationId={id} />
      </div>
      <Link to={"/"} className="link-primary my-6">
        Back
      </Link>
    </div>
  );
};
