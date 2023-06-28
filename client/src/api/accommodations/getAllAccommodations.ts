import axios from "axios";
import { TAccommodation } from "../../types/accommodation";
import { useQuery } from "@tanstack/react-query";

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

  return data;
};

export const useGetAllAccommodations = (
  page: number,
  sort: string,
  category: string,
  search: string
) =>
  useQuery({
    queryKey: ["accommodations", page, sort, category, search],
    queryFn: () => getAllAccommodations(page, sort, category, search),
  });
