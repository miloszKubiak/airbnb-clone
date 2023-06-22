import axios from "axios";

export const logoutUser = async () => {
  return await axios.post("/auth/logout");
};
