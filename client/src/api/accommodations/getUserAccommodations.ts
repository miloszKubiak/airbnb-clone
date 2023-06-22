import axios from "axios";
import { TAccommodation } from "../../components/Accommodation";

type UserAccommodationsResponse = {
  accommodations: TAccommodation[];
  numOfPages: number;
  totalAccommodations: number;
};

export const getUserAccommodations = async (
  pageParam = 1
): Promise<UserAccommodationsResponse> => {
  const { data } = await axios.get(
    `/accommodations/user-accommodations?page=${pageParam}`
  );
  // if (data === undefined) throw new Error();
  return data;
};
