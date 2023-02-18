import {
  FaAirbnb,
  FaUserCircle,
  GiHamburgerMenu,
  IoSearchCircle,
} from "react-icons/all";

export const Navbar = () => {
  return (
    <header className="p-4 flex items-center justify-between">
      <a href="" className="flex justify-start items-center gap-1">
        <div className="rotate-180 text-4xl text-indigo-500">
          <FaAirbnb />
        </div>
        <span className="font-black tracking-wide text-indigo-500 text-xl">
          airdnd
        </span>
      </a>
      <div
        className="flex items-center justify-around gap-2
      border border-gray-300 rounded-full py-2 px-4 shadow-md"
      >
        <div>Anywhere</div>
        <div className="border-l border-gray-400"> </div>
        <div>Any week</div>
        <div className="border-l border-red-400"></div>
        <div className="text-gray-400">Add guests</div>
        <button className="text-4xl text-indigo-500">
          <IoSearchCircle />
        </button>
      </div>
      <div
        className="flex items-center justify-around gap-2
      border border-gray-300 rounded-full py-3 px-4 shadow-md
      text-3xl text-gray-500"
      >
        <GiHamburgerMenu />
        <FaUserCircle />
      </div>
    </header>
  );
};
