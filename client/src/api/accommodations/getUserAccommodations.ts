import axios from "axios";
import { TAccommodation } from "../../types/accommodation";

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
  console.log(data);
  // if (data === undefined) throw new Error();
  return data;
};
