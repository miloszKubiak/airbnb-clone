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
    <header className="flex items-center justify-between pb-4 max-h-full border-b-[1px] border-zinc-300">
      <Link to={"/"}>
        <div className="flex justify-start items-center gap-1">
          <div className="rotate-180 text-4xl text-indigo-500">
            <FaAirbnb />
          </div>
          <span className="font-black tracking-wide text-indigo-500 text-2xl">
            airdnd
          </span>
        </div>
      </Link>

      <div
        className="flex items-center justify-end gap-2 w-1/3
      border border-gray-300 rounded-full px-2 shadow-md"
      >
        <input
          type="text"
          placeholder="Search place..."
          className="border-none outline-0 h-full"
        />
        <button className="text-4xl text-indigo-500">
          <IoSearchCircle />
        </button>
      </div>
      <Link to={user ? "/account" : "/login"}>
        <div
          className="flex items-center justify-around gap-2
      border border-zinc-300 rounded-full px-6 py-2 shadow-md
      text-2xl text-zinc-500"
        >
          <GiHamburgerMenu />
          <FaUserCircle />
          {!!user && <div>{user.name}</div>}
        </div>
      </Link>
    </header>
  );
};
