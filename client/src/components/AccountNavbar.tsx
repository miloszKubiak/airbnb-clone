import { Link, useLocation } from "react-router-dom";
import { FaBookmark, FaHome, FaUser, MdPlace } from "react-icons/all";

export const AccountNavbar = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];

  if (subpage === undefined) {
    subpage = "profile";
  }

  const linkClasses = (type = "") => {
    let classes = "inline-flex items-center gap-2 py-2 px-6";
    if (type === subpage) {
      classes += " text-white bg-indigo-500 rounded-full";
    } else {
      classes += " bg-gray-200 rounded-full";
    }
    return classes;
  };

  return (
    <div>
      <nav className="mt-10 w-full flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link to={"/account"} className={linkClasses("profile")}>
          <FaUser />
          My profile
        </Link>
        <Link
          to={"/account/my-reservations"}
          className={linkClasses("my-reservations")}
        >
          <MdPlace />
          My reservations
        </Link>
        <Link
          to={"/account/my-accommodations"}
          className={linkClasses("my-accommodations")}
        >
          <FaHome />
          My accommodations
        </Link>
        <Link
          to={"/account/saved-accommodations"}
          className={linkClasses("saved-accommodations")}
        >
          <FaBookmark />
          Saved
        </Link>
      </nav>
    </div>
  );
};
