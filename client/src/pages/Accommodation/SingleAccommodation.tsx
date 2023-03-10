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

      <Link className="link-primary" to={"/"}>
        back
      </Link>
    </div>
  );
};
