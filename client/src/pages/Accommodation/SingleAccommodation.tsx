import { AccountNavbar } from "../../components";
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
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/accommodations/${id}`)
      .then((response) => setAccommodation(response.data));
  }, [id]);

  if (!accommodation) return "nothing to display";

  console.log(accommodation);
  return (
    <div className="flex flex-col justify-between mt-10 bg-zinc-100">
      <div>
        <h1>{accommodation.title}</h1>
        <div className="flex items-center gap-2 font-bold text-sm underline my-2">
          <GoLocation />
          <a
            target="_blank"
            href={"https://maps.google.com/?q=" + accommodation.address}
          >
            {accommodation.address}
          </a>
        </div>
      </div>

      {showPhotos ? (
        <div className="absolute inset-0 bg-black text-white min-h-screen">
          <div className="">
            <button
              className="fixed bg-zinc-200 text-black px-2 py-1 rounded-md"
              onClick={() => setShowPhotos(false)}
            >
              Close X
            </button>
            {/********in the future place gallery here********/}
            <div className="bg-black">
              <img src={accommodation.photos![0]} alt="photo" />
            </div>
            <div className="bg-black">
              <img src={accommodation.photos![0]} alt="photo" />
            </div>
            <div className="bg-black">
              <img src={accommodation.photos![0]} alt="photo" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
            <img
              onClick={() => setShowPhotos(true)}
              className="cursor-pointer"
              src={accommodation.photos![0]}
              alt="photo of the place"
            />
            <div>
              <img
                onClick={() => setShowPhotos(true)}
                className="cursor-pointer"
                src={accommodation.photos![0]}
                alt="photo of the place"
              />
              <img
                onClick={() => setShowPhotos(true)}
                className="cursor-pointer"
                src={accommodation.photos![0]}
                alt="photo of the place"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between gap-4">
        <div className="flex flex-col justify-between gap-4">
          <div>{accommodation.description}</div>
          <div>
            <div>Check-in hour: {accommodation.checkIn}</div>
            <div>Checkout hour: {accommodation.checkOut}</div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 bg-white mr-4">
          <p className="text-center">
            Price: {accommodation.price} € / per night
          </p>
          <div className="flex justify-between gap-2">
            <input type="date" />
            <input type="date" />
          </div>
          <div>
            <p className="text-center">Number of guests</p>
            <input type="number" min="1" max={accommodation.maxGuests} />
          </div>
        </div>
      </div>
      <div>
        <h2>Perks:</h2>
        <div>
          {accommodation.perks.map((perk) => (
            <p>{perk}</p>
          ))}
        </div>
      </div>

      <div>
        <p>{accommodation.extraInfo}</p>
      </div>

      <Link className="link-primary" to={"/"}>
        back
      </Link>
    </div>
  );
};
