import axios from "axios";
import { TAccommodation } from "../../types/accommodation";

type AllAccommodationsResponse = {
  accommodations: TAccommodation[];
  numOfPages: number;
  totalAccommodations: number;
};

export const getAllAccommodations = async (
  page: number,
  sort: string,
  category: string,
  search: string
): Promise<AllAccommodationsResponse> => {
  let url = `/accommodations?page=${page}&sort=${sort}&category=${category}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  const { data } = await axios.get(url);
  // if (data === undefined) throw new Error();
  return data;
};
