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
        className="flex items-center justify-end gap-2 w-1/2
      border border-gray-300 rounded-full px-4 shadow-md"
      >
        <input
          type="text"
          placeholder="Search place..."
          className="border-none outline-0"
        />
        <button className="text-4xl text-indigo-500">
          <IoSearchCircle />
        </button>
      </div>
      <Link to={user ? "/account" : "/login"}>
        <div
          className="flex items-center justify-around gap-2
      border border-gray-300 rounded-full py-3 px-4 shadow-md
      text-xl text-gray-500"
        >
          <GiHamburgerMenu />
          <FaUserCircle />
          {!!user && <div>{user.name}</div>}
        </div>
      </Link>
    </header>
  );
};
