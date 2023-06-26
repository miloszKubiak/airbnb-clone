import { TReservation } from "../../types/reservation";
import axios from "axios";

type UserReservationsResponse = {
  numOfPages: number;
  reservations: TReservation[];
  totalReservations: number;
};

export const getUserReservations = async (
  pageParam = 1
): Promise<UserReservationsResponse> => {
  const { data } = await axios.get(`/reservations?page=${pageParam}`);
  return data;
};
