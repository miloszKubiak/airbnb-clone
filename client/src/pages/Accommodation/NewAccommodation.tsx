import { AccountNavbar } from "../../components";
import { Link } from "react-router-dom";
import { FaWifi, GoCloudUpload } from "react-icons/all";

export const NewAccommodation = () => {
  return (
    <div>
      <AccountNavbar />
      <h1 className="text-center text-xl mt-4">Add new accommodation</h1>
      <form
        className="bg-amber-200 p-3 mt-2"
        onSubmit={() => console.log("submit")}
      >
        <div className="bg-rose-300 my-4 px-4">
          <h2 className="text-xl font-bold">Title</h2>
          <p>
            Title for your place. should be short and catchy as in advertisement
          </p>
          <input type="text" placeholder="add title.." />
          <p>error</p>
        </div>
        <div className="bg-rose-300 my-4 px-4">
          <h2 className="text-xl font-bold">Address</h2>
          <p>
            Title for your place. should be short and catchy as in advertisement
          </p>
          <input type="text" placeholder="add address..." />
          <p>error</p>
        </div>
        <div className="bg-rose-300 my-4 px-4">
          <h2 className="text-xl font-bold">Photos</h2>
          <p>Add photos using link or upload from your device</p>
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
        <div className="bg-rose-300 my-4 px-4">
          <h2 className="text-xl font-bold">Description</h2>
          <p>Add description of the place</p>
          <textarea />
          <p>error</p>
        </div>
        <div className="bg-rose-300 my-4 px-4">
          <h2 className="text-xl font-bold">Perks</h2>
          <p>Select all the perks of your place</p>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <FaWifi />
              <span>Wifi</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <span>TV</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <span>Kitchen</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <span>Free parking spot</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <span>Private entrance</span>
            </label>
            <label className="p-4 flex items-center gap-1 border rounded-2xl cursor-pointer">
              <input type="checkbox" />
              <span>Pets</span>
            </label>
          </div>
          <p>error</p>
        </div>
      </form>
      <div className="flex justify-center mt-4">
        <Link className="link-primary" to={"/account/accommodations"}>
          Back
        </Link>
      </div>
    </div>
  );
};
