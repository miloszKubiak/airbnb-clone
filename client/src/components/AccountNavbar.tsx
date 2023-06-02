import { Link, useLocation } from "react-router-dom";
import { FaHeart, FaHome, FaUser, MdPlace } from "react-icons/all";

export const AccountNavbar = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];

  if (subpage === undefined) {
    subpage = "profile";
  }

  const linkClasses = (type = "") => {
    let classes =
      "inline-flex items-center gap-2 py-2 px-6 text-3xl sm:text-base";
    if (type === subpage) {
      classes += " text-white bg-indigo-500 rounded-full";
    } else {
      classes += " bg-gray-200 rounded-full";
    }
    return classes;
  };

  return (
    <div>
      <nav className="mt-10 w-full flex justify-center items-center gap-3">
        <Link to={"/account"} className={linkClasses("profile")}>
          <FaUser />
          <p className="hidden sm:block">My profile</p>
        </Link>
        <Link
          to={"/account/my-reservations"}
          className={linkClasses("my-reservations")}
        >
          <MdPlace />
          <p className="hidden sm:block">My reservations</p>
        </Link>
        <Link
          to={"/account/my-accommodations"}
          className={linkClasses("my-accommodations")}
        >
          <FaHome />
          <p className="hidden sm:block">My accommodations</p>
        </Link>
        <Link to={"/account/favorites"} className={linkClasses("favorites")}>
          <FaHeart />
          <p className="hidden sm:block">Favorites</p>
        </Link>
      </nav>
    </div>
  );
};
