import { AccountNavbar } from "../../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  BsDoorClosed,
  CgScreen,
  FaParking,
  FaWifi,
  MdPets,
  TbToolsKitchen2,
} from "react-icons/all";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accommodationSchema } from "./Accommodation.schema";
import { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { categories } from "../../../utils/categories";
import {
  getAccommodation,
  useCreateAccommodation,
  useEditAccommodation,
  useGetAccommodation,
} from "../../../api/accommodations";
import { TAccommodationFormValues } from "../../../types/accommodation";

export const AccommodationForm = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { mutate: createAccommodation, isLoading: createAccommodationLoading } =
    useCreateAccommodation();
  const { mutate: editAccommodation } = useEditAccommodation();

  useEffect(() => {
    if (!id) return;
    axios.get(`/accommodations/${id}`).then((response) => {
      const { data } = response;
      Object.keys(data).forEach((field: any) => setValue(field, data[field]));
    });
  }, [id]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TAccommodationFormValues>({
    resolver: yupResolver(accommodationSchema),
    //wczytac getem accommodation i do default values przypisac wartosci wczytane
    defaultValues: {
      title: "",
      address: "",
      description: "",
      photos: [],
      perks: [],
      category: "houses",
      extraInfo: "",
      checkIn: "",
      checkOut: "",
      maxGuests: 1,
      price: 1,
    },
    // defaultValues: {
    //   title: data?.title,
    //   address: data?.address,
    //   description: data?.description,
    //   photos: data?.photos,
    //   perks: data?.perks,
    //   category: data?.category,
    //   extraInfo: data?.extraInfo,
    //   checkIn: data?.checkIn,
    //   checkOut: data?.checkOut,
    //   maxGuests: data?.maxGuests,
    //   price: data?.price,
    // },
  });

  const handleSaveAccommodation = async ({
    title,
    address,
    description,
    photos,
    perks,
    category,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  }: TAccommodationFormValues) => {
    const formData = {
      ownerName: user?.name,
      title,
      address,
      description,
      photos,
      perks,
      category,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };
    if (id) {
      editAccommodation({ id: id, accommodation: formData });
    } else {
      createAccommodation(formData);
    }
  };

  return (
    <div>
      <AccountNavbar />
      <h1 className="text-center text-xl mt-4">
        {id ? "Edit accommodation" : "Add new accommodation"}
      </h1>
      <form
        className="p-3 mt-2"
        onSubmit={handleSubmit(handleSaveAccommodation)}
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
          <p className="text-zinc-500">Upload any photos from your device</p>
          {/*<FileInput name="photos" control={control} />*/}
          <input
            type="text"
            placeholder="add link to the photo..."
            {...register("photos")}
          />
          <p className="error">{errors.photos?.message}</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-zinc-500">Add description of the place</p>
          <textarea className="h-36" {...register("description")} />
          <p className="error">{errors.description?.message}</p>
        </div>
        <div className="my-4 px-4 flex flex-col gap-1 items-start">
          <h2 className="text-xl font-bold">Category</h2>
          <p className="text-zinc-500">Select category of the accommodation</p>
          <select
            className="border my-1 py-2 px-4 mb-2 rounded-xl"
            {...register("category")}
          >
            {categories.map((category) => (
              <option key={category.name}>{category.name}</option>
            ))}
          </select>
          <p className="error">{errors.extraInfo?.message}</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Perks</h2>
          <p className="text-zinc-500">Select all the perks of your place</p>
          <div className="mt-2 grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-xs sm:text-sm">
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
              <span>Free&nbsp;parking&nbsp;spot</span>
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
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Extra info</h2>
          <p className="text-zinc-500">House rules, etc.</p>
          <textarea className="h-28" {...register("extraInfo")} />
          <p className="error">{errors.extraInfo?.message}</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Check in&out times</h2>
          <p className="text-zinc-500">
            Add check in and out times, remember to have some time window for
            cleaning the room between guests.
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3 items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-sm">Check in time</h3>
              <input type="text" {...register("checkIn")} />
              <p className="error">{errors.checkIn?.message}</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-sm">Check out time</h3>
              <input type="text" {...register("checkOut")} />
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
            disabled={createAccommodationLoading}
          >
            Save
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <Link className="link-primary" to={"/account/my-accommodations"}>
          Back
        </Link>
      </div>
    </div>
  );
};
