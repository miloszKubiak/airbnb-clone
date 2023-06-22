import { AccountNavbar, Loader } from "../components";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserAccommodationsPage } from "./Accommodation/UserAccommodationsPage";
import { FavoritesContext } from "../context/FavoritesContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const Profile = () => {
  const { ready, user, setUser } = useContext(UserContext);
  const { setFavorites } = useContext(FavoritesContext);
  let { subpage } = useParams();
  const navigate = useNavigate();

  if (subpage === undefined) {
    subpage = "profile";
  }

  const queryClient = useQueryClient();

  const { mutate: logoutUser } = useMutation({
    mutationFn: async () => await axios.post("/auth/logout"),
    onSuccess: () => {
      queryClient.resetQueries();
      navigate("/");
      toast.success("Logged out");
      setUser(null);
      setFavorites([]);
    },
    onError: (error) => {
      toast.error("Something went wrong..");
      console.error(error);
    },
  });

  if (!ready) return <Loader />;
  if (ready && !user) return <Navigate to={"/login"} />;

  return (
    <div>
      <AccountNavbar />
      <div className="h-full text-center max-w-lg mx-auto mt-10">
        <p>
          Logged in as <span className="font-bold">{user?.name}</span> (
          {user?.email})
        </p>
        <button onClick={() => logoutUser()} className="primary max-w-xs mt-6">
          Logout
        </button>
      </div>
      {subpage === "accommodations" && <UserAccommodationsPage />}
    </div>
  );
};
