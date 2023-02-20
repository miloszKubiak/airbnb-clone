import {
  FaAirbnb,
  FaUserCircle,
  GiHamburgerMenu,
  IoSearchCircle,
} from "react-icons/all";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="flex items-center justify-between">
      <Link to={"/"}>
        <div className="flex justify-start items-center gap-1">
          <div className="rotate-180 text-4xl text-indigo-500">
            <FaAirbnb />
          </div>
          <span className="font-black tracking-wide text-indigo-500 text-xl">
            airdnd
          </span>
        </div>
      </Link>

      <div
        className="flex items-center justify-around gap-2
      border border-gray-300 rounded-full py-2 px-4 shadow-md"
      >
        <div className="border-r border-gray-400 px-3">Anywhere</div>
        <div className="border-r border-gray-400 px-3">Any week</div>
        <div className="text-gray-400">Add guests</div>
        <button className="text-4xl text-indigo-500">
          <IoSearchCircle />
        </button>
      </div>
      <Link to={"/login"}>
        <div
          className="flex items-center justify-around gap-2
      border border-gray-300 rounded-full py-3 px-4 shadow-md
      text-3xl text-gray-500"
        >
          <GiHamburgerMenu />
          <FaUserCircle />
          {!!user && <div>{user.name}</div>}
        </div>
      </Link>
    </header>
  );
};
