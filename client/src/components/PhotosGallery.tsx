import { BsChevronLeft, GrGallery } from "react-icons/all";
import { useState } from "react";

export const PhotosGallery = ({ photos }: any) => {
  const [showPhotos, setShowPhotos] = useState(false);

  if (showPhotos) {
    return (
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
            <img src={photos[0]} alt="photo" />
          </div>
          <div className="bg-white">
            <img src={photos[0]} alt="photo" />
          </div>
          <div className="bg-white">
            <img src={photos[0]} alt="photo" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
        <img
          onClick={() => setShowPhotos(true)}
          className="cursor-pointer h-full"
          src={photos[0]}
          alt="photo of the place"
        />
        <div className="grid gap-2">
          <img
            onClick={() => setShowPhotos(true)}
            className="cursor-pointer"
            src={photos[0]}
            alt="photo of the place"
          />
          <img
            onClick={() => setShowPhotos(true)}
            className="cursor-pointer"
            src={photos[0]}
            alt="photo of the place"
          />
        </div>
        <button
          onClick={() => setShowPhotos(true)}
          className="flex gap-2 items-center absolute bottom-4 right-4 py-2 px-4 bg-white rounded-xl
              text-xs lg:text-sm md:text-sm"
        >
          <p>
            <GrGallery />
          </p>
          Show all photos
        </button>
      </div>
    </div>
  );
};
