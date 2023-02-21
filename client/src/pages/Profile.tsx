import { AccountNavbar } from "../components";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, useParams } from "react-router-dom";

export const Profile = () => {
  const { ready, user } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) return <div>"Loading..."</div>;
  if (ready && !user) return <Navigate to={"/login"} />;

  return (
    <div>
      <AccountNavbar />
      <p>profile</p>
    </div>
  );
};
