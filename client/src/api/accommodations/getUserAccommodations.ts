import axios from "axios";
import { TAccommodation } from "../../components/Accommodation";

export const getUserAccommodations = async (): Promise<TAccommodation[]> => {
  const response = await axios.get("/accommodations/user-accommodations");
  return response.data.accommodations;
};
