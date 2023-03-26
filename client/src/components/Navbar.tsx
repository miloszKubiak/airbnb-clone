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
    <div className="flex items-center justify-between gap-4 pb-8 h-24 max-h-full border-b-2 border-zinc-200">
      <Link to={"/"} className="flex justify-start items-center gap-1 grow-0">
        <div className="rotate-180 text-5xl text-indigo-500">
          <FaAirbnb />
        </div>
        <span className="font-black tracking-wide text-indigo-500 text-2xl hidden sm:flex">
          airdnd
        </span>
      </Link>
      <div className="flex justify-between items-center mx-4 px-4 border-zinc-200 border-2 rounded-full grow">
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-zinc-100"
        />
        <button className="text-5xl text-indigo-500">
          <IoSearchCircle />
        </button>
      </div>
      <Link
        to={user ? "/account" : "/login"}
        className="flex justify-between items-center gap-1 text-5xl text-zinc-200"
      >
        {user ? (
          <div>
            <FaUserCircle />
          </div>
        ) : (
          <GiHamburgerMenu />
        )}
        {/*<GiHamburgerMenu />*/}
        {/*{!!user && (*/}
        {/*  <div>*/}
        {/*    <FaUserCircle />*/}
        {/*  </div>*/}
        {/*)}*/}
      </Link>
    </div>
  );
};
