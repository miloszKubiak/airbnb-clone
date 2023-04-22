import {
  AddressLink,
  AccommodationReviews,
  Description,
  Location,
  Perks,
  PhotosGallery,
  ReservationWidget,
  Stats,
} from "../../components";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TAccommodation } from "../../components/Accommodation";
import { TReview } from "../../components/Review";

export const SingleAccommodationPage = () => {
  const { id: accommodationId } = useParams();
  const [accommodation, setAccommodation] = useState<TAccommodation | null>(
    null
  );
  const [reviews, setReviews] = useState<TReview[]>([]);

  const calculatedNumberOfReviews = reviews.length;
  const calculatedAverageRating = (
    reviews.reduce((total, next) => total + next.rating, 0) /
    calculatedNumberOfReviews
  ).toFixed(2);

  const getAccommodation = async () => {
    const response = await axios.get(`/accommodations/${accommodationId}`);
    setAccommodation(response.data);
  };
  const getAllReviews = async () => {
    const response = await axios.get(
      `/accommodations/${accommodationId}/reviews`
    );
    setReviews(response.data.reviews);
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  useEffect(() => {
    getAccommodation();
  }, [accommodationId]);

  if (!accommodationId) return <Navigate to={"/"} />;

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
              {/*testowe wartosci*/}
              <Stats
                numberOfReviews={calculatedNumberOfReviews}
                averageRating={Number(calculatedAverageRating)}
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
          <Location />
          <AccommodationReviews
            reviews={reviews}
            accommodationId={accommodationId}
            averageRating={Number(calculatedAverageRating)}
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
