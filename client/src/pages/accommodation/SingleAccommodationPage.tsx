import {
  AddressLink,
  AccommodationReviews,
  Description,
  Perks,
  PhotosGallery,
  ReservationWidget,
  Stats,
  Loader,
  Map,
} from "../../components";
import { Link, Navigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ReviewsContext } from "../../context/ReviewsContext";
import { TAccommodation } from "../../types/accommodation";

export const SingleAccommodationPage = () => {
  const { calculatedNumberOfReviews, calculatedAverageRating, getAllReviews } =
    useContext(ReviewsContext);
  const { id: accommodationId } = useParams();
  const [accommodation, setAccommodation] = useState<TAccommodation | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const addressLink = "https://maps.google.com/?q=" + accommodation?.address;

  const getAccommodation = async () => {
    setLoading(true);
    const response = await axios.get(`/accommodations/${accommodationId}`);
    setAccommodation(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllReviews(accommodationId!);
  }, []);

  useEffect(() => {
    getAccommodation();
  }, [accommodationId]);

  if (!accommodationId) return <Navigate to={"/"} />;

  if (loading) return <Loader />;

  if (!accommodation)
    return (
      <div>
        <h2>"nothing to display"</h2>
      </div>
    );

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-between mt-4 p-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">{accommodation.title}</h1>
            <p>{accommodation.category}</p>
            <div className="flex items-center gap-1">
              <Stats
                numberOfReviews={calculatedNumberOfReviews}
                averageRating={+calculatedAverageRating}
              />
              <AddressLink address={accommodation.address} />
            </div>
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
          <Map />
          <AccommodationReviews
            accommodation={accommodation}
            averageRating={+calculatedAverageRating}
            numberOfReviews={calculatedNumberOfReviews}
          />
        </div>
        <Link to={"/"} className="link-primary my-6">
          Back
        </Link>
      </div>
    </>
  );
};
