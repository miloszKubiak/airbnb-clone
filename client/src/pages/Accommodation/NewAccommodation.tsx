import { AccountNavbar } from "../../components";
import { Link } from "react-router-dom";
import {
  BsDoorClosed,
  CgScreen,
  FaParking,
  FaWifi,
  GoCloudUpload,
  MdPets,
  TbToolsKitchen2,
} from "react-icons/all";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accommodationSchema } from "./Accommodation.schema";
import axios from "axios";
import { FormEvent, useState } from "react";

export type TAccommodationFormValues = {
  title: string;
  address: string;
  description: string;
  photos: string[];
  perks: string[];
  extraInfo: string;
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  price: number;
};

export const NewAccommodation = () => {
  const [photoLink, setPhotoLink] = useState("");
  const [addedPhotos, setAddedPhotos] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAccommodationFormValues>({
    resolver: yupResolver(accommodationSchema),
  });

  const handleAddAccommodation = () => {
    console.log("added");
  };

  const addPhotoByLink = async (e: FormEvent) => {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  };

  return (
    <div>
      <AccountNavbar />
      <h1 className="text-center text-xl mt-4">Add new accommodation</h1>
      <form
        className="p-3 mt-2"
        onSubmit={handleSubmit(handleAddAccommodation)}
      >
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Title</h2>
          <p className="text-zinc-500">
            Title for your place. should be short and catchy as in advertisement
          </p>
          <input type="text" placeholder="add title.." {...register("title")} />
          <p className="error">{errors.title?.message}</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Address</h2>
          <p className="text-zinc-500">
            Title for your place. should be short and catchy as in advertisement
          </p>
          <input
            type="text"
            placeholder="add address..."
            {...register("address")}
          />
          <p className="error">{errors.address?.message}</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Photos</h2>
          <p className="text-zinc-500">
            Add photos using link or upload from your device
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={photoLink}
              onChange={(e) => setPhotoLink(e.target.value)}
              placeholder="Add photo using a link to the picture..."
            />
            <button
              className="bg-gray-200 rounded-full px-4"
              onClick={addPhotoByLink}
              disabled={!photoLink}
            >
              Add photo
            </button>
          </div>
          <p className="error">{errors.photos?.message}</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {addedPhotos.length > 0 &&
            addedPhotos.map((link) => (
              <div>
                <img
                  className="rounded-2xl"
                  src={"http://localhost:4000/uploads/" + link}
                  alt=""
                />
              </div>
            ))}
          <label className="flex justify-center items-center border border-black bg-transparent rounded-2xl text-4xl p-2 cursor-pointer">
            <input type="file" className="hidden" />
            <span>
              <GoCloudUpload />
            </span>
          </label>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-zinc-500">Add description of the place</p>
          <textarea {...register("description")} />
          <p className="error">{errors.description?.message}</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Perks</h2>
          <p className="text-zinc-500">Select all the perks of your place</p>
          <div className="mt-2 grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" {...register("perks")} value="wifi" />
              <FaWifi />
              <span>Wifi</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" {...register("perks")} value="tv" />
              <CgScreen />
              <span>TV</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" {...register("perks")} value="kitchen" />
              <TbToolsKitchen2 />
              <span>Kitchen</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" {...register("perks")} value="parking" />
              <FaParking />
              <span className="text-sm">Free&nbsp;parking&nbsp;spot</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" {...register("perks")} value="entrance" />
              <BsDoorClosed />
              <span>Private&nbsp;entrance</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" {...register("perks")} value="pets" />
              <MdPets />
              <span>Pets</span>
            </label>
          </div>
          <p className="error">{errors.perks?.message}</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Extra info</h2>
          <p className="text-zinc-500">House rules, etc.</p>
          <textarea {...register("extraInfo")} />
          <p className="error">{errors.extraInfo?.message}</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Check in&out times</h2>
          <p className="text-zinc-500">
            Add check in and out times, remember to have some time window for
            cleaning the room between guests.
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3 items-center">
            <div>
              <h3 className="text-sm">Check in time</h3>
              <input type="text" placeholder="10:00" {...register("checkIn")} />
              <p className="error">{errors.checkIn?.message}</p>
            </div>
            <div>
              <h3 className="text-sm">Check out time</h3>
              <input
                type="text"
                placeholder="14:00"
                {...register("checkOut")}
              />
              <p className="error">{errors.checkOut?.message}</p>
            </div>
            <div>
              <h3 className="text-sm">Max&nbsp;number&nbsp;of&nbsp;guests</h3>
              <input
                type="number"
                min="1"
                {...register("maxGuests", { minLength: 1 })}
              />
              <p className="error">{errors.maxGuests?.message}</p>
            </div>
            <div>
              <h3 className="text-sm">Price per night</h3>
              <input
                className="bg-zinc-200"
                type="number"
                min="0"
                {...register("price", { minLength: 1 })}
              />
              <p className="error">{errors.price?.message}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="w-6/12 text-xl mt-2 p-2 rounded-full text-white bg-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <Link className="link-primary" to={"/account/accommodations"}>
          Back
        </Link>
      </div>
    </div>
  );
};
