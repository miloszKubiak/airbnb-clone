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

export const NewAccommodation = () => {
  return (
    <div>
      <AccountNavbar />
      <h1 className="text-center text-xl mt-4">Add new accommodation</h1>
      <form className="p-3 mt-2" onSubmit={() => console.log("submit")}>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Title</h2>
          <p className="text-zinc-500">
            Title for your place. should be short and catchy as in advertisement
          </p>
          <input type="text" placeholder="add title.." />
          <p>error</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Address</h2>
          <p className="text-zinc-500">
            Title for your place. should be short and catchy as in advertisement
          </p>
          <input type="text" placeholder="add address..." />
          <p>error</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Photos</h2>
          <p className="text-zinc-500">
            Add photos using link or upload from your device
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Add photo using a link to the picture..."
            />
            <button className="bg-gray-200 rounded-full px-4">Add photo</button>
          </div>
          <p>error</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="flex justify-center border border-black bg-transparent rounded-2xl text-2xl p-6">
            <span>
              <GoCloudUpload />
            </span>
          </button>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-zinc-500">Add description of the place</p>
          <textarea />
          <p>error</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Perks</h2>
          <p className="text-zinc-500">Select all the perks of your place</p>
          <div className="mt-2 grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <FaWifi />
              <span>Wifi</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <CgScreen />
              <span>TV</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <TbToolsKitchen2 />
              <span>Kitchen</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <FaParking />
              <span className="text-sm">Free&nbsp;parking&nbsp;spot</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <BsDoorClosed />
              <span>Private&nbsp;entrance</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <MdPets />
              <span>Pets</span>
            </label>
          </div>
          <p>error</p>
        </div>
        <div className="my-4 px-4">
          <h2 className="text-xl font-bold">Extra info</h2>
          <p className="text-zinc-500">House rules, etc.</p>
          <textarea />
          <p>error</p>
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
              <input type="text" placeholder="10:00" />
            </div>
            <div>
              <h3 className="text-sm">Check out time</h3>
              <input type="text" placeholder="14:00" />
            </div>
            <div>
              <h3 className="text-sm">Max&nbsp;number&nbsp;of&nbsp;guests</h3>
              <input type="text" />
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
