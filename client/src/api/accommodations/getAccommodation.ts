import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TAccommodation } from "../../types/accommodation";

export const getAccommodation = async (id: string): Promise<TAccommodation> => {
  const { data } = await axios.get(`/accommodations/${id}`);
  console.log(data);
  return data;
};

export const useGetAccommodation = (id: string) => {
  return useQuery({
    queryKey: ["accommodations", id],
    queryFn: () => getAccommodation(id),
  });
};
