import { AccountNavbar } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TAccommodation } from "./Accommodations";
import axios from "axios";
import { BsChevronLeft, GoLocation } from "react-icons/all";
import { perks } from "../../utils/perks";

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
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-between mt-10 bg-zinc-100 p-4">
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
          <div className="absolute inset-0 bg-white text-white min-h-screen">
            <div className="fixed bg-white w-full py-4">
              <button
                className="text-center text-black p-2 ml-4 rounded-full text-xl hover:bg-zinc-300 duration-300"
                onClick={() => setShowPhotos(false)}
              >
                <BsChevronLeft />
              </button>
            </div>

            <div className="bg-white w-full mt-10 p-10 flex flex-col justify-center items-center gap-4">
              {/********in the future place gallery here********/}
              <div className="bg-white">
                <img src={accommodation.photos![0]} alt="photo" />
              </div>
              <div className="bg-white">
                <img src={accommodation.photos![0]} alt="photo" />
              </div>
              <div className="bg-white">
                <img src={accommodation.photos![0]} alt="photo" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
              <img
                onClick={() => setShowPhotos(true)}
                className="cursor-pointer h-full"
                src={accommodation.photos![0]}
                alt="photo of the place"
              />
              <div className="grid gap-2">
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
                <button className="absolute">Show all photos</button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between gap-4 mt-8">
          <div className="flex flex-1 flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col justify-between">
              <p className="mb-2">{accommodation.description}</p>
              <h2>Check-in hour: {accommodation.checkIn}</h2>
              <h2>Checkout hour: {accommodation.checkOut}</h2>
            </div>

            <div className="flex flex-none flex-col justify-center p-4 bg-white border-2 border-zinc-300 rounded-2xl">
              <p className="text-left">
                Price: {accommodation.price} € / per night
              </p>
              <div className="flex justify-between gap-4 my-4">
                <input
                  className="p-1 border-2 border-zinc-300 rounded-md"
                  type="date"
                />
                <input
                  className="p-1 border-2 border-zinc-300 rounded-md"
                  type="date"
                />
              </div>
              <div>
                <p className="text-center">Number of guests</p>
                <input
                  type="number"
                  value={1}
                  min="1"
                  max={accommodation.maxGuests}
                />
                <button className="primary">Reserve</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2>Perks:</h2>
          <div className="flex flex-col md:flex-row lg:flex-row gap-2">
            {accommodation.perks.map((perk) => (
              <div>
                <p>{perk}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p>{accommodation.extraInfo}</p>
        </div>
      </div>
      <Link to={"/"} className="link-primary my-6">
        Back
      </Link>
    </div>
  );
};
