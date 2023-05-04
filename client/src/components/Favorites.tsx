import axios from "axios";
import { useEffect } from "react";

export const Favorites = () => {
  const getUserFavorites = async () => {
    const response = await axios.get("/user-favorites");
    console.log(response.data);
  };

  useEffect(() => {
    getUserFavorites();
  }, []);

  return <div className="h-screen flex items-center justify-center"></div>;
};
