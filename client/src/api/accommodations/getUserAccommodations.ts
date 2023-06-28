import axios from "axios";
import { TAccommodation } from "../../types/accommodation";
import { useQuery } from "@tanstack/react-query";

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

  return data;
};

export const useGetUserAccommodations = (page: number) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["accommodations", page],
    queryFn: () => getUserAccommodations(page),
  });

  return { isLoading, isError, data };
};
