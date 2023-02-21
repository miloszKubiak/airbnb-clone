import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, Navigate } from "react-router-dom";

export const Account = () => {
  const { ready, user } = useContext(UserContext);

  if (!ready) return <div>"Loading..."</div>;
  if (ready && !user) return <Navigate to={"/login"} />;

  return (
    <div>
      <nav className="mt-10 w-full flex justify-center items-center gap-4">
        <Link
          to={"/account"}
          className="py-3 px-5 text-white bg-indigo-500 rounded-full"
        >
          My profile
        </Link>
        <Link to={"/account/bookings"} className="py-2 px-6">
          My bookings
        </Link>
        <Link to={"/account/accommodations"} className="py-3 px-5 text-center">
          My accommodations
        </Link>
      </nav>
    </div>
  );
};
