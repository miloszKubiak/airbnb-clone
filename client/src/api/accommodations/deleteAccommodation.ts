import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useDeleteAccommodation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (accommodationId: string) => {
      return axios.delete(`/accommodations/${accommodationId}`);
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["accommodations"] });
      toast.success(response.data.msg);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
