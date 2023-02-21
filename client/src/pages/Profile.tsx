import { AccountNavbar } from "../components";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Profile = () => {
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  const navigate = useNavigate();

  const logout = async () => {
    await axios.post("/auth/logout");
    navigate("/");
    setUser(null);
  };

  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) return <div>"Loading..."</div>;
  if (ready && !user) return <Navigate to={"/login"} />;

  return (
    <div>
      <AccountNavbar />
      <div className="text-center max-w-lg mx-auto mt-10">
        <p>
          Logged in as <span className="font-bold">{user?.name}</span> (
          {user?.email})
        </p>
        <button onClick={logout} className="primary max-w-xs mt-6">
          Logout
        </button>
      </div>
    </div>
  );
};
