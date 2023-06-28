import axios from "axios";

export const deleteAccommodation = async (accommodationId: string) => {
  return await axios.delete(`/accommodations/${accommodationId}`);
};

export const useDeleteAccommodation = () => {
  return {};
};
