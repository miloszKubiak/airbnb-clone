import { Link, useLocation } from "react-router-dom";

export const AccountNavbar = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];

  if (subpage === undefined) {
    subpage = "profile";
  }

  const linkClasses = (type = "") => {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " text-white bg-indigo-500 rounded-full";
    }
    return classes;
  };

  return (
    <div>
      <nav className="mt-10 w-full flex justify-center items-center gap-4">
        <Link to={"/account"} className={linkClasses("profile")}>
          My profile
        </Link>
        <Link to={"/account/bookings"} className={linkClasses("bookings")}>
          My bookings
        </Link>
        <Link
          to={"/account/accommodations"}
          className={linkClasses("accommodations")}
        >
          My accommodations
        </Link>
      </nav>
    </div>
  );
};
